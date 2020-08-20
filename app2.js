(function () {
    // const EventEmitter = require('./events/event'); // Version Node
    const EventEmitter = require('events'); // Version Livuv

    const eventEmitter = new EventEmitter();

    function saludar(nombre) {
        console.log('Hola', nombre);
        eventEmitter.emit('saludo', "Alguien saludo a " + nombre);
    }

    eventEmitter.on('saludo', (nombre) => {
        console.log("Alguien saludo a", nombre);
    })

    saludar("Fran");
});

// Streams y Buffers
(function () {
    let buffer = Buffer.from('hola, como te va', 'utf8')
    buffer.write('p  ', 'utf8')
    console.log(buffer.toString());
});

// Files + callbacks
(function () {
    const fs = require('fs');
    let text = fs.readFileSync(__dirname + "/texto.txt", 'utf8');

    // Cómo hacemos para leer el archivo async?
    fs.readFile(__dirname + "/texto.txt", 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});

// Files + Streams
(function () {
    const fs = require('fs');

    let readStream = fs.createReadStream(__dirname + "/texto.txt",
        {
            encoding: 'utf8',
            // highWaterMark: 1, // para marcar los bytes a procesar
        }
    );

    let writeStream = fs.createWriteStream(__dirname + "/textoLower.txt");

    readStream.on('data', data => {
        // data es buffer
        console.log("Leyendo stream...");
        console.log(data);
        writeStream.write(data.toLowerCase());
    })

    let writeStreamCopia = fs.createWriteStream(__dirname + "/textoCopia.txt");

    // PIPES
    readStream.pipe(writeStreamCopia);
});

// GZIP
(function () {
    const fs = require('fs');
    const zlib = require('zlib');

    let gzip = zlib.createGzip();

    let readStream = fs.createReadStream(__dirname + "/texto.txt");
    let writeStream = fs.createWriteStream(__dirname + "/textoZip.gz");

    readStream.pipe(gzip).pipe(writeStream);
})();
