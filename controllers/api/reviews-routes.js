const router = require('express').Router();
const { Reviews } = require('../../models');

router.get('/', (req, res) => {
    Reviews.findAll()
    .then(dbReviewsData => res.json(dbReviewsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    if (req.session) {
        Reviews.create({
            reviews_text: req.body.reviews_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(dbReviewsData => res.json(dbReviewsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req, res) => {
    if (req.session) {
        Reviews.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbReviewsData => {
            if (!dbReviewsData) {
                res.status(404).json({ message: 'No review found with this ID!'});
                return;
            }
            res.json(dbReviewsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});

module.exports = router;