import asyncHandler from "../middleware/async-handler";
import course from "../db/models/course";
import { JSONResponse } from "../types";
import { NotFoundError } from "../types/errors";

const getCourses = asyncHandler(async (req, res, next) => {
  let query;
  if (req.params.bootcampId) {
    query = course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = course
      .find()
      .populate({ path: "bootcamp", select: "name description" });
  }
  const data = await query;
  const response: JSONResponse<Object> = {
    data,
  };
  res.status(200).json(response);
});

const getCourse = asyncHandler(async (req, res, next) => {
  const result: JSONResponse<object> = {
    data: (await course.findById(req.params.id)) || {},
  };
  res.status(200).send(result);
});

const createCourse = asyncHandler(async (req, res, next) => {
  const result: JSONResponse<object> = {
    data: await course.create(req.body),
  };
  res.status(200).send(result);
});

const deleteCourse = asyncHandler(async (req, res, next) => {
  const courseData = await course.findByIdAndDelete(req.params.id);
  if (!courseData) {
    next(new NotFoundError("Course to be deleted doesn't exist"));
  } else {
    res.status(200).send({
      data: courseData,
    } as JSONResponse<object>);
  }
});

export { getCourses, getCourse, createCourse, deleteCourse };
