// const recOrm = require("../config/recipe.js");

// const recipe = {
//      all: function(cb) {
//     orm.all("db?", function(res) {
//       cb(res);
//     });
//   }
// };

// module.exports = recipe;


// it's going to break. doesn't create orm here--it's built in 




module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING
  });
 
  return Recipe;
}