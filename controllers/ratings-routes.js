const router = require('express').Router();
const { Ratings, Company, Reviews, User } = require('../models');

router.get('/', (req, res) => {
    Company.findAll(
        {
            // where: {
            //     // usuing the ID from the session
            //     user_id: req.body.user_id
            // },
            include: [
                {
                    model: Reviews,
                    attributes: ['Reviews_text', 'user_id', 'Company_id' ],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }, 
                {
                    model: User,
                    attributes: ['username']  
                }
                
            ]
        }
    )
    .then(dbCompanyData =>
        {

            const companies = dbCompanyData.map(company => company.get({ plain: true }));
            res.render('single-company', { companies });
        }
        // res.json(dbRatingsData)
        )
    .catch(err => {
        res.status(500).json(err);
    });
    });


    // router.get('/:id', (req, res) => {
    //     Company.findOne({
    //         where: {
    //           id: req.params.id
    //         },     include: [
    //             {
    //                 model: Reviews,
    //                 attributes: ['Reviews_text', 'user_id', 'Company_id' ],
    //                 include: {
    //                     model: User,
    //                     attributes: ['username']
    //                 }
    //             }, 
    //             {
    //                 model: User,
    //                 attributes: ['username']  
    //             }
                
    //         ]
    //       })
    //       .then(dbCompanyData =>
    //         {
    
    //             const companies = dbCompanyData.map(company => company.get({ plain: true }));
    //             res.render('company', { companies });
    //         }
    //         // res.json(dbRatingsData)
    //         )
    //     .catch(err => {
    //         res.status(500).json(err);
    //     });
    //     });
    
module.exports = router;