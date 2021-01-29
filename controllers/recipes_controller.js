const express = require("express");

const router = express.Router();

const recipe = require("../models/recipe.js");

router.get("/", function(req, res) {
  recipe.all(function(data) {
    var hbsObject = {
      recipe: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
