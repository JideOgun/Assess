const router = require('express').Router();
const { Benefits } = require('../../models');


// get all benefits 
router.get('/', (req, res) => {
    Benefits.findAll(
        {
        include: {
                model: Benefits,
                attributes: ['benefit_name']
        }
    })
    .then(dbBenefitsData => res.json(dbBenefitsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;