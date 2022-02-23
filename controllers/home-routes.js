const router = require('express').Router();
const { Company, Ratings, Reviews, User } = require('../models');

router.get('/', (req, res) => {
  Company.findAll({
    attributes: ['company_name', 'roles', 'id', 'user_id'],
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
        model: User,
        attributes: ['username'],
      },
      {
        model: Benefits,
        attributes: ['benefit_name'],
      },
      {
        model: Ratings,
        attributes: ['rating_value'],
      },
    ],
  })
    .then((dbCompanyData) => {
      const companies = dbCompanyData.map((company) =>
        company.get({ plain: true })
      );
      // console.log(companies);

      let reviewsArr = [];
      for (var r = 0; r < companies.length; r++) {
        const element = companies[r];
        console.log(element.reviews.length);
        reviewsArr.push(element.reviews);
      }
      let sum = 0;
      let avgArr = [];
      for (let i = 0; i < companies.length; i++) {
        const element = companies[i];
        let object = element.ratings;
        //  console.log(element.ratings);
        // console.log(object);
        Object.keys(object).forEach((key) => {
          // console.log(key);
          if (key == 0) {
            sum = 0;
          }
          sum += object[key].rating_value;
        });
        console.log(sum);
        let avg = (sum / companies[i].ratings.length).toFixed(1);
        avgArr.push(avg);
      }
      console.log(avgArr);

      res.render('homepage', {
        companies,
        avgArr,
        reviewsArr,
        loggedIn: req.session.loggedIn,
      });
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
    attributes: ['company_name', 'roles', 'id', 'user_id'],
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
        model: User,
        attributes: ['username'],
      },
      {
        model: Benefits,
        attributes: ['benefit_name'],
      },
      {
        model: Ratings,
        attributes: ['rating_value'],
      },
    ],
  })
    .then((dbCompanyData) => {
      if (!dbCompanyData) {
        res.status(404).json({ message: 'No company with that ID' });
        return;
      }

      const companies = dbCompanyData.get({ plain: true });
      console.log(companies);
      let sum = 0;
      for (let i = 0; i < companies.ratings.length; i++) {
        const element = companies.ratings[i];
        sum += element.rating_value;
      }
      // console.log(sum);
      let avg = (sum / companies.ratings.length).toFixed(1);

      // console.log(avg);
      res.render('single-company', {
        companies,
        avg,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
