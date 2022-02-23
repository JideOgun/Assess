const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, Reviews, User } = require('../models');
const withAuth = require('../utils/auth');

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


   router.get('/edit/:id', withAuth, (req, res) => {
      Reviews.findByPk(req.params.id, {
          include: [
              {
                model: Company,
                attributes: ['id', 'user_id', 'createdAt'],
                include: {
                  model: User,
                  attributes: ['username']
                }
              },
              {
                model: User,
                attributes: ['username']
              }
            ]
      })
      .then(dbReviewsData => {
          if (dbReviewsData) {
              const reviews = dbReviewsData.get({ plain: true });
              console.log(reviews);
              res.render('edit-review', {
                reviews,
                loggedIn: true
              });
            } else {
              res.status(404).end();
            }
          })
          .catch(err => {
            res.status(500).json(err);
          });  
      });
  


      module.exports = router;