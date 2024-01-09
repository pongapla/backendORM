import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
