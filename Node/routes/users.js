const UsersService = require('../services/users')

// define route
const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
    let users = await UsersService.getUsers();
    res.json(users);
});

route.get('/:id', async (req, res) => {
    let user = await UsersService.getUserById(req.params.id);
    res.json(user);
});

route.post('/', async (req, res) => {
    console.log('Se recibió el siguiente request', req.body);
    console.log('Registrando nuevo usuario');
    console.log('Nombre: ', req.body.name);
    console.log('Apellido: ', req.body.lastname);

    await UsersService.createUsers(req.body.name, req.body.lastname)

    res.statusCode = 201;
})

module.exports = route;
