import React, { useEffect, useState } from 'react';
import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import socket from '../lib/socket';
import { User } from '@/interfaces/user.Interface';
import { useRouter } from 'next/navigation';

const RankingTable: React.FC = () => {
	const router = useRouter();
	const [ranking, setRanking] = useState<User[]>([]);

	useEffect(() => {
		// Escucha actualizaciones del servidor
		socket.on('rankingUpdate', (updatedRanking: User[]) => {
			// Ordenar el ranking de mayor a menor puntuación
			const sortedRanking = updatedRanking.sort((a, b) => b.score - a.score);
			setRanking(sortedRanking);
		});

		return () => {
			socket.off('rankingUpdate'); // Limpia el listener al desmontar el componente
		};
	}, []);

	return (
		<TableContainer
			component={Paper}
			sx={{ maxWidth: 600, margin: 'auto', mt: 4, p: 2 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Ranking en Vivo
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Posición</TableCell>
						<TableCell>Nombre</TableCell>
						<TableCell>Puntuación</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{ranking.map((user, index) => (
						<TableRow key={user.id}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.score}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Button onClick={() => router.back()}>REGRESAR</Button>
		</TableContainer>
	);
};

export default RankingTable;
