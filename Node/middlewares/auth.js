const express = require('express');
const route = express.Router();

// Middleware, tiene que estar arriba de la ruta 
route.use('/', (req, res, next) => {
    if (req.headers['pass'] === '1234') {
        next(); // ok
    } else {
        res.sendStatus(403);
    }
});

module.exports = route;
