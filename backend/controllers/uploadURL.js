import express from 'express';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({ region: 'ap-south-1' });

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export default async function uploadURL(req, res) {
    const {file, folder} = req.body;
    const command = new PutObjectCommand({Bucket: 'mitrak', Key: `${folder}/${file}`});
    try {
        const url = await getSignedUrl(s3Client, command);
        res.json({url});
    } catch (e) {
        res.status(400).json({error: e});
    }
}
