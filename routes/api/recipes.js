const router = require('express').Router();
// var recipe = require("../../config/recipe");
var recipes_controller = require('../../controllers/recipes_controller');

router.get('/allRecipes', recipes_controller.allRecipes);
module.exports = router; 