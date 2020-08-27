const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/forgetpass", (req, res, next) => {
    res.render("forgetpass")
})

module.exports = router