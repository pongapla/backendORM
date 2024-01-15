import express from "express";
import { sendmail } from "./../controller/emailController";
const router = express.Router();

router.post("/", sendmail);

export default router;
