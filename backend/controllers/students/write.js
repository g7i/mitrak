import express from "express";
import Students from "../../db/models/students";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function createStudent(req, res) {
    let student;
    try {
        student = await Students.create(req.body);
    } catch (err) {
        console.error(err)
        return res.status(400).json({error: err});
    }
    res.status(201).json(student);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function updateStudent(req, res) {
    try {
        await Students.findOneAndUpdate({roll: req.params.roll}, req.body, {new: true}).exec();
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
export async function removeStudent(req, res) {
    try {
        await Students.findOneAndDelete({roll: req.params.roll}).exec();
    } catch (err) {
        console.error(err)
        return res.status(500).json({error: "Something went wrong."});
    }
    res.sendStatus(204);
}
