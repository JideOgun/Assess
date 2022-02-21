const { Company } = require('../models');

const companyData = [
  {
    company_name: 'Google',
    roles: "Software Engineering Lead",
    user_id: 1,
  },
  {
    company_name: 'Facebook',
    roles: "Test Engineer",
    user_id: 2,
  },
  {
    company_name: 'Expedia',
    roles: "Chief Executive Officer",
    user_id: 3,
  },
  {
    company_name: 'TikTok',
    roles: "Chief Technical Officer",
    user_id: 4,
  },
  {
    company_name: 'Tinder',
    roles: "SEO Consultant",
    user_id: 5,
  },
  {
    company_name: 'Hinge',
    roles: "Web Analytics Developer",
    user_id: 6,
  },
  {
    company_name: 'Apple',
    roles: "Digital Marketing Manager",
    user_id: 7,
  }

];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;