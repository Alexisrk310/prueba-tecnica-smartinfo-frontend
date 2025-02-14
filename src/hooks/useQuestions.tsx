import React from 'react';
import { Question } from '@/interfaces/questionsProps';

const useQuestions = (
	setScore: React.Dispatch<React.SetStateAction<number>>,
	currentQuestionIndex: number,
	questions: Question[], // Cambiar allQuestions por questions (preguntas de la API)
	setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>,
	setShowScore: React.Dispatch<React.SetStateAction<boolean>>,
	setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>
) => {
	// Función para manejar la respuesta
	const handleAnswer = (isCorrect: boolean) => {
		if (isCorrect) {
			setScore((prev: number) => prev + 10); // Sumar 10 puntos si es correcta
		}
		return isCorrect; // Devolver si la respuesta fue correcta
	};

	// Función para pasar a la siguiente pregunta
	const nextQuestion = () => {
		if (questions && currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex((prev: number) => prev + 1); // Siguiente pregunta
		} else {
			setShowScore(true); // Mostrar puntaje final
		}
	};

	// Función para iniciar el quiz
	const startQuiz = () => {
		setQuizStarted(true);
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowScore(false);
	};

	return { handleAnswer, nextQuestion, startQuiz };
};

export default useQuestions;
