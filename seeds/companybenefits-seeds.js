const { CompanyBenefits } = require('../models');

const CompanyBenefitsData = [
    {
       company_id: 1,
       benefits_id: 1
    },
    {
        company_id: 1,
        benefits_id: 2
    },
    {
        company_id: 1,
        benefits_id: 3
    },
    {
        company_id: 1,
        benefits_id: 4
    },
    {
        company_id: 2,
        benefits_id: 3
    },
    {
        company_id: 5,
        benefits_id: 4
    },
    {
        company_id: 1,
        benefits_id: 7
    },
    {
        company_id: 3,
        benefits_id: 4
    }
];

const seedCompanyBenefits = () => CompanyBenefits.bulkCreate(CompanyBenefitsData);

module.exports = seedCompanyBenefits;