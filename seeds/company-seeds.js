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
    user_id: 7
  },
  {
    company_name: 'Samsung',
    roles: "Data Center Engineer",
    user_id: 8
  },
  {
    company_name: 'YouTube',
    roles: "Software Engineer",
    user_id: 9
  },
  {
    company_name: 'Microsoft',
    roles: "Software Engineer",
    user_id: 10
  },
  {
    company_name: 'Dell',
    roles: "Data Scientist",
    user_id: 11
  },
  {
    company_name: 'IBM',
    roles: "Test Automation Developer",
    user_id: 12
  },
  {
    company_name: 'Cisco',
    roles: "Senior Backend Engineer",
    user_id: 13
  },
  {
    company_name: 'Sony',
    roles: "IT/DevOps Engineer",
    user_id: 14
  },
  {
    company_name: 'DataVox',
    roles: "Network Engineer",
    user_id: 15
  },
  {
    company_name: 'Adobe',
    roles: "Software Development Engineer",
    user_id: 16
  },
  {
    company_name: 'Amazon',
    roles: "Systems Development Engineer",
    user_id: 17
  },
  {
    company_name: 'Zynga',
    roles: "Senior Cyber Security Architect",
    user_id: 18
  },
  {
    company_name: 'Atlassian',
    roles: "Frontend Software Engineer",
    user_id: 19
  },
  {
    company_name: 'HP',
    roles: "IT Developer & Support Engineer",
    user_id: 20
  }

];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;