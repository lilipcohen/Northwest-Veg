const router = require("express").Router();
const facilityRoutes = require("./facility")
const recipeRoutes = require("./recipes")

router.use("/facilities", facilityRoutes)
router.use("/recipe", recipeRoutes)

module.exports = router;