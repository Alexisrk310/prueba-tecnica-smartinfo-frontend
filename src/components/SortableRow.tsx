import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableRow, TableCell } from '@mui/material';

interface SortableRowProps {
	id: string;
	user: { id: string; name: string; score: number };
	index: number;
}

const SortableRow: React.FC<SortableRowProps> = ({ id, user, index }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
	};

	return (
		<TableRow ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<TableCell>{index + 1}</TableCell>
			<TableCell>{user.name}</TableCell>
			<TableCell>{user.score}</TableCell>
		</TableRow>
	);
};

export default SortableRow;
