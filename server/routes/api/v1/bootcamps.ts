import { Router } from "express";
import {
  createBootCamp,
  deleteBootCamp,
  getBootCamp,
  getBootCamps,
  updateBootCamp,
} from "../../../controller/bootcamps";

const router = Router();

router.route("/bootcamps").get(getBootCamps).post(createBootCamp);

router
  .route("/bootcamps/:id")
  .get(getBootCamp)
  .put(updateBootCamp)
  .delete(deleteBootCamp);

export default router;
