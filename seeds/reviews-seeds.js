const { Reviews } = require('../models');

const reviewsData = [
    {
       reviews_text: 'Work life balance  is amazing',
       user_id: 1,
       company_id: 8
    },
    {
        reviews_text: 'Free cafeteria food, Monday to Friday, breakfast, lunch and dinner',
        user_id: 2,
        company_id: 4
    },
    {
        reviews_text: 'Great benefits',
        user_id: 3,
        company_id: 4
    },
    {
        reviews_text: 'Management is horrific',
        user_id: 4,
        company_id: 1
    },
    {
        reviews_text: 'Great office space',
        user_id: 5,
        company_id: 7
    },
    {
        reviews_text: 'Layed back office envioronment',
        user_id: 6,
        company_id: 6 
    },
    {
        reviews_text: 'STAY AWAY, DO NOT WORK HERE',
        user_id: 7,
        company_id: 3
    },
    {
        reviews_text: `If you can't stand micromanaging, don't work here`,
        user_id: 8,
        company_id: 2
    },
    {
        reviews_text: `Work from home options`,
        user_id: 9,
        company_id: 9
    },
    {
        reviews_text: `Lots of corporate discounts yay!`,
        user_id: 10,
        company_id: 16
    },
    {
        reviews_text: `Flexible schedules`,
        user_id: 11,
        company_id: 14
    },
    {
        reviews_text: `Very strict working hours`,
        user_id: 12,
        company_id: 20
    },
    {
        reviews_text: `Inclusive work environment`,
        user_id: 13,
        company_id: 19
    },
    {
        reviews_text: `Lots of room for career growth`,
        user_id: 14,
        company_id: 14
    },
    {
        reviews_text: `Great pay. Lots of bonuses $$$`,
        user_id: 15,
        company_id: 8
    },
    {
        reviews_text: `Crappy PTO policy. Other than that, not bad`,
        user_id: 16,
        company_id: 16
    },
    {
        reviews_text: `You're nothing but a number here. They lay off the bottom 10% performers quarterly`,
        user_id: 17,
        company_id: 4
    },
    {
        reviews_text: `Perfect workplace for creative people`,
        user_id: 18,
        company_id: 15
    },
    {
        reviews_text: `Just as organized as their software`,
        user_id: 19,
        company_id: 1
    },
    {
        reviews_text: `High turnover rate`,
        user_id: 20,
        company_id: 2
    },
    {
        reviews_text: `Google > Safari`,
        user_id: 2,
        company_id: 1
     },
     {
        reviews_text: `Medical insurance is great at Google.`,
        user_id: 1,
        company_id: 1
     },
     {
        reviews_text: `I learned a lot while working at Google. Great team environment.`,
        user_id: 6,
        company_id: 1
     }


];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;