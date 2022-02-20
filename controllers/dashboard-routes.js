const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Company,
  Reviews
} = require('../models');

router.get('/', (req, res) => {
      console.log("dashboard", req.session)
      if (req.session.loggedIn) {
        Company.findAll()
          .then(allCompany => {
              Reviews.findAll({
                  where: {
                    user_id: req.session.user_id
                  }
                })
                .then(reviewdata => {
                  const reviewAll = reviewdata.map(review =>
                    review.get({
                      plain: true
                    }))
                  const companyData = allCompany.map(company =>
                    company.get({
                      plain: true
                    })
                  );
                  res.render('dashboard', {
                    loggedIn: true,
                    data: companyData,
                    review: reviewAll
                  });
                })
              });
            } else {
              res.redirect('/login');
            }
          });

      module.exports = router;