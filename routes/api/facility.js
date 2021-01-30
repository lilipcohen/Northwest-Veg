const router = require('express').Router();
 
var facility_controller = require('../../controllers/facility_controller');



router.route('/')
      .get(facility_controller.getFacilities)
      .post(facility_controller.createFacility);

module.exports = router;      