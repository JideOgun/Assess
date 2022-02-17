const Company = require('./Company');
const User = require('./User');
const Benefits = require('./Benefits');
const Ratings = require('./Ratings');
const Reviews = require('./Reviews');

User.hasMany(Company, {
    foreignKey: 'user_id'
});

User.hasMany(Reviews, {
    foreignKey: 'user_id'
});

User.hasMany(Ratings, {
    foreignKey: 'user_id'
});



Company.hasMany(Benefits, {
    foreignKey: 'company_id'
});

// Company.hasMany(User, {
//     foreignKey: 'user_id'
// });

Company.hasMany(Ratings, {
    foreignKey: 'company_id'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id'
});

Reviews.belongsTo(Company, {
    foreignKey: 'company_id'
});

Benefits.belongsTo(Company, {
    foreignKey: 'company_id'
});


Ratings.belongsTo(User, {
    foreignKey: 'user_id'
});

Ratings.belongsTo(Company, {
    foreignKey: 'company_id'
});

module.exports = { User, Company, Reviews, Benefits, Ratings };