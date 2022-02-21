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
        benefit_name: 'Paid Vacation Time'
    },
    {
        benefit_name: 'Workers Compensation'
    },
    {
        benefit_name: 'Student Loan Repayments'
    },
    {
        benefit_name: '401(k) Match'
    },
    {
        benefit_name: 'Flexible Spending Accounts (FSAs)'
    },
    {
        benefit_name: 'Health Savings Accounts (HSAs)'
    },
    {
        benefit_name: 'Life Insurance'
    },
    {
        benefit_name: 'Paid Holidays'
    },
    {
        benefit_name: 'Paid Medical Leave'
    },
    {
        benefit_name: 'Paid Family Leave'
    },
    {
        benefit_name: 'Vision Insurance'
    },
    {
        benefit_name: 'Long-Term Disability'
    },
    {
        benefit_name: 'Short-Term Disablity'
    },
    {
        benefit_name: 'Mental Health Assistance'
    },
    {
        benefit_name: 'Prescription and Pharmacy Plans'
    },
    {
        benefit_name: 'Tuition Reimbursement'
    },
];

const seedBenefits = () => Benefits.bulkCreate(benefitsData);

module.exports = seedBenefits;