import React from 'react';
import { Question } from '@/interfaces/questionsProps';
import { TypeQuestion } from '@/types/typeQuestionsType';

const useQuestions = (
	setScore: React.Dispatch<React.SetStateAction<number>>,
	currentCategory: TypeQuestion,
	currentQuestionIndex: number,
	allQuestions: Record<TypeQuestion, Question[]>,
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
		if (
			currentCategory &&
			currentQuestionIndex < allQuestions[currentCategory].length - 1
		) {
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
