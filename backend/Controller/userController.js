const asyncHandler = require("express-async-handler");

const User = require("../Model/userModel");


// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name} = req.body;
  const user = await User.create({
    name 
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});


module.exports = { registerUser};
