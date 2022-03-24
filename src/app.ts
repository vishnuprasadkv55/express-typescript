import express from "express";
import morgan from "morgan";
import { genericErrorHandler } from "./errors/genericErrorHandler";
import { notFound } from "./errors/notFound";
import featureRouter from "./feature/feature.router";
import routes from "./routes";

const app = express();

// setting all routes
for (const [key, value] of routes.entries()) {
  app.use(key, value);
}

app.use(morgan("dev"));
app.use(genericErrorHandler);
app.use(notFound);

export default app;
