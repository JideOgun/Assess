const router = require('express').Router();
const { Ratings } = require('../../models');
// const sequelize = require('../config/connection');


router.get('/', (req, res) => {
    Ratings.findAll()
    .then(dbRatingsData =>
       
        {
            
            function avgStar() {
                // console.log((dbRatingsData));
                let sum = 0;
                for (let i = 0; i < dbRatingsData.length; i++) {
                    const element = dbRatingsData[i];
                    // console.log(element.dataValues.rating_value);
                    sum += element.dataValues.rating_value;
                    
                }
                // console.log(sum);
                let avg = (sum/dbRatingsData.length).toFixed(1);
                console.log(avg);
            }
            avgStar();


            res.json(dbRatingsData);
        
        }
        
        )
    .catch(err => {
        res.status(500).json(err);
    });
    
    });


router.post('/', (req, res) => {
    Ratings.create({
        user_id: req.session.user_id,
        company_id: req.body.company_id,
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

