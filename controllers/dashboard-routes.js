const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Reviews, User } = require('../models');

router.get('/', (req, res) => {
      console.log("dashboard", req.session);
      if (req.session.loggedIn) {
      Reviews.findAll({
         where: {user_id: req.session.user_id},
         include: [
                 { 
                  model: User,
               attributes: ['username']
                  },
                  {
                        model: Company,
                        attributes: ['company_name']
                  }
         ]
          })
    .then(reviewdata => {
        const reviewAll = reviewdata.map(review =>
          review.get({ plain: true })
         );
         console.log(reviewAll);
         let username =  [req.session.username];
         console.log(username);
       res.render('dashboard',  {loggedIn: true, review: reviewAll, username});
        });
  } else { res.redirect('/login');}
   });

      module.exports = router;