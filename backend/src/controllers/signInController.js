const { generateToken } = require("../utils/jwtUtilis");
const { comparePassword } = require("../utils/bcryptUtilis");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const passwordChecked = await comparePassword(email, password);

    if (passwordChecked) {
      const token = await generateToken(req.body);

      res.send({ jwt_Token: token });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };
