const router = require("express").Router();
const db = require("../../models");

// passed in 'home' into line 6 to display our home page. 
router.get("/", function(req, res) {
    res.render("home");
});

router.get("/facilityform", function(req, res) {
    res.render("facilityform");
});

router.get("/facility", function(req, res) {
    res.render("facility");
});

module.exports = router;