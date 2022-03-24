import { NextFunction, Request, Response } from "express";
import { GenericError } from "./interfaces";

export function genericErrorHandler(
  error: GenericError,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const { status = 500, message = "something went wrong!" } = error;
  response.status(Number(status)).json({ error: message });
}
