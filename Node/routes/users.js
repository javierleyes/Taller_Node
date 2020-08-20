const UserModel = require('../models/users');

const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
    let users = await UserModel.getUsers();
    res.json(users);
});

route.get('/:id', async (req, res) => {
    let userId = req.params.id;
    let user = await UserModel.getUserById(userId);
    res.json(user);
});

route.post('/', (req, res) => {
    console.log('Se recibió el siguiente request', req.body);
    console.log('Registrando nuevo usuario');
    console.log('Nombre: ', req.body.name);
    console.log('Apellido: ', req.body.lastname);

    res.statusCode = 201;
    res.end('Creando usuario...');
})

module.exports = route;
