const router = require('express').Router();
const { Ratings } = require('../../models');


router.get('/', (req, res) => {
    Ratings.findAll()
    .then(dbRatingsData => res.json(dbRatingsData))
    .catch(err => {
        res.status(500).json(err);
    });
    });

router.post('/', (req, res) => {
    Ratings.create({
        rating_value: req.body.rating_value
    }).then(dbRatingsData => res.json(dbRatingsData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });  
         
    });
    
    router.put('/:id', (req, res) => {
        Ratings.update(req.body, {
            where: {
              id: req.params.id
            }
          })
            .then(dbRatingsData => {
              if (!dbRatingsData[0]) {
                res.status(404).json({ message: 'No Rating found with this id' });
                return;
              }
              res.json(dbRatingsData);
            })
            .catch(err => {
              console.log(err);
              res.status(500).json(err);
            });
    });




module.exports = router;

