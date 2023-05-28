const wishlistModel = require("../models/wishlistModel");
const userModel = require("../models/userModel");

exports.addWishlist = async (req, res) => {
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
      wishlistModel.addWishlist(uid, pid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Wishlist added successfully",
          data: result,
        });
      });
    }
  });
};

exports.getWishlist = async (req, res) => {
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
      wishlistModel.getWishlist(uid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Wishlist retrieved successfully",
          data: result,
        });
      });
    }
  });
};

exports.deleteWishlist = async (req, res) => {
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
      wishlistModel.deleteWishlist(uid, pid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Wishlist deleted successfully",
          data: result,
        });
      });
    }
  });
};
