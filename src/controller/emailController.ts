import { Request, Response } from "express";
import nodemailer from "nodemailer";

// ฟังก์ชันส่งอีเมล
export const sendmail = async (to: any, subject: any, text: any) => {
  // ตั้งค่า transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kittiphob.maynok@gmail.com", // แก้ไขเป็นอีเมลของคุณ
      pass: "January2566", // แก้ไขเป็นรหัสผ่านของคุณ
    },
  });

  // ตั้งค่าข้อมูลอีเมล
  to = "pongapla@gmail.com";
  subject = "test send mail";
  text = "Test send mail naja";
  const mailOptions = {
    from: "kittiphob.maynok@gmail.com", // แก้ไขเป็นอีเมลของคุณ
    to: to,
    subject: subject,
    text: text,
  };

  try {
    // ส่งอีเมล
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (err: any) {
    console.error("Error sending email: " + err.message);
    return false;
  }
};
