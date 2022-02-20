const { Reviews } = require('../models');

const reviewsData = [
    {
       reviews_text: 'Work life balance  is amazing',
       user_id: 1,
       company_id: 1
    },
    {
        reviews_text: 'Free cafetaria food, Monday to Friday, breakfast, lunch and dinner',
        user_id: 2,
        company_id: 2
    },
    {
        reviews_text: 'Great benefits',
        user_id: 3,
        company_id: 3 
    },
    {
        reviews_text: 'Managment is horrific',
        user_id: 4,
        company_id: 4 
    },
    {
        reviews_text: 'Great office space',
        user_id: 5,
        company_id: 5
    },
    {
        reviews_text: 'Layed back office enviornment',
        user_id: 6,
        company_id: 6 
    },
    {
        reviews_text: 'STAY AWAY, DO NOT WORK HERE',
        user_id: 7,
        company_id: 7
    }

];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;