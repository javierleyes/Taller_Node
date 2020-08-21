const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init(
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, 
    {
        sequelize, // We need to pass the connection instance
        modelName: 'User' // We need to choose the model name
    }
);

User.sync();

module.exports = User;