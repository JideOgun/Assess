const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model {}

Company.init(
{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roles: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  benefits: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  });


module.exports = Company;