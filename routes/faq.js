const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/faq", (req, res, next) => {
    res.render("faq")
})

module.exports = router