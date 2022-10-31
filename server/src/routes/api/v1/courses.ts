import { Router } from "express";
import { getCourses } from "../../../controller/courses";

const courseRouter = Router({ mergeParams: true });

courseRouter.route("/courses").get(getCourses);

export default courseRouter;
