import { Router } from "express";
import { asyncMiddleware } from "../middlewares/asyncMiddleWare";
import { asyncPing, ping } from "./feature.controller";

const router = Router();
router.route("/ping").get(ping);
router.route("/asyncPing").get(asyncMiddleware(asyncPing));
export default router;
