import type { Request, Response } from "express";

export function health(req: Request, res: Response) {
  res.json({
    success: true,
    status: "OK",
    timestamp: new Date(),
  });
}