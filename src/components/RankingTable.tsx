import React, { useEffect, useState } from 'react';
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import SortableRow from './SortableRow'; // Lo crearemos en el siguiente paso
import socket from '../lib/socket';

interface User {
	id: string;
	name: string;
	score: number;
}

const RankingTable: React.FC = () => {
	const [ranking, setRanking] = useState<User[]>([
		{ id: '1', name: 'Usuario 1', score: 100 },
		{ id: '2', name: 'Usuario 2', score: 90 },
		{ id: '3', name: 'Usuario 3', score: 80 },
	]);

	useEffect(() => {
		// Escucha actualizaciones del servidor
		socket.on('rankingUpdate', (updatedRanking: User[]) => {
			setRanking(updatedRanking);
		});

		return () => {
			socket.off('rankingUpdate');
		};
	}, []);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id !== over?.id) {
			setRanking((items) => {
				const oldIndex = items.findIndex((item) => item.id === active.id);
				const newIndex = items.findIndex((item) => item.id === over?.id);
				const newRanking = arrayMove(items, oldIndex, newIndex);

				// Envía la nueva clasificación al servidor
				socket.emit('updateRanking', newRanking);
				return newRanking;
			});
		}
	};

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}>
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
						<SortableContext
							items={ranking}
							strategy={verticalListSortingStrategy}>
							{ranking.map((user, index) => (
								<SortableRow
									key={user.id}
									id={user.id}
									user={user}
									index={index}
								/>
							))}
						</SortableContext>
					</TableBody>
				</Table>
			</TableContainer>
		</DndContext>
	);
};

export default RankingTable;
