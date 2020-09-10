const express = require("express");
const Product = require("../models/product");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {

  Product.findAll()
    .then((products) => {
      res.render("index", {
        products: products,
        pageTitle: "All products",
        path: "index",
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
