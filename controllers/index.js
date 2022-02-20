const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const ratingsRoutes = require('./ratings-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/company/', ratingsRoutes);

module.exports = router;
