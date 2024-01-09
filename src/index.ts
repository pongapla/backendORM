import express, { Request, Response } from "express";
import cors from "cors";
import "reflect-metadata";
import { myDataSource } from "./app-data-source.ts";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

myDataSource
  .initialize()
  .then(() => {
    console.log("Connected!");
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use("/api/user", require("./routes/userRoutes").default);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
