import React from 'react';

interface QuizPageProps {
	params: {
		quizzes: string;
	};
}

export default async function QuizzesPage({ params }: QuizPageProps) {
	const Params = await params;
	const quizzes = Params.quizzes;

	console.log(quizzes);

	return (
		<div>
			<h1>Quizzes: {quizzes}</h1>
		</div>
	);
}
