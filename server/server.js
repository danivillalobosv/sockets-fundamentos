const express = require('express');
const socketIO = require('socket.io');

// Servidor alterno instalado en Node
const http = require('http');

const path = require('path');

const app = express();
// Express esta basado en el servidor http
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);

require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});