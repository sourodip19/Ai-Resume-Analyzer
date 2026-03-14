import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async ({ to, subject, html }) => {
  await transporter.sendMail({
    from: `"Ai-Resume-Analyzer"<${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};
export const sendSignupEmail = async (username, email) => {
  const html = `
     <h2>Welcome ${username} 🎉</h2>
    <p>Your account has been created successfully.</p>
    `;
  await sendMail({
    to: email,
    subject: "You are onboarded successfully 🎉",
    html: html,
  });
};
export const sendloginEmail = async (email, username) => {
  const html = `  <h2>Welcome back ${username} 🎉</h2>
    <p>Your have logged in successfully.</p>`;
  await sendMail({
    to: email,
    subject: "Your login is successful 🚀",
    html: html,
  });
};
export const sendlogoutEmail = async (username, email) => {
  const html = `  <h2>Logged out ${username} </h2>
    <p>Your have logged out successfully.</p>`;
  await sendMail({
    to: email,
    subject: "You logged Out ",
    html: html,
  });
};
