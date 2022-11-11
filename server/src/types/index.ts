import { NextFunction, Request, Response } from "express";

export type { default as Bootcamp } from "./bootcamp";
export interface Countable {
  count: number;
}
export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<unknown>;
type Success<T> = { success: true; data: T };
type Failure<E> = { success: false; err: E };
export type JSONResponse<T> = Success<T> | Failure<T>;
