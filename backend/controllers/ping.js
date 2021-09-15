import express from 'express';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export default function ping(req, res) {
    res.json({ message: 'pong' })
}
