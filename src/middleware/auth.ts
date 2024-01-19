import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

export const auth = async (req: Request, res: Response, next: any) => {
  try {
    const token = req.headers["authtoken"];

    if (!token) {
      return res.status(401).send("Unauthorized - Token missing");
    }

    const secretKey = "jwtsecret" as string; // Explicitly assert the type as string
    try {
      const decoded = jwt.verify(token, secretKey);

      next();
    } catch (err) {
      console.error(err);
      return res.status(401).send("Unauthorized - Invalid token");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
