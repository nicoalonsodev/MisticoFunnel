const postUserController = require("../controllers/postUserController");

const postUserHandler = async (req, res) => {
  try {
    const { email, password, username, rol, image, provider } = req.body;
    const userPosted = await postUserController(
      email,
      password,
      username,
      rol,
      image,
      provider
    );
    return res.status(200).json(userPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
};
