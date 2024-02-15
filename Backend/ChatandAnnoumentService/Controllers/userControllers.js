const User = require("../models/userModel");

//@desc Get all users
//@route GET /api/contacts
//@access public

const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    if (!user) {
      return res.status(400).send({ error: "User not found" });
    } else {
      return res.status(200).json({ userList: user });
    }
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};

module.exports = {
  getUsers,
};
