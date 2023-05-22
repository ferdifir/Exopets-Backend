const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

exports.getAllProducts = async (req, res) => {
  const { uid } = req.params;

  userModel.isUidExist(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    let isUserExist = result.length > 0;
    if (!isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User not found",
        data: null,
      });
    } else {
      productModel.getAllProducts((err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          data: result,
        });
      });
    }
  });
};

exports.getProductById = async (req, res) => {
  const uid = req.params.uid;
  const pid = req.params.pid;

  userModel.isUidExist(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    let isUserExist = result.length > 0;
    if (!isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User not found",
        data: null,
      });
    } else {
      productModel.getProductById(pid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          data: result[0],
        });
      });
    }
  });
};
