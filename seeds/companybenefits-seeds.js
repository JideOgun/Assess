const { CompanyBenefits } = require('../models');

const CompanyBenefitsData = [
    {
       company_id: 3,
       benefit_id: 2
    },
    {
        company_id: 1,
        benefit_id: 5
    },
    {
        company_id: 4,
        benefit_id: 2
    },
    {
        company_id: 6,
        benefit_id: 1
    },
    {
        company_id: 2,
        benefit_id: 3
    },
    {
        company_id: 5,
        benefit_id: 4
    },
    {
        company_id: 1,
        benefit_id: 7
    },
    {
        company_id: 1,
        benefit_id: 1
    }
];

const seedCompanyBenefits = () => CompanyBenefits.bulkCreate(CompanyBenefitsData);

module.exports = seedCompanyBenefits;