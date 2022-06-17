const socket = io();

const formAgregarProducto = document.getElementById('formAgregarProducto')
formAgregarProducto.addEventListener('submit', e => {
    // prevengo que el formulario recargue la pagina al hacer submit
    e.preventDefault()

    // armo el producto extrayendo los datos de los campos del formulario

    //document.getElementById('txtNombre').value
    const producto = {
        title: formAgregarProducto[0].value,
        price: formAgregarProducto[1].value,
        thumbnail: formAgregarProducto[2].value,
    }

    // envio la producto al servidor via socket
    socket.emit('update', producto);

    // limpio el contenido de los campos del formulario
    formAgregarProducto.reset()
})

// agrego manejador de eventos de tipo 'productos'
socket.on('productos', manejarEventoproductos);

async function manejarEventoproductos(productos) {

    // busco la plantilla del servidor
    const recursoRemoto = await fetch('plantillas/tabla-productos.hbs')

    //extraigo el texto de la respuesta del servidor
    const textoPlantilla = await recursoRemoto.text()

    //armo el template con handlebars
    const functionTemplate = Handlebars.compile(textoPlantilla)

    // relleno la plantilla con las productos recibidas
    const html = functionTemplate({ productos })

    // reemplazo el contenido del navegador con los nuevos datos
    document.getElementById('productos').innerHTML = html
}

async function manejarEventoChat(mensajes) {

    // busco la plantilla del servidor
    const recursoRemoto = await fetch('plantillas/mensajes.hbs')

    //extraigo el texto de la respuesta del servidor
    const textoPlantilla = await recursoRemoto.text()

    //armo el template con handlebars
    const functionTemplate = Handlebars.compile(textoPlantilla)

    // relleno la plantilla con las productos recibidas
    const html = functionTemplate({ mensajes })

    // reemplazo el contenido del navegador con los nuevos datos
    document.getElementById('mensajes').innerHTML = html
}

const formAgregarMensaje = document.getElementById('formAgregarMensaje')
formAgregarMensaje.addEventListener('submit', e => {
    e.preventDefault()
    const mensaje = document.getElementById('mensaje')
    const email = document.getElementById('email')
    const input = { mensaje: mensaje.value, email: email.value }
    socket.emit('mensaje', input);
    formAgregarMensaje.reset()
})

socket.on('mensajes', manejarEventoChat);