require('dotenv').config(); // Config

const fs = require('fs'); // Files

const bodyParser = require('body-parser'); // Forms and ajax

const express = require('express'); // Express
const app = express();
const port = process.env.PORT || 3000;

// Archivos estáticos como archivos o vistas 
app.use("/public", express.static("public"));

app.use(bodyParser.urlencoded({ extended: false })); // Forms
app.use(bodyParser.json()); // Fetch o pedidos de javascript (ex AJAX)


// const authMiddleware = require('./middlewares/auth');

// Middlewares
// app.use(authMiddleware); // Middleware Global


// Api REST ¿? --> NO ES REST
// Example pipe and read file
app.get('/home', (req, res) => {
    fs.createReadStream('./public/index.html', 'utf8').pipe(res);
});


// Routes
const usersRoute = require('./routes/users');
app.use("/users", usersRoute);

// Specify port and listen
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
