var socket = io();

// Escuchar sucesos o eventos
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta del servidor:', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
});