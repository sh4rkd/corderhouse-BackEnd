const express = require('express');
const app = express();
const port = 8080;
const content = require('./products.js');

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Desafio 6</title>
    </head>
        <body>
            <!-- two a in div flex-->
            <div class="bg-dark text-secondary px-4 py-5 text-center vh-100">
                <div class="py-5">
                    <h1 class="display-5 fw-bold text-white">Servidor con express</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="fs-5 mb-4">Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080 <br>a) Ruta get /productos que devuelva un array con todos los productos disponibles en el servidor <br/> b) Ruta get /productoRandom que devuelva un producto elegido al azar entre todos los productos disponibles</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="/productos" target="_blank" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">ver todos los productos</a>
                            <a href="/productoRandom" target="_blank" class="btn btn-outline-light btn-lg px-4">ver un producto aleatorio</a>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </body>
    </html>
    `);
});

app.get('/productos', (req, res) => {
    res.send(content.read());
});

app.get('/productoRandom', (req, res) => {
    res.send(content.readRandom());
});

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});