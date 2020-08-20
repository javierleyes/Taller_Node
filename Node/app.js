const fs = require('fs');
const bodyParser = require('body-parser')
const express = require('express');

// Config
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

// Archivos estáticos como archivos o vistas 
app.use("/public", express.static("public"));

app.use(bodyParser.urlencoded({ extended: false })); // Forms
app.use(bodyParser.json()); // Fetch o pedidos de javascript (ex AJAX)


// const authMiddleware = require('./middlewares/auth');

// Middlewares
// app.use(authMiddleware); // Middleware Global


// Api REST ¿? --> NO ES REST
app.get('/home', (req, res) => {
    fs.createReadStream('./public/index.html', 'utf8').pipe(res);
});


// Routes
const usersRoute = require('./routes/users');
app.use("/users", usersRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})



// base de datos
const testDb = async function () {

    const { Sequelize } = require('sequelize');

    // Option 2: Passing parameters separately (other dialects)
    const sequelize = new Sequelize('Mysql', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    sequelize.close()
}

testDb();

