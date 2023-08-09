const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

require("dotenv").config();

const nodemailer = require("nodemailer");

const generatePassword = require("../utils/passwordGeneratorUtils");

const { hashPassword } = require("../utils/bcryptUtilis");

const signUp = async (req, res) => {
  const { name, email } = req.body;
  const myMail = process.env.MY_MAIL;
  const myPassword = process.env.MY_MAIL_PASSWORD;

  const temporaryPassword = generatePassword();
  const hashedPassword = await hashPassword(temporaryPassword);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: myMail,
      pass: myPassword,
    },
  });

  const mailOptions = {
    from: myMail,
    to: email,
    subject: "Welcome to Dentee! Your Account Details",
    html: `<h1>Welcome to Dentee, ${name}!</h1>
    <p>You have successfully created your Dentee account.</p>
    <p>You can now log in using the following temporary password:</p>
    <p style="font-weight: bold; color: #1E90FF;">${temporaryPassword}</p>
    <p>Please make sure to change your password after logging in for the first time.</p>
    <p>Thank you!<br>The Dentee Team</p>`,
  };

  try {
    const response = await prisma.users.create({
      data: {
        name,
        role: "ADMIN",
        password: hashedPassword,
        email,
      },
    });

    if (response) {
      transporter.sendMail(mailOptions);

      res.send({
        message:
          "User created Successfully. Please check your email for confirmation",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to Register" });
  }
};

module.exports = signUp;
