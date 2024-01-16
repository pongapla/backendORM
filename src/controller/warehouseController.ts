import { Warehouse } from "./../entitys/warehouseEntity";
import { Request, Response } from "express";
import { myDataSource } from "../../app-data-source";

export const getAullWH = async (req: Request, res: Response) => {
  try {
    const whRepository = myDataSource.getRepository(Warehouse);
    const warehouses = await whRepository.find();
    warehouses && res.status(202).send(warehouses);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const getSingleWH = async (req: Request, res: Response) => {
  try {
    const whRepository = myDataSource.getRepository(Warehouse);
    const warehouses = await whRepository.findOne({
      where: { id: Number(req.params.id) },
    });
    warehouses && res.status(202).send(warehouses);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const createWH = async (req: Request, res: Response) => {
  try {
    const whRepository = myDataSource.getRepository(Warehouse);
    const checkWH = await whRepository.findOne({
      where: { name: req.body.name },
    });
    if (checkWH)
      return res.status(404).send(`ชื่อ ${req.body.name} นี้ใช้งานในระบบแล้ว`);
    const newWH = whRepository.create(req.body);
    const result = await whRepository.save(newWH);
    result && res.status(202).send("เพิ่มข้อมูลสำเร็จ");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const updateWH = async (req: Request, res: Response) => {
  try {
    const whRepository = myDataSource.getRepository(Warehouse);
    const checkWH = await whRepository.findOne({
      where: { id: Number(req.params.id) },
    });
    if (!checkWH) return res.status(404).send("ไม่พบข้อมูลในระบบ");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
