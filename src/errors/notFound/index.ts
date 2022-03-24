import { NextFunction, Request, Response } from "express";

export function notFound(req: Request, res: Response, next: NextFunction): void {
  next({ status: 404, message: `Path not found: ${req.originalUrl}` });
}
