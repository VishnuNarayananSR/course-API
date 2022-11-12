import { Router } from "express";
import {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
} from "../../../controller/courses";

const courseRouter = Router({ mergeParams: true });

courseRouter.route("/courses").get(getCourses).post(createCourse);
courseRouter.route("/courses/:id").get(getCourse).delete(deleteCourse);

export default courseRouter;
