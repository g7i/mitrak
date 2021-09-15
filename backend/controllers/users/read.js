import express from "express";
import Users from "../../db/models/user";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function listUsers(req, res) {
    try {
        res.json(await Users.find().exec());
    } catch (err) {
        console.error(err)
        return res.status(500).json({error: "Something went wrong."});
    }
}


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function getUser(req, res) {
    const { id } = req.params;

    let user;
    try {
        user = await Users.findOne({ id }).exec();
        if (!user) return res.status(404).json({error: "User not found."});
    } catch (e) {
        console.error(e)
        return res.status(500).json({error: "Something went wrong."});
    }
    return res.json(user);
}
