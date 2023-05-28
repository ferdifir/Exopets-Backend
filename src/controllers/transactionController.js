const transactionModel = require("../models/transactionModel");
const userModel = require("../models/userModel");

exports.addTransaction = async (req, res) => {
  const {
    uid,
    product_id,
    quantity,
    total_amount,
    status,
    payment_method,
    shipping_address_id,
  } = req.body;

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
      transactionModel.addTransaction(
        uid,
        product_id,
        quantity,
        total_amount,
        status,
        payment_method,
        shipping_address_id,
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
            message: "Transaction added successfully",
            data: result,
          });
        }
      );
    }
  });
};

exports.getTransaction = async (req, res) => {
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
      transactionModel.getTransaction(uid, (err, result) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
            data: null,
          });
        }

        res.status(200).json({
          success: true,
          message: "Transaction retrieved successfully",
          length: result.length,
          data: result,
        });
      });
    }
  });
};

exports.addPayment = async (req, res) => {
  const { transaction_id, sender_name, url_bukti } = req.body;

  transactionModel.addPayment(
    transaction_id,
    sender_name,
    url_bukti,
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
        message: "Payment added successfully",
        data: result,
      });
    }
  );
};

exports.getPayment = async (req, res) => {
  transactionModel.getPayment((err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment retrieved successfully",
      length: result.length,
      data: result,
    });
  });
};

exports.updateTransaction = async (req, res) => {
  const { transaction_id, status } = req.body;

  transactionModel.updateStatus(transaction_id, status, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      data: result,
    });
  });
};
