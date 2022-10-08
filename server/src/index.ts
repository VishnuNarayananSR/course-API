import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 4000;

const app = express();

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  )
);
