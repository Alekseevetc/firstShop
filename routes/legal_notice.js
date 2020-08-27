const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/legal_notice", (req, res, next) => {
    res.render("legal_notice")
})

module.exports = router;