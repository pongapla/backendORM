import express from "express";
import cors from "cors";
import "reflect-metadata";
import { myDataSource } from "../app-data-source";

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
app.use("/api/sendEmail", require("./routes/sendEmailRoutes").default);
app.use(
  "/api/reportProduct",
  require("./routes/report/reportProductRoutes").default
);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
