import type { Request, Response, NextFunction } from "express";

export function tenantMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const tenantId = req.header("X-Tenant-Id");
  const userId = req.header("X-User-Id");

  console.log(req.headers);
  
  if (!tenantId || !userId) {
    return res.status(400).json({
      success: false,
      message: "Missing tenant headers",
    });
  }

  req.headers["tenantId"] = tenantId;
  req.headers["userId"] = userId;

  next();
}