import express from "express";
import {
  getAulluser,
  getSingleuser,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
} from "./../controller/userController";

const router = express.Router();

router.get("/", getAulluser);
router.get("/:id", getSingleuser);
router.post("/", createUser);
router.put("/changPassword/:id", changePassword);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;
