import bootcamp from "../db/models/bootcamp";
import asyncHandler from "../middleware/async-handler";
import { Countable, JSONResponse } from "../types";
import { NotFoundError } from "../types/errors";
import paginate from "../middleware/paginate";

const getBootCamps = asyncHandler(async (req, res, next) => {
  const urlQuery = req.query;
  const queryCopy = { ...req.query };
  const removedFields = ["select", "limit", "page"];
  let filters = {};
  if (urlQuery) {
    removedFields.forEach((field) => delete queryCopy[field]);
    const cleanQuery = JSON.stringify(queryCopy).replace(
      /\b(in|nin|lte|lt|gte|gt)\b/,
      (match) => `$${match}`
    );
    filters = JSON.parse(cleanQuery);
  }
  let query = bootcamp
    .find(filters)
    .populate({ path: "courses", select: "_id title description" });
  if (urlQuery.select) {
    const selectFields = (urlQuery.select as string).split(",");
    query = query.select(selectFields);
  }
  query = paginate(req, res, next, query);
  const data = await query;
  const result: JSONResponse<object> & Countable = {
    count: data.length,
    data,
  };
  res.status(200).send(result);
});

const getBootCamp = asyncHandler(async (req, res, next) => {
  const result: JSONResponse<object> = {
    data: (await bootcamp.findById(req.params.id)) || {},
  };
  res.status(200).send(result);
});

const createBootCamp = asyncHandler(async (req, res, next) => {
  const result: JSONResponse<object> = {
    data: await bootcamp.create(req.body),
  };
  res.status(200).send(result);
});

const updateBootCamp = asyncHandler(async (req, res, next) => {
  const data = await bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!data) {
    next(new NotFoundError("No Bootcamps found"));
  } else {
    res.status(201).send({
      data: data,
    } as JSONResponse<object>);
  }
});

const deleteBootCamp = asyncHandler(async (req, res, next) => {
  const data = await bootcamp.findById(req.params.id);
  if (!data) {
    next(new NotFoundError("No Bootcamps found"));
  } else {
    data.remove();
    res.status(200).send({
      data: data,
    } as JSONResponse<object>);
  }
});

export {
  getBootCamp,
  getBootCamps,
  createBootCamp,
  updateBootCamp,
  deleteBootCamp,
};
