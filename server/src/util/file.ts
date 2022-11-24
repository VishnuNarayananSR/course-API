import { Request } from "express";
import { createWriteStream } from "fs";
import path from "path";

const uploadFile = (
  req: Request,
  filePath: string,
  callback: (state: Record<string, string>) => void
) => {
  return new Promise((resolve, reject) => {
    const uploadPath = process.env.UPLOAD_PATH || "./public";
    const writeTo = path.join(uploadPath, filePath);
    const stream = createWriteStream(writeTo);
    const fileSize = parseInt(req.headers["content-length"] || "0");
    stream.on("open", () => {
      callback({ progress: "0.00%" });
      req.pipe(stream);
    });
    stream.on("drain", () => {
      const progress =
        ((stream.bytesWritten / fileSize) * 100).toFixed(2) + "%";
      callback({ progress });
    });
    stream.on("error", (err) => {
      reject({ message: "File upload failed", err });
    });
    stream.on("finish", () => {
      resolve({ message: "File upload complete" });
    });
  });
};

export default uploadFile;
