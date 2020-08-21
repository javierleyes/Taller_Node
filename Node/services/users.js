const UsersDAO = require('../daos/users')

class UsersService {

    static async getUsers() {
        return await UsersDAO.getUsers();
    }

    static async getUsersById(id) {
        return await UsersDAO.getUsersById(id);
    }

    static async createUsers(nombre, apellido) {
        return await UsersDAO.createUser(nombre, apellido);
    }
}

module.exports = UsersService;
