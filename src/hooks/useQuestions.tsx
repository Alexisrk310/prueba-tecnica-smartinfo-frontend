import React from 'react';
import { Question } from '@/interfaces/questionsProps';

const useQuestions = (
	setScore: React.Dispatch<React.SetStateAction<number>>,
	currentQuestionIndex: number,
	questions: Question[],
	setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>,
	setShowScore: React.Dispatch<React.SetStateAction<boolean>>,
	setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const handleAnswer = (isCorrect: boolean) => {
		if (isCorrect) {
			setScore((prev: number) => prev + 10);
		}
		return isCorrect;
	};

	const nextQuestion = () => {
		if (questions && currentQuestionIndex < questions.length - 1) {
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
