const router = require('express').Router();
var recipes_controller = require('../../controllers/recipes_controller');

router.route("/allbreakfast")
    .get(recipes_controller.allBreakfast)

router.route("/alllundin")
    .get(recipes_controller.allLunchDin)

router.route("/alldesserts")
    .get(recipes_controller.allDesserts)

router.route("/allsnacks")
    .get(recipes_controller.allSnacks)

router.route("/allgluten")
    .get(recipes_controller.allGluten)

router.route("/allallergen")
    .get(recipes_controller.allAllergen)

router.route("/:keyword")
    .get(recipes_controller.searchRecipe)


    

module.exports = router; 