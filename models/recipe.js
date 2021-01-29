const recOrm = require("../config/recipe.js");

const recipe = {
     all: function(cb) {
    orm.all("db?", function(res) {
      cb(res);
    });
  }
};

module.exports = recipe;