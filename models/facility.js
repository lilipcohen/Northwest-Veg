'use strict';

module.exports = (sequelize, DataTypes) => {
    const Facility = sequelize.define('Facility', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [5]
          
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }       

    });

   return Facility;
}