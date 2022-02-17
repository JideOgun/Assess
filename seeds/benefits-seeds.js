const { Benefits } = require('../models');

const benefitsData = [
    {
       benefit_name: 'Medical Insurance',
       company_id: 1 
    },
    {
        benefit_name: 'Dental Insurance',
        company_id: 1
    },
    {
        benefit_name: 'Paid Time Off',
        company_id: 1
    },
    {
        benefit_name: 'Dental Insurance',
        company_id: 1
    },
    {
        benefit_name: 'Stock Options',
        company_id: 1
    },
    {
        benefit_name: 'Paid vacation time',
        company_id: 1
    },
    {
        benefit_name: 'Workers compensation',
        company_id: 1
    },
    {
        benefit_name: 'Student loan repayments',
        company_id: 1
    }
];

const seedBenefits = () => Benefits.bulkCreate(benefitsData);

module.exports = seedBenefits;