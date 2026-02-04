import expressMongoSanitize from "@exortek/express-mongo-sanitize";
import helmet from "helmet";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import xss from "xss";
import { Request, Response, NextFunction } from "express";

// ===== Rate limiter =====
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later",
});

// ===== XSS sanitization middleware =====
export const xssSanitize = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === "string") {
        req.body[key] = xss(req.body[key]);
      }
    }
  }

  // Sanitize params
  if (req.params) {
    for (const key in req.params) {
      if (typeof req.params[key] === "string") {
        req.params[key] = xss(req.params[key]);
      }
    }
  }

  next();
};

// ===== Security middlewares =====
export const securityMiddlewares = [
  helmet(),
  hpp(),

  expressMongoSanitize(),  // safe fork

  apiLimiter,
  xssSanitize,
];
