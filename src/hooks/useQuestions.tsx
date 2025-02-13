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
	const handleAnswer = (isCorrect: boolean) => {
		if (isCorrect) {
			setScore((prev: number) => prev + 10);
		}
		nextQuestion();
	};

	const nextQuestion = () => {
		if (
			currentCategory &&
			currentQuestionIndex < allQuestions[currentCategory].length - 1
		) {
			setCurrentQuestionIndex((prev: number) => prev + 1);
		} else {
			setShowScore(true);
		}
	};

	const startQuiz = () => {
		setQuizStarted(true);
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowScore(false);
	};
	return { handleAnswer, nextQuestion, startQuiz };
};
export default useQuestions;
