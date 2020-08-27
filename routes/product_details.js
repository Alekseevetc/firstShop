const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/product_details", (req, res, next) => {
    res.render("product_details")
})

module.exports = router