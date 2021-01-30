module.exports = (sequelize, DataTypes) => {
  const Shoppinglist = sequelize.define('Shoppinglist', {
    name: DataTypes.STRING
  });
//  Shoppinglist.associate = models => {

//    Shoppinglist.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   }
  return Shoppinglist;
}