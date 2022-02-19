const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CompanyBenefits extends Model {}

CompanyBenefits.init(
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
        modelName: 'CompanyBenefits',
      }
);

module.exports = CompanyBenefits;