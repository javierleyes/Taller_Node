const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('Mysql', 'root', '1234', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
