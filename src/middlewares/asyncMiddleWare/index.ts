import { NextFunction, Request, Response } from "express";

export const asyncMiddleware =
  (fn: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await Promise.resolve(fn(req, res, next));
      return result;
    } catch (err) {
      next(err);
    }
  };
// export const asyncMiddleware =
//   (fn: any) => (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch(next);
//   };
