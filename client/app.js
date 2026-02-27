// client/app.js

const socket = io('http://localhost:3000');

const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
	socket.emit('text_update', { text: editor.value });
});

socket.on('text_update', (data) => {
	editor.value = data.text;
});