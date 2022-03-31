let socket = io();

let chatBox = document.getElementById('chatBox');
let user;
Swal.fire({
    title: 'Enter your name',
    input: 'text',
    allowOutsideClick: false,
    inputValidator: (value) => {
        if (!value) {
            return 'You need to write something!'
        }
    }
})