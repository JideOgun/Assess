const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ratings extends Model {}

Ratings.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Ratings;