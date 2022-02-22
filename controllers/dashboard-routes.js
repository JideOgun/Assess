const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Reviews, Users } = require('../models');

router.get('/', (req, res) => {
  console.log("dashboard", req.session)
  if (req.session.loggedIn) {
    // Company.findAll()
    //   .then(allCompany => {
          Reviews.findAll({
              where: {
              user_id: req.session.user_id
              },
              attributes: [
                'id',
                'reviews_text',
                'created_at'

              ],
              include: {
                model: Reviews,
                attributes: ['id', 'reviews_text', 'created_at'],
              },
              include: [
                {
                model: Company,
                attributes: [ 'company_name', 'id']
                }
              ]
            })
            .then(reviewData => {
              const reviewAll = reviewData.map(review => review.get({ plain: true }))
              // const companyData = allCompany.map(company =>
              //   company.get({
              //     plain: true
              //   })
              // );
              res.render('dashboard', { loggedIn: true, review: reviewAll });
                // data: companyData,
              })
          // });
        } else {
          res.redirect('/login');
        }
      });

      module.exports = router;