import express from "express";
import { getAullProduct } from "./../../controller/reportProductController";

const router = express.Router();

router.get("/", getAullProduct);

export default router;
