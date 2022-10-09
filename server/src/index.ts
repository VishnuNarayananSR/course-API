import express from "express";
import dotenv from "dotenv";
import bootcamp from "./routes/api/v1/bootcamps";
import logger from "./middleware/logger";

dotenv.config({ path: __dirname + "/../config/.env" });

const PORT = process.env.PORT || 4000;
const V1 = "/api/v1";
const app = express();

app.use(logger);

app.use(V1, bootcamp);

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  )
);
