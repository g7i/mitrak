import express from "express";
import Students from "../../db/models/students";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {Promise<*>}
 */
export async function listStudents(req, res) {
    try {
        res.json(await Students.find().exec());
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
export async function getStudent(req, res) {
    const {roll} = req.params;

    let student;
    try {
        student = await Students.findOne({roll}).exec();
        if (!student) return res.status(404).json({error: "Student not found."});
    } catch (e) {
        console.error(e)
        return res.status(500).json({error: "Something went wrong."});
    }
    return res.json(student);
}
