module.exports = (sequelize, DataTypes) => {
  const Shoppinglist = sequelize.define('Shoppinglist', {
    name: DataTypes.STRING
  });

  return Shoppinglist;
}