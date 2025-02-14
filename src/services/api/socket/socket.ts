import { Server, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';

// Definimos la interfaz para el usuario
interface User {
	id: string;
	name: string;
	score: number;
}

// Datos iniciales del ranking
let ranking: User[] = [
	{ id: '1', name: 'Usuario 1', score: 100 },
	{ id: '2', name: 'Usuario 2', score: 90 },
	{ id: '3', name: 'Usuario 3', score: 80 },
];

// Tipamos los eventos de WebSocket
interface ServerToClientEvents {
	rankingUpdate: (ranking: User[]) => void;
}

interface ClientToServerEvents {
	updateRanking: (updatedRanking: User[]) => void;
}

// Tipamos el manejador de la API
export default function SocketHandler(
	req: NextApiRequest,
	res: NextApiResponse & {
		socket: {
			server: {
				io?: Server<ClientToServerEvents, ServerToClientEvents>;
			};
		};
	}
) {
	if (res.socket.server.io) {
		console.log('WebSocket server está disponible.');
		res.end();
		return;
	}

	const io = new Server<ClientToServerEvents, ServerToClientEvents>(
		res.socket.server as any
	);
	res.socket.server.io = io;

	// Manejamos la conexión de un nuevo cliente
	io.on(
		'connection',
		(socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
			console.log('Un cliente conectado');

			// Enviamos el ranking actual al cliente que se conecta
			socket.emit('rankingUpdate', ranking);

			// Escuchamos el evento para actualizar el ranking
			socket.on('updateRanking', (updatedRanking: User[]) => {
				console.log('Ranking updated:', updatedRanking);
				ranking = updatedRanking;

				// Emitimos el ranking actualizado a todos los clientes
				io.emit('rankingUpdate', ranking);
			});

			// Manejamos la desconexión del cliente
			socket.on('disconnect', () => {
				console.log('A client disconnected');
			});
		}
	);

	// Finalizamos la respuesta
	res.end();
}
