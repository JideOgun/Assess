const { User } = require('../models');

const userData = [
    {
        username: 'Lebron James',
        email: 'LebronJ@gmail.com',
        password: 'LebronJames'
    },
    {
        username: 'Anthony Davis',
        email: 'AnthonyD@gmail.com',
        password: 'AnthonyDavis'
    },
    {
        username: 'Dirk Nowitzki',
        email: 'DirkW@gmail.com',
        password: 'DirkNowitzki'
    },
    {
        username: 'Micheal Jordan',
        email: 'MichaelJ@gmail.com',
        password: 'MichealJordan'
    },
    {
        username: 'Ja Morant',
        email: 'JaM@gmail.com',
        password: 'JaMorant'
    },
    {
        username: 'Zion Williamson',
        email: 'ZionW@gmail.com',
        password: 'ZionWilliamson'
    },
    {
        username: 'James Harden',
        email: 'JamesH@gmail.com',
        password: 'JamesHarden'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;