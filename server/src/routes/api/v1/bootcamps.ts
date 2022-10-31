import { Router } from "express";
import {
  createBootCamp,
  deleteBootCamp,
  getBootCamp,
  getBootCamps,
  updateBootCamp,
} from "../../../controller/bootcamps";
import courseRouter from "./courses";

const bootcampRouter = Router();

bootcampRouter.route("/bootcamps").get(getBootCamps).post(createBootCamp);

bootcampRouter
  .route("/bootcamps/:id")
  .get(getBootCamp)
  .put(updateBootCamp)
  .delete(deleteBootCamp);

// re-route to courses
bootcampRouter.use("/bootcamps/:bootcampId", courseRouter);

export default bootcampRouter;
