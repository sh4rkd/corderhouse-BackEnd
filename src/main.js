const express = require('express')
const ClienteSql = require('./sql')
const options = require('./options/mariaDB')
const optionsSqlite = require('./options/SQLite3')
const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')

const sql = new ClienteSql(options, 'productos')
const sqlite = new ClienteSql(optionsSqlite, 'mensajes')

//--------------------------------------------
// Creo las bases de datos -> descomentarlas al primer uso

// sql.crearTabla()
// sqlite.crearTabla()


const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

//--------------------------------------------
// configuro el socket

io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');

    // carga inicial de productos y mensajes
    socket.emit('productos', await sql.listarDb());
    socket.emit('mensajes', await sqlite.listarDb())

    // actualizacion de productos
    socket.on('update', async producto => {
        await sql.insertarEnDb(producto)
        io.sockets.emit('productos', await sql.listarDb());
    })
    // actualizacion de mensajes
    socket.on('mensaje', async data => {
        await sqlite.insertarEnDb({ email: data.email, mensaje: data.mensaje, hora: new Date().toLocaleString() })
        io.sockets.emit('mensajes', await sqlite.listarDb())
    })
});

//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
