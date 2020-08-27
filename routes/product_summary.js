const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/product_summary", (req, res, next) => {
    res.render("product_summary")
})

module.exports = router