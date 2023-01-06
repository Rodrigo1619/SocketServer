const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        //Implementando la configuracion de socket io
        this.server = require('http').createServer(this.app); //este es el server que se levantara, no el de app
        this.io     = require('socket.io')(this.server);

        this.paths = {} // por si se llegan a usar en algun momento

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Configuracion de Sockets
        this.sockets();


    }

    middlewares() {

        // CORS
        this.app.use( cors() );


        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        //this.app.use( this.paths.auth, require('../routes/auth')); se deja como ejemplo por si se quiere usar
    }
    sockets(){
        this.io.on('connection', socket =>{

            socket.on('disconnect', () =>{
                console.log('cliente desconectado', socket.id);
            });

            socket.on('enviar-mensaje', (payload)=>{ //recibimos el mensaje que se manda desde el frontend 
                this.io.emit('enviar-mensaje', payload) //aqui el server manda el mensaje al frontend
            })

        })
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;