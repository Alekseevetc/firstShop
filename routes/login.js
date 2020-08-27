const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/login", (req, res, next) => {
    res.render("login")
})

module.exports = router