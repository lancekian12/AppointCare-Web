import { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import xss from "xss";

// ===== Rate limiter =====
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again later",
});

// ===== XSS sanitization middleware =====
export const xssSanitize = (req: Request, res: Response, next: NextFunction) => {
  // sanitize body
  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === "string") {
        req.body[key] = xss(req.body[key]);
      }
    }
  }

  // sanitize query
  if (req.query) {
    for (const key in req.query) {
      if (typeof req.query[key] === "string") {
        req.query[key] = xss(req.query[key]);
      }
    }
  }

  // sanitize params
  if (req.params) {
    for (const key in req.params) {
      if (typeof req.params[key] === "string") {
        req.params[key] = xss(req.params[key]);
      }
    }
  }

  next();
};

// ===== Security middleware stack =====
export const securityMiddlewares = [
  helmet(),
  hpp(),
  mongoSanitize(),
  apiLimiter,
  xssSanitize,
];
