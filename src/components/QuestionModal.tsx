import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postCreateQuestion } from '@/services/api/post/postCreateQuestion';

interface QuestionModalProps {
	open: boolean; // Prop para controlar si el modal está abierto o cerrado
	onClose: () => void; // Función para cerrar el modal
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: 2,
};

const QuestionModal: React.FC<QuestionModalProps> = ({ open, onClose }) => {
	const [inputValueQuestion, setInputValueQuestion] = useState({
		category: '',
		question: '',
		options: [],
		correctAnswer: '',
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setInputValueQuestion((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = () => {
		try {
			const data = postCreateQuestion(inputValueQuestion, 'questions');
			console.log(data);

			alert('Se creo tu pregunta correctamente');
		} catch (error) {}

		onClose(); // Cerrar el modal después de enviar
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<TextField
					fullWidth
					label="Escribe la categoria"
					variant="outlined"
					name="category"
					value={inputValueQuestion.category}
					onChange={handleInputChange}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label="Escribe la pregunta"
					variant="outlined"
					name="question"
					value={inputValueQuestion.question}
					onChange={handleInputChange}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label="Escribe opciones de la pregunta separadas por comas"
					variant="outlined"
					name="options"
					value={inputValueQuestion.options}
					onChange={handleInputChange}
					sx={{ mt: 2 }}
				/>
				<TextField
					fullWidth
					label="Escribe la respuesta verdadera (textualmente)"
					variant="outlined"
					name="correctAnswer"
					value={inputValueQuestion.correctAnswer}
					onChange={handleInputChange}
					sx={{ mt: 2 }}
				/>
				<Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
					<Button onClick={onClose} sx={{ mr: 1 }}>
						Cancelar
					</Button>
					<Button variant="contained" color="primary" onClick={handleSubmit}>
						Enviar
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default QuestionModal;
