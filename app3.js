// const Gatito = require('./entities/Gatito')
// let miGatito = new Gatito('Garfield');
// console.log('Mi gato se llama:', miGatito.nombre)

// (function () {
//     // Leer archivos

//     const fs = require('fs');
//     const text = fs.readFileSync('./texto.txt', 'utf8')
//     fs.writeFileSync('./texto.txt', 'chau', 'utf8')

//     console.log(text);

// })();


//levantar un servidor
// (function () {
//     const http = require('http');

//     const server = http.createServer((req, res) => {

//         if (req.url === '/') {

//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');

//             let html = `
//             <html>
//             <head>
//             </head>
//             <body>
//             <div style="color: red">
//             holis desde Node ;)
//             </div>
//             </body>
//             </html>
//             `

//             res.end(html);
//         }
//         else {
//             res.statusCode = 404;
//             res.setHeader('Content-Type', 'text/plain');
//             res.end('La pagina no existe');
//         }
//     });

//     server.listen(3000, 'localhost', () => {
//         console.log('Escuchando en localhost:3000');
//     })

// })();


(function () {
    const http = require('http');
    const fs = require('fs');

    const server = http.createServer((req, res) => {

        switch (req.url) {

            case "/":
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');

                let html = fs.readFileSync(__dirname + "/index.html");
                res.end(html);
                break;

            case "/style.css":
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/css');

                let css = fs.readFileSync(__dirname + "/style.css");
                res.end(css);
                break;

            case "/script.js":
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/javascript');

                let script = fs.readFileSync(__dirname + "/script.js");
                res.end(script);
                break;

            default:
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end("La pagina no existe");
                break;
        }
    });

    server.listen(3000, 'localhost', () => {
        console.log('Escuchando en localhost:3000');
    })

})();

