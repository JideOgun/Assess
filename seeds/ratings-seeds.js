
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
  },
  {
    user_id: 3,
    company_id: 3,
    rating_value: 5,
  },
  {
    user_id: 4,
    company_id: 4,
    rating_value: 1,
  },
  {
    user_id: 5,
    company_id: 5,
    rating_value: 5,
  },
  {
    user_id: 6,
    company_id: 6,
    rating_value: 5,
  },
  {
    user_id: 7,
    company_id: 7,
    rating_value: 1,
  },
  {
    user_id: 8,
    company_id: 8,
    rating_value: 2,
  },
  {
    user_id: 9,
    company_id: 9,
    rating_value: 5,
  },
  {
    user_id: 10,
    company_id: 10,
    rating_value: 5,
  },
  {
    user_id: 11,
    company_id: 11,
    rating_value: 5,
  },
  {
    user_id: 12,
    company_id: 12,
    rating_value: 1,
  },
  {
    user_id: 13,
    company_id: 13,
    rating_value: 5,
  },
  {
    user_id: 14,
    company_id: 14,
    rating_value: 4,
  },
  {
    user_id: 15,
    company_id: 15,
    rating_value: 5,
  },
  {
    user_id: 16,
    company_id: 16,
    rating_value: 3,
  },
  {
    user_id: 17,
    company_id: 17,
    rating_value: 1,
  },
  {
    user_id: 18,
    company_id: 18,
    rating_value: 4,
  },
  {
    user_id: 19,
    company_id: 19,
    rating_value: 5,
  },
  {
    user_id: 20,
    company_id: 20,
    rating_value: 3,
  }
  
];

const seedRatings = () => Ratings.bulkCreate(RatingsData);

module.exports = seedRatings;