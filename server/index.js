// server/index.js

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();

app.use(express.static('client'));

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
	console.log("Écrivain connecté : ", socket.id);

	socket.on('text_update', (data) => {
		socket.broadcast.emit('text_update', data);
	});

	socket.on('disconnect', () => {
		console.log("Écrivain déconnecté : ", socket.id);
	});
});

server.listen(3000, () => console.log('Write Together running on port 3000'));