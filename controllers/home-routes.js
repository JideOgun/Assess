const router = require('express').Router();
const { Company, Ratings, Reviews, User } = require('../models');

router.get('/', (req, res) => {
  Company.findAll({
    attributes: ['company_name', 'roles', 'id', 'user_id'],
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
      id: req.params.id,
    },
    include: [
      {
        model: Reviews,
        attributes: ['id', 'reviews_text', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
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
