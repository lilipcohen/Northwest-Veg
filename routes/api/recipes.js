const router = require('express').Router();
// var recipe = require("../../config/recipe");
var recipes_controller = require('../../controllers/recipes_controller');

router.route("/allrecipes")
    .get(recipes_controller.allAllergen)
module.exports = router; 