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
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );


        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        
        //this.app.use( this.paths.auth, require('../routes/auth'));
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;