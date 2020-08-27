const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/delivery", (req, res, next) => {
    res.render("delivery")
})

module.exports = router