export type { default as Bootcamp } from "./bootcamp";

type Success<T> = { success: true; data: T };
type Failure<E> = { success: false; err: E };
export type JSONResponse<T> = Success<T> | Failure<T>;
