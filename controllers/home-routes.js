const router = require('express').Router();
const { Company, Ratings, Reviews, User } = require('../models');

router.get('/', (req, res) => {
  Company.findAll({
    attributes: ['id', 'company_name'],
  })
    .then((dbCompanyData) => {
      const companies = dbCompanyData.map((company) =>
        company.get({ plain: true })
      );

      res.render('homepage', { companies });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});




router.get('/company/:id', (req, res) => {
  Company.findOne({
      where: {
        id: req.params.id
      }, 
          include: [
          {
              model: Reviews,
              attributes: ['Reviews_text', 'user_id', 'Company_id' ],
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
    .then(dbCompanyData =>
      {
        if(!dbCompanyData) {
          res.status(404).json({ message: 'No Company found with this id'});
          return;
      }

          const companies = dbCompanyData.get({ plain: true });
          res.render('single-company', { companies });
      }
      // res.json(dbRatingsData)
      )
  .catch(err => {
      res.status(500).json(err);
  });
  });


module.exports = router;
