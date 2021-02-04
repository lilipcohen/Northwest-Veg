const db = require('../models');

module.exports = {
    getFacilities: function (req, res) {
        db.Facility.findAll().then(dbFacility => {
            res.json(dbFacility);
            // res.render("/facility", {
            //     layout: "facility",
            //     facility: dbFacility
            // });


        // db.Facility.findAll().then(async dbFacility => {
        //    const facility = res.json(dbFacility);
        //  const facil = {name: facility.name}
        //     await res.render("facility", facil)
            
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


