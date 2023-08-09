const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw Error(error.message);
  }
};

const comparePassword = async (email, password) => {
  const user = await prisma.users.findUnique({
    where: { email },
  });

  if (!user) {
    throw Error("The email address is not associated with any account.");
  } else {
    const response = await bcrypt.compare(password, user.password);
    if (!response) {
      throw Error("Incorrect password. Please try again");
    } else {
      return response;
    }
  }
};

module.exports = { hashPassword, comparePassword };
