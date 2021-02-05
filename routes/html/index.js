const router = require("express").Router();
const { getFacilities } = require("../../controllers/facility_controller");
const db = require("../../models");


router.get("/", function(req, res) {
    res.render("home");
});

router.get("/facilityform", function(req, res) {
    res.render("facilityform");
});

router.get("/facilities", function(req, res) {
    db.Facility.findAll().then(function(dbFacility) {
        res.render("facilities",{ facility: dbFacility });
    });
   
   
});

router.get("/recipes", function(req, res) {
    res.render("recipes");
});

router.get("/recipelist", function(req, res) {
    res.render("recipelist");
});

router.get("/pagenotfound", function(req, res) {
    res.render("404");
});

module.exports = router;