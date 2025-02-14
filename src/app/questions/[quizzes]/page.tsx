'use client';
import React, { useEffect, useState } from 'react';
import QuestionCard from '@/components/QuestionCard';
import { Typography, Button, Box } from '@mui/material';
import { TypeQuestion } from '@/types/typeQuestionsType';
import { useRouter } from 'next/navigation';
import { ParamsQuizzesProps } from '@/interfaces/params';
import SkeletonStartQuiz from '@/components/SkeletonStartQuiz';
import useQuestions from '@/hooks/useQuestions';

// Función para obtener las preguntas de la API
export const question = async (pathname: string) => {
	const loginEndpoint = `http://localhost:4000/questions?category=${pathname}`;
	try {
		const response = await fetch(loginEndpoint);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		throw new Error(error.message || 'No hay preguntas.');
	}
};

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
	const [questions, setQuestions] = useState<any[]>([]); // Estado para almacenar las preguntas de la API

	useEffect(() => {
		async function fetchQuestions() {
			try {
				const { quizzes } = await params;
				setCurrentCategory(quizzes as TypeQuestion);

				// Llamar a la API para obtener las preguntas
				const data = await question(quizzes as string);
				setQuestions(data); // Almacenar las preguntas en el estado
				setQuizzes(quizzes as TypeQuestion);
			} catch (error) {
				console.error('Error fetching questions:', error);
			}
		}
		fetchQuestions();
	}, [params]);

	const handleAnswerWithFeedback = (isCorrect: boolean) => {
		handleAnswer(isCorrect);

		if (isCorrect) {
			setFeedback({ correct: true, message: '¡Respuesta Correcta!' });
		} else {
			setFeedback({ correct: false, message: 'Respuesta Incorrecta' });
		}

		setTimeout(() => {
			setFeedback(null);
			nextQuestion();
		}, 1000);
	};

	const { handleAnswer, nextQuestion, startQuiz } = useQuestions(
		setScore,
		currentQuestionIndex,
		questions, // Usar las preguntas obtenidas de la API
		setCurrentQuestionIndex,
		setShowScore,
		setQuizStarted
	);

	if (!quizzes) {
		return <SkeletonStartQuiz />;
	}

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
					{...questions[currentQuestionIndex]} // Usar las preguntas de la API
					onAnswer={handleAnswerWithFeedback}
					onTimeUp={nextQuestion}
				/>
			</Box>
		</Box>
	);
}
