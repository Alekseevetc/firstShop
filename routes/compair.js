const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/compair", (req, res, next) => {
    res.render("compair")
})

module.exports = router;