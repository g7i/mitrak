import express from "express";
import News from "../../db/models/news";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function createNews(req, res) {
    let user;
    try {
        user = await News.create(req.body);
    } catch (err) {
        return res.status(400).json({error: err});
    }
    res.status(201).json(user);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function updateNews(req, res) {
    const { id } = req.params;
    try {
        await News.findByIdAndUpdate(id, req.body, {new: true}).exec();
    } catch (err) {
        return res.status(400).json({error: err});
    }
    res.sendStatus(200);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function removeNews(req, res) {
    const { id } = req.params;
    try {
        await News.findByIdAndDelete(id).exec();
    } catch (err) {
        return res.status(500).json({error: "Something went wrong."});
    }
    res.sendStatus(204);
}
