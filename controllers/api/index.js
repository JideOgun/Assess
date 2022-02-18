const router = require('express').Router();

const reviewsRoutes = require('./reviews-routes');
const userRoutes = require('./user-routes');

router.use('/reviews', reviewsRoutes);
router.use('/users', userRoutes);

module.exports = router;
