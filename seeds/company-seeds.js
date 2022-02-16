const { Company } = require('../models');

const companyData = [
  {
    company_name: 'Google',
    e: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  }
];

const seedCompany = () => Company.bulkCreate(companyData);

module.exports = seedProducts;