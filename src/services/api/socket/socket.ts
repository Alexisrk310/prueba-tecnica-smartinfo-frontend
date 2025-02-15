import { Server, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@/interfaces/user.Interface';

let ranking: User[] = [];

interface ServerToClientEvents {
	rankingUpdate: (ranking: User[]) => void;
}

interface ClientToServerEvents {
	updateRanking: (updatedRanking: User[]) => void;
}

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
		res.end();
		return;
	}

	const io = new Server<ClientToServerEvents, ServerToClientEvents>(
		res.socket.server as any
	);
	res.socket.server.io = io;

	io.on(
		'connection',
		(socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
			socket.emit('rankingUpdate', ranking);

			socket.on('updateRanking', (updatedRanking: User[]) => {
				console.log('Ranking updated:', updatedRanking);
				ranking = updatedRanking;

				io.emit('rankingUpdate', ranking);
			});

			socket.on('disconnect', () => {
				console.log('A client disconnected');
			});
		}
	);

	res.end();
}
