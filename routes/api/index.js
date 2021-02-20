const router = require("express").Router();
const facilityRoutes = require("./facility")
const recipeRoutes = require("./recipes")
const shoppingRoutes = require("./shopping")

router.use("/facilities", facilityRoutes)
router.use("/recipe", recipeRoutes)
router.use("/shoppinglist", shoppingRoutes)

module.exports = router;