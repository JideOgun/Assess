const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Reviews } = require('../models');

router.get('/', (req, res) => {
      console.log("dashboard", req.session);
      if (req.session.loggedIn) {
      Reviews.findAll({
         where: {user_id: req.session.user_id}
          })
    .then(reviewdata => {
        const reviewAll = reviewdata.map(review =>
          review.get({ plain: true })
         );
       res.render('dashboard', {loggedIn: true, review: reviewAll});
        });
  } else { res.redirect('/login');}
   });

      module.exports = router;