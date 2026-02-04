// swagger.ts
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";

// const {swaggerJsdoc} = require('swagger-jsdoc')

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AppointCare API",
      version: "1.0.0",
      description: "Backend API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.ts"], // <-- your route files
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
