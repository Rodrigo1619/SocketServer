const socketController = (socket) =>{
    console.log('cliente conectado', socket.id);
    socket.on('disconnect', () =>{
        console.log('cliente desconectado', socket.id);
    });

    //recibimos el mensaje que se manda desde el frontend
    socket.on('enviar-mensaje', (payload, callback)=>{ //el callback es la funcion que tenemos en el cliente de enviar-mensaje
        const id = 12345612;
        callback(id);
        //aqui el server manda el mensaje al frontend
        socket.broadcast.emit('enviar-mensaje', payload)//broadcast es para mandar el mensaje a todos
    })

}

module.exports = {
    socketController
}