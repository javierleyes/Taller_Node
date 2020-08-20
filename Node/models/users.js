class UserModel {

    static async getUsers() {
        return new Promise((resolve, reject) => {
            let users = [
                {
                    id: 1,
                    nombre: "fran",
                    apellido: "fog"
                },
                {
                    id: 2,
                    nombre: "fede",
                    apellido: "lit"
                },
                {
                    id: 3,
                    nombre: "tincho",
                    apellido: "andu",
                }
            ];

            setTimeout(() => resolve(users), 1000);
        });
    }

    static async getUserById(id) {
        let users = await this.getUsers();

        return new Promise((resolve, reject) => {
            resolve(users.filter(user => user.id == id));
        });
    }
}

module.exports = UserModel;
