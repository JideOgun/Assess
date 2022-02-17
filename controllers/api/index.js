const router = require('express').Router();


const reviewsRoutes = require('./reviews-routes');


router.use('/reviews', reviewsRoutes);

module.exports = router;