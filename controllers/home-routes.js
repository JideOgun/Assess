const router = require('express').Router();
const { Company, Ratings, Reviews, User, Benefits } = require('../models');

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
      // Declaring reviews array here so I can push reviews into because res.render will only render an array
      let reviewsArr = [];
      // Looping through companies array
      for (var r = 0; r < companies.length; r++) {
        const element = companies[r];
        console.log(element.reviews.length);
        reviewsArr.push(element.reviews);
      }

      // declaring sum as 0 so I can add up all the ratings in the object
      let sum = 0;
      // declaring avgArr so I can render using res.render
      let avgArr = [];
      for (let i = 0; i < companies.length; i++) {
        const element = companies[i];
        let object = element.ratings;
        
        
        // changing object into array so I can use forEach to add each rating_value
        Object.keys(object).forEach((key) => {
          // putting conditional because each user's key resets at zero...so it doesn't just keep adding instead of starting from zero after each user
          if (key == 0) {
            sum = 0;
          }
          sum += object[key].rating_value;
        });
        // decalring average var and dividing by number of ratings in db, then rounding off to one decimal place
        let avg = (sum / companies[i].ratings.length).toFixed(1);
        avgArr.push(avg);
      }
// rendering homepage as well as other arrays that i'll need as partials in the handlebars
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


// login Route 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// About-Us Route
router.get('/about-us/', (req, res) => {
  res.render('about-us',  {loggedIn: req.session.loggedIn});
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
      console.log(companies.ratings);

     
      let avg;
      let sum = 0;
      for (let i = 0; i < companies.ratings.length; i++) {
        const element = companies.ratings[i];
        sum += element.rating_value;
      }
      
      // If no rating has been posted put zero else put average rating
      if(sum === 0) {
              avg = 'zero';
            } else {
           avg = (sum / companies.ratings.length).toFixed(1);
            }

     

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
