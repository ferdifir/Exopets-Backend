const addressModel = require("../models/addressModel");
const userModel = require("../models/userModel");

exports.addAddress = async (req, res) => {
  const { uid, street_address, city, province, postal_code } = req.body;

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
      addressModel.addAddress(
        uid,
        street_address,
        city,
        province,
        postal_code,
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
            message: "Address added successfully",
            data: result,
          });
        }
      );
    }
  });
};

exports.getAddress = async (req, res) => {
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
      addressModel.getAddress(uid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Address retrieved successfully",
          data: result,
        });
      });
    }
  });
};

exports.getAddressById = async (req, res) => {
  const { uid, aid } = req.params;

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
      addressModel.getAddressById(uid, aid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Address retrieved successfully",
          data: result,
        });
      });
    }
  });
};

exports.deleteAddress = async (req, res) => {
  const { uid, aid } = req.body;

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
      addressModel.deleteAddress(uid, aid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Address deleted successfully",
          data: result,
        });
      });
    }
  });
};
