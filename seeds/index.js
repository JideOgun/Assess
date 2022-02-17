const seedCompanies = require('./company-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCompanies();
  console.log('\n----- COMPANIES SEEDED -----\n');

  process.exit(0);
};

seedAll();