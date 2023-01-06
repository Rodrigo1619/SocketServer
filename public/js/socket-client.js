//Referencias HTML
const lblOnline  = document.querySelector('#lblOnline');  
const lblOffline = document.querySelector('#lblOffline');  
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io(); // con esto si recargamos el navegador web ya podremos ver el cliente conectado

socket.on('connect', ()=>{
    //console.log('conectado');
    
    //mostrara en html si esta online u offline
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})
socket.on('disconnect', ()=>{
    //console.log('desconectado del server');

    //mostrara en html si esta online u offline
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
})

//mandar el mismo nombre que hemos puesto en el server.model ya que aqui se esta escuchando para mostrar en el frontend
socket.on('enviar-mensaje', (payload)=>{//payload que estamos recibiendo desde el socket del server.model
    console.log(payload)
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('desde el server', id)
    }); //mandar este emit al servidor.model en los sockets
})