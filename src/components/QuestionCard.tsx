import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

interface QuestionCardProps {
	question: string;
	options: string[];
	correctAnswer: string;
	imageUrl?: string;
	onAnswer: (isCorrect: boolean) => void;
	onTimeUp: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
	question,
	options,
	correctAnswer,
	imageUrl,
	onAnswer,
	onTimeUp,
}) => {
	const [timeLeft, setTimeLeft] = useState<number>(10);

	// Reiniciar el temporizador cuando cambia la pregunta
	useEffect(() => {
		setTimeLeft(10); // Reiniciar a 10 segundos
	}, [question]);

	useEffect(() => {
		if (timeLeft === 0) {
			onTimeUp(); // Llamar a onTimeUp cuando el tiempo se agote
			return;
		}

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, onTimeUp]);

	const handleAnswer = (option: string) => {
		if (option === correctAnswer) {
			onAnswer(true); // Sumar puntos si la respuesta es correcta
		} else {
			onAnswer(false); // No sumar puntos si la respuesta es incorrecta
		}
	};

	return (
		<Card
			sx={{
				maxWidth: 600,
				margin: 'auto',
				mt: 4,
				background: 'linear-gradient(145deg, #cee6cc, #cee6cc)',
			}}>
			<CardContent>
				<Typography variant="h5" component="div" gutterBottom>
					{question}
				</Typography>
				{imageUrl && (
					<img
						src={imageUrl}
						alt="Question"
						style={{ width: '100%', borderRadius: '8px' }}
					/>
				)}
				<Typography variant="h6" sx={{ mt: 2, color: '#2e7d32' }}>
					Tiempo restante: {timeLeft} segundos
				</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)',
						gap: 2,
						mt: 2,
					}}>
					{options.map((option, index) => (
						<Box key={index}>
							<Button
								fullWidth
								variant="contained"
								color="primary"
								onClick={() => handleAnswer(option)}
								sx={{ backgroundColor: '#356233', color: '#FFFF' }}>
								{option}
							</Button>
						</Box>
					))}
				</Box>
			</CardContent>
		</Card>
	);
};

export default QuestionCard;
