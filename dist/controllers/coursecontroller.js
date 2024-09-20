"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourseById = exports.getCourse = exports.createCourse = void 0;
const course_1 = require("../models/course");
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, duration, description } = req.body;
    try {
        const course = yield course_1.Course.create({ name, duration, description });
        res.status(201).json({ coursename: course.name, description: course.description, duration: course.duration });
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({ error: err });
    }
});
exports.createCourse = createCourse;
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_1.Course.findAll();
        res.status(200).json({ courses });
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({ error: "Failed to Fetch Courses" });
    }
});
exports.getCourse = getCourse;
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const course = yield course_1.Course.findByPk(id);
        if (course) {
            res.status(200).json({ course });
        }
        else {
            res.status(404).json({ error: "course not found" });
        }
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({ error: "Failed to Fetch Course" });
    }
});
exports.getCourseById = getCourseById;
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, duration, description } = req.body;
    try {
        const course = yield course_1.Course.findByPk(id);
        if (course) {
            course.name = name;
            course.duration = duration;
            course.description = description;
            yield course.save();
            res.status(201).json({ course });
        }
        else {
            res.status(404).json({ error: "course not found" });
        }
    }
    catch (err) {
        console.log("error", err);
        res.status(500).json({ error: "Failed to fetch course" });
    }
});
exports.updateCourse = updateCourse;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const course = yield course_1.Course.findByPk(id);
        if (course) {
            yield course.destroy();
            res.status(200).json({ meassage: "Course deleted successfully" });
        }
        else {
            res.status(404).json({ error: "course not found" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to delete course" });
    }
});
exports.deleteCourse = deleteCourse;
