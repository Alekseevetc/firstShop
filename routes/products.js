const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/products", (req, res, next) => {
    res.render("products")
})

module.exports = router