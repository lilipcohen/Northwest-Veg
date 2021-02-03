const db = require('../models');

module.exports = {
    getFacilities: function (req, res) {
        db.Facility.findAll().then(dbFacility => {
            res.json(dbFacility);
        });
    },
    createFacility: function (req, res) {
        db.Facility.create(req.body).then(function (dbFacility) {
            res.json(dbFacility);
        }).catch(function (err) {
            console.log(err, req.body);
        });
    }
}


