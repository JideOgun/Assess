const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    User.findAll()
    .then(dbUserdata => {
        res.json(dbUserdata);
    });
});

module.exports = router;