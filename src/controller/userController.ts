import { Request, Response } from "express";
import { myDataSource } from "../../app-data-source";
import { User } from "../entitys/userEntity";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const getAulluser = async (req: Request, res: Response) => {
  try {
    const userRepository = await myDataSource.getRepository(User);
    const users = await userRepository.find();
    users && res.status(202).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const getSingleuser = async (req: Request, res: Response) => {
  try {
    const userRepository = await myDataSource.getRepository(User);
    const userSingle = await userRepository.findOne({
      where: {
        id: Number(req.params.id),
      },
    });

    userSingle && res.status(202).send(userSingle);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userRepository = await myDataSource.getRepository(User);
    const checkUser = await userRepository.findOne({
      where: { id: req.body.userName },
    });
    if (checkUser)
      return res
        .status(404)
        .send(`มีผู้ใช้ชื่อนี้ :  ${req.body.userName} แล้ว`);
    bcrypt.hash(req.body.password, saltRounds, async (err: any, hash: any) => {
      // Store hash in your password DB.
      req.body.password = hash;
      const newUser = await userRepository.create(req.body);
      const result = await userRepository.save(newUser);
      result && res.status(202).send("เพื่มข้อมูลผู้ใช้สำเร็จ");
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userRepository = await myDataSource.getRepository(User);
    const checkUser = await userRepository.findOne({
      where: { id: Number(req.params.id) },
    });
    if (!checkUser) return res.status(404).send("ไม่มีผู้ใช้");
    userRepository.merge(checkUser, req.body);
    const result = await userRepository.save(checkUser);
    result && res.status(202).send("แก้ไขข้อมูลสำเร็จแล้ว");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const userRepository = await myDataSource.getRepository(User);
    const checkUser = await userRepository.findOne({
      where: { id: Number(req.params.id) },
    });
    if (!checkUser) return res.status(404).send("ไม่พบผู้ใช้");
    bcrypt.compare(
      req.body.newpassword,
      checkUser.password,
      async (err: any, result: any) => {
        // result == true
        if (result) {
          const updatePassword = await userRepository
            .createQueryBuilder()
            .update(User)
            .set({ password: req.body.newPassword })
            .where("id = :id", { id: Number(req.params.id) })
            .execute();
          if (updatePassword) res.status(202).send("แก้ไขข้อมูลสำเร็จ");
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
