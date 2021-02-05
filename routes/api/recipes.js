const router = require('express').Router();
var recipes_controller = require('../../controllers/recipes_controller');

router.route("/allrecipes")
    .get(recipes_controller.allAllergen)
module.exports = router; 