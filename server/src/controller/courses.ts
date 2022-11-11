import { NextFunction, Request, Response } from "express";
import asyncHandler from "../middleware/async-handler";
import course from "../db/models/course";
import { JSONResponse } from "../types";

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
    success: true,
    data,
  };
  res.status(200).json(response);
});

// const getCourse = asyncHandler(async (req, res, next) =>{

// })

export { getCourses };
