const router = require('express').Router();
const { Benefits, Company, CompanyBenefits } = require('../../models');

// get all benefits 
router.get('/', (req, res) => {
    Benefits.findAll(
    //     {
    //     attributes: ['benefit_name'],
    //     include: [
    //         {
    //         model: Company,
    //         through: CompanyBenefits,
    //         // attributes: [ 'id', 'company_name' ]
    //         },
    //         {
    //         model: Benefits,
    //         through: CompanyBenefits,
    //         // attributes: [ 'id', 'benefit_name']
    //         }
    //     ]
    // }
    )
    .then(dbBenefitsData => res.json(dbBenefitsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one product
router.get('/:id', (req, res) => {
    Benefits.findOne({
      where: {
        id: req.params.id
      },
    //   attributes: ['id', 'product_name', 'price', 'stock'],
    //   include: [
    //     {
    //       model: Category,
    //     }
    //   ]
    })
    .then(dbBenefitsData => {
      if (!dbBenefitsData) {
        res.status(404).json({message: 'No benefit found.'});
        return;
      }
      res.json(dbBenefitsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });


module.exports = router;