const { Router } = require("express");
const app = Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const isEmailValidHandler = async (req, res, next) => {
  const { email } = req.body;

  const response = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (response) {
    res.status(500).json({ error: "Email Already Exists" });
  } else {
    next();
  }
};

const signUp = require("../controllers/signUpController");

app.post("/", [isEmailValidHandler], signUp);

module.exports = app;
