const router = require('express').Router();
const { company_benefits, Benefits, Company} = require('../../models');

// get all company_benefits
router.get('/', (req, res) => {
  company_benefits.findAll(
      // {
      // attributes: ['id'],
      //     include: [
      //     {model: Company,
      //     attributes: [ 'id', 'company_name' ]
      // },
      // {
      //     modal: Benefits,
      //     attributes: [ 'id', 'benefit_name']
      // }
      // ]
  // }
  )
  .then(dbcompany_benefitsData => res.json(dbcompany_benefitsData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});





module.exports = router;