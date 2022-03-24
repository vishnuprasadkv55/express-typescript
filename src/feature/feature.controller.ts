import { Request, Response } from "express";

export const ping = (req: Request, res: Response) => {
  res.send("OK");
};
export const asyncPing = async (req: Request, res: Response) => {
  await Promise.resolve("error aayi mone");
  res.send("theernn");
};
