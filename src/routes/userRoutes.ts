import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.status(202).send("Hello world");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

export default router;
