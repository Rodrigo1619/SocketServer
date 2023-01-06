//Referencias HTML
const lblOnline  = document.querySelector('#lblOnline');  
const lblOffline = document.querySelector('#lblOffline');  
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io(); // con esto si recargamos el navegador web ya podremos ver el cliente conectado

socket.on('connect', ()=>{
    console.log('conectado');
    
    //mostrara en html si esta online u offline
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})
socket.on('disconnect', ()=>{
    console.log('desconectado del server');

    //mostrara en html si esta online u offline
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload); //mandar este emit al servidor.model en los sockets
})