
const { Ratings } = require('../models');

const RatingsData = [
  {
    user_id: 1,
    company_id: 2,
    rating_value: 5,
    
  },
  {
    user_id: 2,
    company_id: 1,
    rating_value: 4,
    
  }
];

const seedRatings = () => Ratings.bulkCreate(RatingsData);

module.exports = seedRatings;