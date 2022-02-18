const seedCompanies = require('./company-seeds');
const seedBenefits = require('./benefits-seeds');
const seedcompanyBenefits = require('./company_benefits-seeds');
const seedUsers = require('./user-seeds');
const seedReviews = require('./reviews-seeds');
const seedRatings = require('./ratings-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCompanies();
  console.log('\n----- COMPANIES SEEDED -----\n');

  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBenefits();
  console.log('\n----- BENEFITS SEEDED -----\n');

 

  console.log('\n----- DATABASE SYNCED -----\n');
  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');

  console.log('\n----- DATABASE SYNCED -----\n');
  await seedcompanyBenefits();
  console.log('\n----- COMPANY_BENEFITS SEEDED -----\n');

  console.log('\n----- DATABASE SYNCED -----\n');
  await seedRatings();
  console.log('\n----- RATINGS SEEDED -----\n');

  process.exit(0);
};

seedAll();