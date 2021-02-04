const db = require('../models');

module.exports = {
    getFacilities: function (req, res) {
        db.Facility.findAll().then(dbFacility => {
            res.json(dbFacility);
        });

    }
}