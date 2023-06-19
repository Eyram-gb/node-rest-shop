const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "we are FUCKING live on GET /products",
  });
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price:req.body.price
  };
  res.status(200).json({
    message: "we are FUCKING live on POST /products",
    createdProduct:product
  });
});

router.get("/:productID", (req, res, next) => {
  const id = req.params.productID;

  if (id === "warmkeys") {
    res.status(200).json({
      message: "welcome to the family Brother",
      id,
    });
  } else {
    res.status(200).json({
      message: "we do not know you nigga.",
    });
  }
});

router.patch("/:productID", (req, res, next) => {
  res.status(200).json({
    message: "Yeah, you successfully fucked with my product!!!",
  });
});

router.delete("/:productID", (req, res) => {
  res.status(200).json({
    message: "your sh!t has been packed out of here successfully!!",
  });
});

module.exports = router;
