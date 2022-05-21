let socket = io();

let chatBox = document.getElementById('chatBox');
let user;
let log = document.getElementById('log');

/* Alert de identificacion */

Swal.fire({
    title: 'Ingresa tu nombre',
    input: 'text',
    allowOutsideClick: false,
    inputValidator: (value) => {
        if (!value) {
            return 'You need to write something!'
        }
    }
}).then(result => {
    if (result.value) {
        user = result.value;
        socket.emit('new-user', user);
    }
});

chatBox.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        if(chatBox.value.trim().length > 0){
        socket.emit('message', {user, message: chatBox.value.trim()});
        chatBox.value = '';
        }
    }
});

/* Sockets */

socket.on('log', data => {
    let message = '';
    data.forEach(log => {
        message += `<p><strong>${log.user}</strong> dice: ${log.message}</p>`;
        });
    log.innerHTML = message;
    }
);