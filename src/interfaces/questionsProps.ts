
export interface Question {
	question: string;
	options: string[];
	correctAnswer: string;
	imageUrl?: string;
}
export interface QuestionCardProps {
	question: string;
	options: string[];
	correctAnswer: string;
	onAnswer: (isCorrect: boolean) => void;
	onTimeUp: () => void;
}