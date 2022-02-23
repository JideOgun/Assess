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
    },
    {
        username: 'Lionel Messi',
        email: 'LionelM@gmail.com',
        password: 'LionelMessi'
    },
    {
        username: 'Cristiano Ronaldo',
        email: 'CristianoR@gmail.com',
        password: 'CristianoRonaldo'
    },
    {
        username: 'Diego Maradona',
        email: 'DiegoM@gmail.com',
        password: 'DiegoMaradona'
    },
    {
        username: 'David Beckham',
        email: 'DavidB@gmail.com',
        password: 'DavidBeckham'
    },
    {
        username: 'Kylian Mbappe',
        email: 'KylianM@gmail.com',
        password: 'KylianMbappe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;