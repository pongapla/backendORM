import { Request, Response } from "express";
import { myDataSource } from "../../app-data-source";
import { User } from "../entitys/userEntity";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  try {
    const userRepository = await myDataSource.getRepository(User);
    const checkUser = await userRepository.findOne({
      where: { userName: req.body.userName },
    });

    if (!checkUser) return res.status(404).send(`ไม่พบผู้ใช้นี้ในระบบ`);
    const checkPassword = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );
    if (!checkPassword) return res.status(404).send("รหัสผ่านไม่ถูกต้อง");
    let payload = { userName: checkUser.userName };
    let token = jwt.sign(payload, "jwtsecret", { expiresIn: 100 });

    res.status(202).send(token);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
