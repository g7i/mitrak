import express from "express";
import Users from "../../db/models/user";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function createUser(req, res) {
    let user;
    try {
        user = await Users.create(req.body);
    } catch (err) {
        console.error(err)
        return res.status(400).json({error: err});
    }
    res.status(201).json(user);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function updateUser(req, res) {
    const { id } = req.params;
    try {
        await Users.findOneAndUpdate({ id }, req.body, {new: true}).exec();
    } catch (err) {
        console.error(err)
        return res.status(400).json({error: err});
    }
    res.sendStatus(200);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function removeUser(req, res) {
    const { id } = req.params;
    try {
        await Users.findOneAndDelete({ id }).exec();
    } catch (err) {
        console.error(err)
        return res.status(500).json({error: "Something went wrong."});
    }
    res.sendStatus(204);
}
