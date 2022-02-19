const router = require('express').Router();

const reviewsRoutes = require('./reviews-routes');
const companyRoutes = require('./company-routes');
const userRoutes = require('./user-routes');
const ratingsRoutes = require('./ratings-routes');
const benefitsRoutes = require('./benefits-routes');
const CompanyBenefitsRoutes = require('./companybenefits-routes');

router.use('/reviews', reviewsRoutes);
router.use('/companies', companyRoutes);
router.use('/users', userRoutes);
router.use('/ratings', ratingsRoutes);
router.use('/benefits', benefitsRoutes);
router.use('/CompanyBenefits', CompanyBenefitsRoutes);


module.exports = router;
