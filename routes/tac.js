const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/tac", (req, res, next) => {
    res.render("tac")
})

module.exports = router