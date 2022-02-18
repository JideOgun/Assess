const { Benefits } = require('../models');

const benefitsData = [
    {
       benefit_name: 'Medical Insurance' 
    },
    {
        benefit_name: 'Dental Insurance'
    },
    {
        benefit_name: 'Paid Time Off'
    },
    {
        benefit_name: 'Dental Insurance'
    },
    {
        benefit_name: 'Stock Options'
    },
    {
        benefit_name: 'Paid vacation time'
    },
    {
        benefit_name: 'Workers compensation'
    },
    {
        benefit_name: 'Student loan repayments'
    }
];

const seedBenefits = () => Benefits.bulkCreate(benefitsData);

module.exports = seedBenefits;