const router = require('express').Router();
const { Company, Reviews, User, CompanyBenefits, Benefits } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Company.findAll(
    {
        include: [
            {
                model: Reviews,
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Benefits
            }
        ]
    }
    )
    .then(dbCompanyData => res.json(dbCompanyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
    Company.findOne(
        {
            include: [
                {
                    model: Reviews,
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Benefits
                }
            ]
        }
    )
    .then(dbCompanyData => res.json(dbCompanyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Company.create(req.body)
        .then((company) => {
            console.log(req.body);
            if(req.body.benefitsIds) {
                const CompanyBenefitsArr = req.body.benefitsIds.map((benefits_id) => {
                    console.log(company.id, benefits_id);
                    return {
                        company_id: company.id, benefits_id
                    };
                });
                return CompanyBenefits.bulkCreate(CompanyBenefitsArr);
            }
            res.status(200).json(company);
        })
        .then((companyBenefitsIds) => res.status(200).json(companyBenefitsIds))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


router.put('/:id', withAuth,  (req, res) => {
    Company.update(
        {
            company_name: req.body.company_name,
            roles: req.body.roles,
            user_id: req.body.user_id
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No Company found with this id' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


router.delete('/:id',  withAuth, (req, res) => {
    Company.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No Company found with this id' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


module.exports = router;