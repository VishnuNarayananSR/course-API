import { NextFunction, Request, Response } from "express";
import { ApiError } from "../types/errors";

export default class ErrorHandler {
  public static handle =
    () => (err: ApiError, req: Request, res: Response, next: NextFunction) => {
      let statusCode = err.statusCode;
      let message = err.message;
      if (err.name === "CastError") {
        message = `Incorrect identifier. No Resouce found`;
      }
      console.log(err.stack);
      res.status(statusCode || 500).json({ success: false, err: message });
    };
}
