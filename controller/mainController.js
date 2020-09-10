const Product = require("../models/product");


// Home page
exports.getHomePage = (req, res, next) => {

  Product.findAll()
  .then((products) => {
    res.render("index", {
      products: products,
      pageTitle: "All products",
      path: 'index'
    });
  })
  .catch(err => console.log(err))
  
};

// Contact page
exports.getContactPage = (req, res, next) => {
  res.render("contacts");
};

// FAQ page
exports.getFAQPage = (req, res, next) => {
  res.render("faq");
};