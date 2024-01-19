import express from "express";
import {
  getAulluser,
  getSingleuser,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
} from "./../controller/userController";
import { auth } from "./../middleware/auth";
const router = express.Router();

router.get("/", auth, getAulluser);
router.get("/:id", auth, getSingleuser);
router.post("/", auth, createUser);
router.put("/changPassword/:id", auth, changePassword);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
export default router;
