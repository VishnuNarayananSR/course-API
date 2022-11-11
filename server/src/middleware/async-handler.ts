import { NextFunction, Request, Response } from "express";

type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<unknown>;

const asyncHandler =
  (fn: Middleware): Middleware =>
  (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };

export default asyncHandler;
