import { NextFunction, Request, Response } from "express";
import fs from "fs";

export const testController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Hello tester");
};

export const getTestData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const readStream = fs.createReadStream(process.cwd() + "/data/index.html");
  readStream.pipe(res);

  readStream.on("error", (err) => {
    console.error("Error reading file:", err);
    res.status(500).send("Internal Server Error");
  });

  readStream.on("end", () => {
    console.log("Streaming finished");
  });
};
