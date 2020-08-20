class Animal {
    constructor(especie) {
        this.estaVivo = true;
        this.especie = especie;
    }

    morir() {
        this.estaVivo = false;
    }
}

module.exports = Animal;