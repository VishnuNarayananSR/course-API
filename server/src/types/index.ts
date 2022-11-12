import { NextFunction, Request, Response } from "express";

export type { default as Bootcamp } from "./bootcamp";
export type { default as Course } from "./course";
export interface Countable {
  count: number;
}
export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<unknown>;
type Success<T> = { data: T };
type Failure<E> = { err: E };
export type JSONResponse<T> = Success<T> | Failure<T>;
