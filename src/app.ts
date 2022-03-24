import express from "express";
import morgan from "morgan";
import { genericErrorHandler } from "./errors/genericErrorHandler";
import { notFound } from "./errors/notFound";
import featureRouter from "./feature/feature.router";

const app = express();

app.use("/feature", featureRouter);

app.use(morgan("dev"));
app.use(genericErrorHandler);
app.use(notFound);

export default app;
