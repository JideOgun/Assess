const router = require('express').Router();

const reviewsRoutes = require('./reviews-routes');
const companyRoutes = require('./company-routes');
const userRoutes = require('./user-routes');

router.use('/reviews', reviewsRoutes);
router.use('/companies', companyRoutes);
router.use('/users', userRoutes);


module.exports = router;
