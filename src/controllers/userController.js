const userModel = require("../models/userModel");

exports.registerUser = async (req, res) => {
  const { uid, name, email, password, phone, address, profile_picture } =
    req.body;
  userModel.registerUser(
    uid,
    name,
    email,
    password,
    phone,
    address,
    profile_picture,
    (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err,
          data: null,
        });
      }

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          uid: uid,
          name: name,
          email: email,
          phone: phone,
        },
      });
    }
  );
};
