const storeModel = require("../models/storeModel");

exports.createStore = async (req, res) => {
  const { uid, store_name, address, description } = req.body;
  storeModel.createStore(
    uid,
    store_name,
    address,
    description,
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
        message: "Store created successfully",
        data: {
          uid: uid,
          store_name: store_name,
          address: address,
          description: description,
        },
      });
    }
  );
};

exports.getStoreByUid = async (req, res) => {
  const { uid } = req.params;
  storeModel.getStoreByUid(uid, (err, result) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Store retrieved successfully",
      data: result[0],
    });
  });
};

exports.updateStore = async (req, res) => {
  const { uid, store_name, address, description } = req.body;
  storeModel.editStore(
    uid,
    store_name,
    address,
    description,
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
        message: "Store updated successfully",
        data: {
          uid: uid,
          store_name: store_name,
          address: address,
          description: description,
        },
      });
    }
  );
};
