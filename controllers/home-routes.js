const router = require('express').Router();
const sequelize = require('../config/connection');
const { Company, User, Reviews } = require('../models');

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

module.exports = router;
