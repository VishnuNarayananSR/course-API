export class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    Error.captureStackTrace(this, ApiError);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string = "No results found") {
    super(404, message);
  }
}
