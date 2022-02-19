const router = require('express').Router();

// const coBenefitsRoutes = require('./company_benefits-routes')
const benefitsRoutes = require('./benefits-routes');

// router.use('/benefits', coBenefitsRoutes)
router.use('/benefits', benefitsRoutes);

module.exports = router;