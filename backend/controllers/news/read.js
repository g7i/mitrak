import express from "express";
import News from "../../db/models/news";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function listNews(req, res) {
    try {
        res.json(await News.find().exec());
    } catch (err) {
        return res.status(500).json({error: "Something went wrong."});
    }
}


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function getNews(req, res) {
    const { id } = req.params;

    let user;
    try {
        user = await News.findById(id).exec();
        if (!user) return res.status(404).json({error: "News not found."});
    } catch (e) {
        return res.status(500).json({error: "Something went wrong."});
    }
    return res.json(user);
}
