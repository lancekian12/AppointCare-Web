import { Request, Response, NextFunction } from "express";
import { ApiError } from "../../utils/ApiError";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new ApiError(`Route ${req.originalUrl} not found`, 404));
};