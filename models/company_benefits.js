const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class company_benefits extends Model {}

company_benefits.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
        company_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'company',
        key: 'id',
        unique: false
      }
        },
        benefits_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'benefits',
              key: 'id',
              unique: false
            }
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'company_benefits',
      }
);

module.exports = company_benefits;