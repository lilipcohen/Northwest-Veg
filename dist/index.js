const router=require("express").Router(),{getFacilities:getFacilities}=require("../../controllers/facility_controller"),db=require("../../models");router.get("/",function(e,r){r.render("home")}),router.get("/facilityform",function(e,r){r.render("facilityform")}),router.get("/facilities",function(e,r){db.Facility.findAll().then(function(e){r.render("facilities",{facility:e})})}),router.get("/recipes",function(e,r){r.render("recipes")}),router.get("/recipelist",function(e,r){r.render("recipelist")}),router.get("/pagenotfound",function(e,r){r.render("404")}),module.exports=router;