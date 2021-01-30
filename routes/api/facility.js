const router = require('express').Router();
 
var facility_controller = require('../../controllers/facility_controller');


// getting all the approved facilities
router.route('/')
      .get(facility_controller.getFacilities)
      .post(facility_controller.createFacility);

module.exports = router;      