const express = require('express');
const router = express.Router();
var recipes_controller = require('../controllers/recipes_controller');

router.get('/allRecipes', recipes_controller);

module.exports = router;