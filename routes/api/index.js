const router = require("express").Router();
const facilityRoutes = require("./facility")
const recipeRoutes = require("./recipes")

router.use("/facility", facilityRoutes)
router.use("/recipe", recipeRoutes)

module.exports = router;