const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Yeah yeah. you have been served your ORDERS!!",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Yeah yeah. We got your all ORDERS!!",
    order,
  });
});

router.get("/:orderID", (req, res, next) => {
  res.status(200).json({
    message: "Yeah yeah. Take your order and leave my sight!!",
    id: req.params.orderID,
  });
});

router.delete("/:orderID", (req, res, next) => {
  res.status(200).json({
    message: "Yeah yeah. We deleted your stupid ORDER!!",
    id: req.params.orderID,
  });
});

module.exports = router;
