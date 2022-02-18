const router = require('express').Router();


const reviewsRoutes = require('./reviews-routes');
const companyRoutes = require('./company-routes');

router.use('/reviews', reviewsRoutes);
router.use('/companies', companyRoutes);


module.exports = router;