// *** DO NOT MESS WITH THIS**

const { Ratings } = require('../models');

const RatingsData = [
  {
    user_id: 1,
    company_id: 2,
    rating_value: 5,
    
  }
];

const seedRatings = () => Ratings.bulkCreate(RatingsData);

module.exports = seedRatings;