'use client';
import React, { useEffect, useState } from 'react';
import QuestionCard from '@/components/QuestionCard';
import { Typography, Button, Box } from '@mui/material';
import { allQuestions } from '@/data/questions';
import { TypeQuestion } from '@/types/typeQuestionsType';
import { useRouter } from 'next/navigation';
import { ParamsQuizzesProps } from '@/interfaces/params';
import SkeletonStartQuiz from '@/components/SkeletonStartQuiz';
import useQuestions from '@/hooks/useQuestions';

export default function QuizzesPage({ params }: ParamsQuizzesProps) {
	const router = useRouter();
	const [quizzes, setQuizzes] = useState<TypeQuestion>('');
	const [currentCategory, setCurrentCategory] = useState<TypeQuestion>('');
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [showScore, setShowScore] = useState<boolean>(false);
	const [quizStarted, setQuizStarted] = useState<boolean>(false);
	const [feedback, setFeedback] = useState<{
		correct: boolean;
		message: string;
	} | null>(null);

	// Obtener la categoría actual desde los parámetros
	useEffect(() => {
		async function name() {
			const { quizzes } = await params;
			setQuizzes(quizzes as TypeQuestion);
			setCurrentCategory(quizzes as TypeQuestion);
		}
		name();
	}, [params]);

	// Lógica para manejar respuestas y retroalimentación
	const handleAnswerWithFeedback = (isCorrect: boolean) => {
		// Actualizar el puntaje usando handleAnswer del hook
		handleAnswer(isCorrect);

		// Mostrar retroalimentación
		if (isCorrect) {
			setFeedback({ correct: true, message: '¡Respuesta Correcta!' });
		} else {
			setFeedback({ correct: false, message: 'Respuesta Incorrecta' });
		}

		// Después de 1 segundo, pasar a la siguiente pregunta
		setTimeout(() => {
			setFeedback(null);
			nextQuestion();
		}, 1000);
	};

	// Hook personalizado para manejar la lógica del quiz
	const { handleAnswer, nextQuestion, startQuiz } = useQuestions(
		setScore,
		currentCategory,
		currentQuestionIndex,
		allQuestions,
		setCurrentQuestionIndex,
		setShowScore,
		setQuizStarted
	);

	// Mostrar el esqueleto de carga si no hay datos
	if (!quizzes) {
		return <SkeletonStartQuiz />;
	}

	// Mostrar la pantalla de puntaje final
	if (showScore) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}>
				<Box
					sx={{
						textAlign: 'center',
						padding: '30px',
						background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
						borderRadius: '20px',
					}}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						sx={{ color: '#2e7d32' }}>
						¡Juego Terminado!
					</Typography>
					<Typography variant="h4" sx={{ color: '#2e7d32' }}>
						Puntaje total: {score} puntos
					</Typography>
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							setCurrentCategory('');
							router.back();
						}}
						sx={{ mt: 4, backgroundColor: '#388e3c', color: '#fff' }}>
						Volver al menú
					</Button>
				</Box>
			</Box>
		);
	}

	// Mostrar la pantalla de inicio del quiz
	if (!quizStarted) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}>
				<Box
					sx={{
						textAlign: 'center',
						padding: '30px',
						background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
						borderRadius: '20px',
					}}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						sx={{ color: '#2e7d32', fontWeight: '300' }}>
						Bienvenido a la trivia de {currentCategory.toUpperCase()}
					</Typography>
					<Typography variant="h5" sx={{ color: '#2e7d32', mb: 4 }}>
						Cada pregunta tiene un límite de 10 segundos.
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={startQuiz}
							sx={{ backgroundColor: '#388e3c', color: '#fff' }}>
							Comenzar Quiz
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => router.back()}
							sx={{ backgroundColor: 'red', color: '#fff' }}>
							Regresar
						</Button>
					</Box>
				</Box>
			</Box>
		);
	}

	// Mostrar la pregunta actual
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<Box
				sx={{
					textAlign: 'center',
					padding: '30px',
					background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
					borderRadius: '20px',
				}}>
				<Typography
					variant="h3"
					component="h1"
					gutterBottom
					sx={{ color: '#2e7d32' }}>
					Trivia de {currentCategory.toUpperCase()}
				</Typography>
				<Typography variant="h5" sx={{ color: '#2e7d32', mb: 4 }}>
					Puntos: {score}
				</Typography>
				{feedback && (
					<Typography
						variant="h5"
						sx={{ color: feedback.correct ? '#2e7d32' : '#d32f2f', mb: 4 }}>
						{feedback.message}
					</Typography>
				)}
				<QuestionCard
					{...allQuestions[currentCategory][currentQuestionIndex]}
					onAnswer={handleAnswerWithFeedback}
					onTimeUp={nextQuestion}
				/>
			</Box>
		</Box>
	);
}
