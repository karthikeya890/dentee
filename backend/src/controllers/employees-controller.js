const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const { verifyToken } = require("../utils/jwtUtilis");
const { response } = require("express");

const getBasicEmployeeDetails = async (req, res) => {
  const { authorization } = req.headers;

  const token = authorization.split(" ")[1];

  try {
    const decodedToken = await verifyToken(token);

    const { email } = decodedToken;

    const response = await prisma.users.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        active: true,
      },
    });

    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBasicEmployeeDetails = async (req, res) => {
  const { authorization } = req.headers;

  const token = authorization.split(" ")[1];

  try {
    const decodedToken = await verifyToken(token);

    const { email } = decodedToken;

    const response = await prisma.users.update({
      where: {
        email,
      },
      data: req.body,
    });

    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBasicEmployeeDetails, updateBasicEmployeeDetails };
