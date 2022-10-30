import { NextFunction, Request, Response } from "express";

export default (
  req: Request,
  res: Response,
  next: NextFunction,
  query: any
) => {
  let page = 1;
  let limit = 10;
  if (req.query.page && typeof req.query.page === "string")
    page = parseInt(req.query.page) || 1;
  if (req.query.limit && typeof req.query.limit === "string")
    limit = parseInt(req.query.limit) || 10;
  query.skip((page - 1) * limit).limit(limit);
  return query;
};
