import { Request, Response } from "express";
import nodemailer from "nodemailer";

// ฟังก์ชันส่งอีเมล
export const sendmail = async (req: Request, res: Response) => {
  console.log(">>>", req.body.to);
  console.log(">>>", req.body.subject);
  console.log(">>>", req.body.text);
  // ตั้งค่า transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kittiphob.maynok@gmail.com", // แก้ไขเป็นอีเมลของคุณ
      pass: "hlvq vrpv bzcf ltqs", // แก้ไขเป็นรหัสผ่านของคุณ
    },
  });

  // ตั้งค่าข้อมูลอีเมล

  const mailOptions = {
    from: "kittiphob.maynok@gmail.com", // แก้ไขเป็นอีเมลของคุณ
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
  };

  try {
    // ส่งอีเมล
    const info = await transporter.sendMail(mailOptions);
    info && res.status(202).send("Send email successed");
  } catch (err: any) {
    console.error("Error sending email: " + err.message);
    return false;
  }
};
