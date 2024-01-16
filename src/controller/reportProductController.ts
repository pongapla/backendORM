import { Request, Response } from "express";
import { myDataSource } from "../../app-data-source";
import { Product } from "../entitys/productEntity";

export const getAullProduct = async (req: Request, res: Response) => {
  try {
    const PDFDocument = require("pdfkit");
    const fs = require("fs");
    const doc = new PDFDocument();
    let reportName: string = "";
    reportName = "pong";
    doc.pipe(fs.createWriteStream(`src/report/product/${reportName}.pdf`));
    doc.fontSize(25).text("Here is some vector graphics...", 100, 100);
    doc.fontSize(16).text("Pong naja...", 120, 150);
    // Finalize PDF file
    doc.end();
    console.log("Test xxxxx");
    res.status(202).send("ok");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
