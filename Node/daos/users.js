const UserModel = require('../models/users');

class UsersDAO {

    static async getUsers() {
        return await UserModel.findAll();
    }

    static async getUsersById(id) {
        return await UserModel.findOne({ where: id });
    }

    static async createUser(nombre, apellido) {
        const user = {
            firstName: nombre,
            lastName: apellido
        }

        return await UserModel.create(user);
    }
}

module.exports = UsersDAO;
