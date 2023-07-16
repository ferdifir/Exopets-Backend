const adminModel = require("../models/adminModel");

exports.login = (req, res) => {
  const { email, password } = req.body;

  adminModel.login(email, password, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    if (result.length === 0) {
      // Tidak ada data yang cocok dalam database
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successfully",
      data: result[0],
    });
  });
};

exports.isAdmin = (req, res) => {
  const { uid } = req.params;

  adminModel.isAdmin(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    let isAdmin = result.length > 0;
    if (!isAdmin) {
      return res.status(200).json({
        success: true,
        message: "User is not admin",
        data: {
          isAdmin: false,
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "User is admin",
      data: {
        isAdmin: true,
      },
    });
  });
};

exports.getAllProduct = (req, res) => {
  const { uid } = req.params;

  adminModel.isAdmin(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    let isAdmin = result.length > 0;
    if (!isAdmin) {
      return res.status(400).json({
        success: false,
        message: "User is not admin",
        data: null,
      });
    }

    adminModel.getAllProduct((err, result) => {
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
  });
};

exports.approveProduct = (req, res) => {
  const { pid } = req.params;

  adminModel.approveProduct(pid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product approved successfully",
      data: null,
    });
  });
};

exports.deleteProduct = (req, res) => {
  const { pid } = req.params;

  adminModel.deleteProduct(pid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: null,
    });
  });
};

exports.getAllUser = (req, res) => {
  const { uid } = req.params;

  adminModel.isAdmin(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    let isAdmin = result.length > 0;
    if (!isAdmin) {
      return res.status(400).json({
        success: false,
        message: "User is not admin",
        data: null,
      });
    }

    adminModel.getAllUser((err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err,
          data: null,
        });
      }

      res.status(200).json({
        success: true,
        message: "Users retrieved successfully",
        data: result,
      });
    });
  });
};

exports.deleteUser = (req, res) => {
  const { uid } = req.params;

  adminModel.deleteUser(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: null,
    });
  });
};

exports.getTransactions = (req, res) => {
  const { uid } = req.params;

  adminModel.isAdmin(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    let isAdmin = result.length > 0;
    if (!isAdmin) {
      return res.status(400).json({
        success: false,
        message: "User is not admin",
        data: null,
      });
    }

    adminModel.getTransactions((err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err,
          data: null,
        });
      }

      res.status(200).json({
        success: true,
        message: "Transactions retrieved successfully",
        data: result,
      });
    });
  });
};
