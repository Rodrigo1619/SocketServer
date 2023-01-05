//Referencias HTML
const lblOnline  = document.querySelector('#lblOnline');  
const lblOffline = document.querySelector('#lblOffline');  

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