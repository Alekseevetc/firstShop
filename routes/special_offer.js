const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/special_offer", (req, res, next) => {
    res.render("special_offer")
})

module.exports = router