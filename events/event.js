class EventEmitter {
    constructor() {
        this.events = {};
    }

    // Alguien se suscribe a este evento
    on(eventType, listener) {
        if (typeof (listener) === "function")
            if (this.events[eventType]) {
                this.events[eventType].push(listener);
            }
            else {
                this.events[eventType] = []; // Cuando no existe la property
                this.events[eventType].push(listener);
            }
    }

    // Momento de ejecutar funciones suscriptas
    emit(eventType, data) {
        if (this.events[eventType]) {
            this.events[eventType].forEach(listener => listener(data));
        }
    }

    delete(eventType, lisltener) {
        if (this.events[eventType]) {
            this.events[eventType] = this.events[eventType].filter(fn => listener !== fn)
        }
    }
}

module.exports = EventEmitter;