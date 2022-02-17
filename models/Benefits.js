const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Benefits extends Model {}

Benefits.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        benefit_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
      } 
);

module.exports = Benefits;