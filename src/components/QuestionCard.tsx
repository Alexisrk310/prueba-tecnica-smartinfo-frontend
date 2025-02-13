import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { QuestionCardProps } from '@/interfaces/questionsProps';

const QuestionCard: React.FC<QuestionCardProps> = ({
	question,
	options,
	correctAnswer,
	onAnswer,
	onTimeUp,
}) => {
	const [timeLeft, setTimeLeft] = useState<number>(10);

	useEffect(() => {
		setTimeLeft(10);
	}, [question]);

	useEffect(() => {
		if (timeLeft === 0) {
			onTimeUp();
			return;
		}

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, onTimeUp]);

	const handleAnswer = (option: string) => {
		const isCorrect = option === correctAnswer;
		onAnswer(isCorrect);
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
