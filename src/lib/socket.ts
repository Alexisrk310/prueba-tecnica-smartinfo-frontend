import { io } from 'socket.io-client';

const socket = io(`ws://${process.env.NEXT_PUBLIC_API_URL_WEBSOCKET}`);

export default socket;
