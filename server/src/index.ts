import express from "express";
import dotenv from "dotenv";
import bootcamp from "./routes/api/v1/bootcamps";
import logger from "./middleware/logger";
import connectDB from "./db/connect";

// load env variables
dotenv.config({ path: __dirname + "/../config/.env" });

// constants
const PORT = process.env.PORT || 4000;
const V1 = "/api/v1";
const app = express();

//connect to DB
connectDB();

// middlewares
app.use(logger);

// routes
app.use(V1, bootcamp);

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
