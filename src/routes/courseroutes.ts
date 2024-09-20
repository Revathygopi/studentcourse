import { Router } from "express";
import { createCourse,getCourse,getCourseById,updateCourse,deleteCourse } from "../controllers/coursecontroller";

const router = Router();

router.post('/createcourse',createCourse);
router.get('/course',getCourse);
router.get('/course/:id',getCourseById);
router.put('/course/:id',updateCourse);
router.delete('/course/:id',deleteCourse)
 export default router;
 