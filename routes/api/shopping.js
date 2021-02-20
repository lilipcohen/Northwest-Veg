const router = require('express').Router();
var shopping_controller = require('../../controllers/shopping_controller');
 
 router.route('/')
      .get(shopping_controller.allIngredients)

module.exports = router; 