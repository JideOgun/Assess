const router = require('express').Router();
const { CompanyBenefits, Benefits, Company} = require('../../models');

// get all companybenefits
router.get('/', (req, res) => {
  CompanyBenefits.findAll(
      {
      attributes: ['id'],
          include: [
          {
          model: Company,
          through: CompanyBenefits,
          attributes: [ 'id', 'company_name' ]
          },
          {
          model: Benefits,
          through: CompanyBenefits,
          attributes: [ 'id', 'benefit_name']
          }
      ]
  }
  )
  .then(dbCompanyBenefitsData => res.json(dbCompanyBenefitsData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// get one company benefit
router.get('/:id', (req, res) => {
  CompanyBenefits.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'product_name', 'price', 'stock'],
    include: [
      {
        model: Category,
      }
    ]
  })
  .then(dbCompanyBenefitsData => {
    if (!dbCompanyBenefitsData) {
      res.status(404).json({message: 'No benefit found.'});
      return;
    }
    res.json(dbCompanyBenefitsData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;