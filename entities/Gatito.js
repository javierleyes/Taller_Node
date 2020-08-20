const Animal = require('./Animal') // require usa CACHE internamente

class Gatito extends Animal {
    constructor(nombre) {
        super('Felino');
        this.nombre = nombre;
        this.cantiVidas = 7;
    }

    perderVida() {
        if (this.canVidas == 1)
            this.morir();
        else {
            this.cantiVidas--;
        }
    }
}

module.exports = Gatito;