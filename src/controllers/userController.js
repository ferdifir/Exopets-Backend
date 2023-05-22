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

exports.loginUser = async (req, res) => {
  const { uid } = req.body;
  userModel.loginUser(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    if (result.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Email or password is incorrect",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: result[0],
    });
  });
}

exports.editUser = async (req, res) => {
  const { uid, name, email, phone, lat, lon, profile_picture } = req.body;
  userModel.editUser(
    uid,
    name,
    email,
    phone,
    lat,
    lon,
    profile_picture,
    (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err,
          data: null,
        });
      }

      res.status(200).json({
        success: true,
        message: "User edited successfully",
        data: {
          uid: uid,
          name: name,
          email: email,
          phone: phone,
          address: {
            lat: lat,
            lon: lon,
          },
          profile_picture: profile_picture,
        },
      });
    }
  );
}