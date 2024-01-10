import { Request, Response } from "express";
import { myDataSource } from "../../app-data-source";
import { User } from "../entitys/userEntity";

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

export const createUser = (req: Request, res: Response) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
