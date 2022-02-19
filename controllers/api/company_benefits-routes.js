const router = require('express').Router();
const { company_benefits, Benefits} = require('../../models');

// get all compnay_benefits
router.get('/', (req, res) => {
  company_benefits.findAll(
      {
      attributes: ['id'],
          include: [
          {model: Company,
          attributes: [ 'id', 'company_name' ]
      },
      {
          modal: Benefits,
          attributes: [ 'benefit_name']
      }
      ]
  }
  )
  .then(dbcompany_benefitsData => res.json(dbcompany_benefitsData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});





module.exports = router;