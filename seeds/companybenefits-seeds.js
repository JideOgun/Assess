const { CompanyBenefits } = require('../models');

const CompanyBenefitsData = [
  {
    company_id: 1,
    benefits_id: 1,
  },
  {
    company_id: 1,
    benefits_id: 2,
  },
  {
    company_id: 1,
    benefits_id: 3,
  },
  {
    company_id: 1,
    benefits_id: 4,
  },
  {
    company_id: 1,
    benefits_id: 5,
  },
  {
    company_id: 1,
    benefits_id: 6,
  },
  {
    company_id: 1,
    benefits_id: 7,
  },
  {
    company_id: 1,
    benefits_id: 8,
  },
  {
    company_id: 1,
    benefits_id: 9,
  },
  {
    company_id: 1,
    benefits_id: 10,
  },
  {
    company_id: 1,
    benefits_id: 11,
  },
  {
    company_id: 1,
    benefits_id: 12,
  },
  {
    company_id: 2,
    benefits_id: 13,
  },
  {
    company_id: 2,
    benefits_id: 14,
  },
  {
    company_id: 2,
    benefits_id: 15.
  },
  {
    company_id: 2,
    benefits_id: 16.
  },
  {
    company_id: 2,
    benefits_id: 17,
  },
  {
    company_id: 2,
    benefits_id: 18,
  },
  {
    company_id: 2,
    benefits_id: 19,
  },
  {
    company_id: 2,
    benefits_id: 20,
  },
  {
    company_id: 2,
    benefits_id: 21,
  },
  {
    company_id: 2,
    benefits_id: 1,
  },
  {
    company_id: 2,
    benefits_id: 2,
  },
  {
    company_id: 3,
    benefits_id: 3,
  },
  {
    company_id: 3,
    benefits_id: 4,
  },
  {
    company_id: 3,
    benefits_id: 5,
  },
  {
    company_id: 3,
    benefits_id: 6,
  },
  {
    company_id: 3,
    benefits_id: 7,
  },
  {
    company_id: 3,
    benefits_id: 8,
  },
  {
    company_id: 3,
    benefits_id: 9,
  },
  {
    company_id: 3,
    benefits_id: 10,
  },
  {
    company_id: 3,
    benefits_id: 11,
  },
  {
    company_id: 4,
    benefits_id: 12,
  },
  {
    company_id: 4,
    benefits_id: 13,
  },
  {
    company_id: 4,
    benefits_id: 14,
  },
  {
    company_id: 4,
    benefits_id: 15,
  },
  {
    company_id: 4,
    benefits_id: 16,
  },
  {
    company_id: 4,
    benefits_id: 17,
  },
  {
    company_id: 4,
    benefits_id: 18,
  },
  {
    company_id: 5,
    benefits_id: 19,
  },
  {
    company_id: 5,
    benefits_id: 20,
  },
  {
    company_id: 5,
    benefits_id: 21,
  },
  {
    company_id: 5,
    benefits_id: 1,
  },
  {
    company_id: 5,
    benefits_id: 2,
  },
  {
    company_id: 5,
    benefits_id: 3,
  },
  {
    company_id: 5,
    benefits_id: 4,
  },
  {
    company_id: 5,
    benefits_id: 5,
  },
  {
    company_id: 5,
    benefits_id: 6,
  },
  {
    company_id: 6,
    benefits_id: 7,
  },
  {
    company_id: 6,
    benefits_id: 8,
  },
  {
    company_id: 6,
    benefits_id: 9,
  },
  {
    company_id: 6,
    benefits_id: 10,
  },
  {
    company_id: 6,
    benefits_id: 11,
  },
  {
    company_id: 6,
    benefits_id: 12,
  },
  {
    company_id: 6,
    benefits_id: 1,
  },
  {
    company_id: 6,
    benefits_id: 2,
  },
  {
    company_id: 6,
    benefits_id: 13,
  },
  {
    company_id: 6,
    benefits_id: 14,
  },
  {
    company_id: 7,
    benefits_id: 15,
  },
  {
    company_id: 7,
    benefits_id: 16,
  },
  {
    company_id: 7,
    benefits_id: 17,
  },
  {
    company_id: 7,
    benefits_id: 18,
  },
  {
    company_id: 7,
    benefits_id: 19,
  },
  {
    company_id: 7,
    benefits_id: 20,
  },
  {
    company_id: 7,
    benefits_id: 21,
  },
  {
    company_id: 7,
    benefits_id: 2,
  },
  {
    company_id: 7,
    benefits_id: 3,
  },
  {
    company_id: 8,
    benefits_id: 4,
  },
  {
    company_id: 8,
    benefits_id: 5,
  },
  {
    company_id: 8,
    benefits_id: 6,
  },
  {
    company_id: 8,
    benefits_id: 7,
  },
  {
    company_id: 8,
    benefits_id: 8,
  },
  {
    company_id: 8,
    benefits_id: 9,
  },
  {
    company_id: 8,
    benefits_id: 10,
  },
  {
    company_id: 8,
    benefits_id: 11,
  },
  {
    company_id: 8,
    benefits_id: 12,
  },
  {
    company_id: 9,
    benefits_id: 13,
  },
  {
    company_id: 9,
    benefits_id: 14,
  },
  {
    company_id: 9,
    benefits_id: 15,
  },
  {
    company_id: 9,
    benefits_id: 16,
  },
  {
    company_id: 9,
    benefits_id: 17,
  },
  {
    company_id: 9,
    benefits_id: 18,
  },
  {
    company_id: 9,
    benefits_id: 19,
  },
  {
    company_id: 9,
    benefits_id: 20,
  },
  {
    company_id: 9,
    benefits_id: 21,
  },
  {
    company_id: 9,
    benefits_id: 1,
  },
  {
    company_id: 10,
    benefits_id: 2,
  },
  {
    company_id: 10,
    benefits_id: 3,
  },
  {
    company_id: 10,
    benefits_id: 4,
  },
  {
    company_id: 10,
    benefits_id: 5,
  },
  {
    company_id: 10,
    benefits_id: 6,
  },
  {
    company_id: 10,
    benefits_id: 7,
  },
  {
    company_id: 10,
    benefits_id: 8,
  },
  {
    company_id: 10,
    benefits_id: 9,
  },
  {
    company_id: 10,
    benefits_id: 10,
  },
  {
    company_id: 11,
    benefits_id: 11,
  },
  {
    company_id: 11,
    benefits_id: 12,
  },
  {
    company_id: 11,
    benefits_id: 13,
  },
  {
    company_id: 11,
    benefits_id: 14,
  },
  {
    company_id: 11,
    benefits_id: 15,
  },
  {
    company_id: 11,
    benefits_id: 16,
  },
  {
    company_id: 11,
    benefits_id: 17,
  },
  {
    company_id: 11,
    benefits_id: 18,
  },

];

const seedCompanyBenefits = () =>
  CompanyBenefits.bulkCreate(CompanyBenefitsData);

module.exports = seedCompanyBenefits;
