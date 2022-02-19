const router = require('express').Router();

const reviewsRoutes = require('./reviews-routes');
const companyRoutes = require('./company-routes');
const userRoutes = require('./user-routes');
const ratingsRoutes = require('./ratings-routes');
const benefitsRoutes = require('./benefits-routes');
const companyBenfitsRoutes = require('./company_benefits-routes');

router.use('/reviews', reviewsRoutes);
router.use('/companies', companyRoutes);
router.use('/users', userRoutes);
router.use('/ratings', ratingsRoutes);
router.use('/benefits', benefitsRoutes);
router.use('/company_benefits', companyBenfitsRoutes);


module.exports = router;
