import { Request, Response } from 'express';
import { Course } from '../models/course';

export const createCourse = async (req: Request, res: Response) => {

    const { name, duration, description } = req.body;
    try {

        const course = await Course.create({ name, duration, description });
        res.status(201).json({ coursename: course.name, description: course.description, duration: course.duration })
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({ error: err });
    }
}
export const getCourse = async (req: Request, res: Response) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json({ courses })
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({ error: "Failed to Fetch Courses" })
    }
}
export const getCourseById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const course = await Course.findByPk(id);
        if (course) {
            res.status(200).json({ course })
        }
        else {
            res.status(404).json({ error: "course not found" })
        }
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({ error: "Failed to Fetch Course" })
    }
}
export const updateCourse = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, duration, description } = req.body
    try {
        const course = await Course.findByPk(id);
        if (course) {
            course.name = name;
            course.duration = duration;
            course.description = description;
            await course.save();
            res.status(201).json({ course })
        }
        else {
            res.status(404).json({ error: "course not found" })
        }
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({ error: "Failed to fetch course" })
    }
}
export const deleteCourse = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const course = await Course.findByPk(id);
        if (course) {
            await course.destroy();
            res.status(200).json({ meassage: "Course deleted successfully" })
        }
        else {
            res.status(404).json({ error: "course not found" })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to delete course" })
    }
}