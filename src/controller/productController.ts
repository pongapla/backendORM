import { Request, Response } from "express";
import { myDataSource } from "../../app-data-source";
import { Product } from "../entitys/productEntity";

export const getAullproduct = async (req: Request, res: Response) => {
  try {
    const productRepository = await myDataSource.getRepository(Product);
    const prodects = productRepository.find();
    prodects && res.status(202).send(prodects);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
