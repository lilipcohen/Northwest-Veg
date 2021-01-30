const router = require("express").Router();
const db = require("../../models");


router.get("/", function(req, res) {
    res.render("index")
})

router.get("/facilityform", function(req, res) {
    res.render("facilityform")
})

router.get("/facility", function(req, res) {
    res.render("facility")
})

module.exports = router;