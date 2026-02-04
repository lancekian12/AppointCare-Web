import { Application } from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

export const setupSwagger = (app: Application) => {
  // Path to TSOA-generated swagger.json
  const swaggerFilePath = path.resolve(__dirname, "./openapi/swagger.json");

  if (!fs.existsSync(swaggerFilePath)) {
    console.warn(
      "[Swagger] swagger.json not found. Please run `npx tsoa spec` first."
    );
    return;
  }

  const swaggerDocument = require(swaggerFilePath);

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  console.log("[Swagger] API documentation available at /docs");
};
