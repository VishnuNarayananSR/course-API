import { NextFunction, Request, Response } from "express";
import { ApiError } from "../types/errors";

export default class ErrorHandler {
  public static handle =
    () => (err: ApiError, _: Request, res: Response, next: NextFunction) => {
      console.log(err.stack);
      res
        .status(err.statusCode || 500)
        .json({ success: false, err: err.message });
    };
}
