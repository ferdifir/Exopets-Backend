const cartModel = require("../models/cartModel");
const userModel = require("../models/userModel");

exports.addToCart = async (req, res) => {
  const { uid, pid } = req.body;

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
      cartModel.addToCart(uid, pid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Cart added successfully",
          data: result,
        });
      });
    }
  });
};

exports.getCartByUserId = async (req, res) => {
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
      cartModel.getCart(uid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Cart retrieved successfully",
          length: result.length,
          data: result,
        });
      });
    }
  });
};

exports.deleteCartById = async (req, res) => {
  const { uid, pid } = req.body;

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
      cartModel.deleteCartById(uid, pid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Cart deleted successfully",
          data: result,
        });
      });
    }
  });
};
