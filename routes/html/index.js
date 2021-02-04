const router = require("express").Router();
const { getFacilities } = require("../../controllers/facility_controller");
const db = require("../../models");
// const facilityPage = require("../../public/assets/js/facility")

// passed in 'home' into line 6 to display our home page. 
router.get("/", function(req, res) {
    res.render("home");
});

router.get("/facilityform", function(req, res) {
    res.render("facilityform");
});

router.get("/facility", function(req, res) {
    db.Facility.findAll().then(function(dbFacility) {
        console.log(dbFacility)
        res.render("facility",{ facility: dbFacility });
    })
    // res.render("facility", displayFormData);
   
});

router.get("/recipes", function(req, res) {
    res.render("recipes");
});

router.get("/pagenotfound", function(req, res) {
    res.render("404");
});

module.exports = router;