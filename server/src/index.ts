import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bootcamp from "./routes/api/v1/bootcamps";
import logger from "./middleware/logger";
import connectDB from "./db";
import { NotFoundError } from "./types/errors";
import ErrorHandler from "./middleware/error-handler";

// load env variables
dotenv.config({ path: __dirname + "/../config/.env" });

// constants
const PORT = process.env.PORT || 4000;
const V1 = "/api/v1";
const app = express();

//connect to DB
connectDB();

// middlewares
app.use(express.json());
app.use(logger);

// routes
app.use(V1, bootcamp);

// Invalid routes
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError());
});

// Error handling
app.use(ErrorHandler.handle());

// start listening
const server = app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  )
);

process.on("unhandledRejection", (err: Error, _) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
