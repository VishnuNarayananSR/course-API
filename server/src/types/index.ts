export type { default as Bootcamp } from "./bootcamp";

export interface Countable {
  count: number;
}

type Success<T> = { success: true; data: T };
type Failure<E> = { success: false; err: E };
export type JSONResponse<T> = Success<T> | Failure<T>;
