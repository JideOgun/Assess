const router = require('express').Router();
const { company_benefits, Benefits} = require('../../models');



// get all compnay_benefits
router.get('/', (req, res) => {
    Benefits.findAll(
      {
      include: {
        model: company_benefits,
        attributes: ['benefit_name']
      }
    })
    .then(dbBenefitData => {
      if(!dbBenefitData) {
        res.status(404).json({message: 'No benefits found'});
        return;
      }
      res.json(dbBenefitData);
    })
  });





module.exports = router;