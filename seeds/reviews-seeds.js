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
    }
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;