import { Question } from '@/interfaces/questionsProps';
import { TypeQuestion } from '@/types/typeQuestionsType';
export const allQuestions: Record<TypeQuestion, Question[]> = {
	math: [
		{
			question: '¿Cuánto es 2 + 2?',
			options: ['3', '4', '5', '6'],
			correctAnswer: '4',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Math',
		},
		{
			question: '¿Cuánto es 5 * 3?',
			options: ['10', '15', '20', '25'],
			correctAnswer: '15',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Math',
		},
		{
			question: '¿Cuál es la raíz cuadrada de 64?',
			options: ['6', '8', '10', '12'],
			correctAnswer: '8',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Math',
		},
		{
			question: '¿Cuánto es 12 / 4?',
			options: ['2', '3', '4', '6'],
			correctAnswer: '3',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Math',
		},
		{
			question: '¿Cuánto es 7 al cuadrado?',
			options: ['49', '56', '42', '35'],
			correctAnswer: '49',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Math',
		},
	],
	art: [
		{
			question: '¿Quién pintó la Mona Lisa?',
			options: [
				'Vincent van Gogh',
				'Pablo Picasso',
				'Leonardo da Vinci',
				'Claude Monet',
			],
			correctAnswer: 'Leonardo da Vinci',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Art',
		},
		{
			question: '¿Qué artista es conocido por cortar su propia oreja?',
			options: [
				'Pablo Picasso',
				'Vincent van Gogh',
				'Salvador Dalí',
				'Claude Monet',
			],
			correctAnswer: 'Vincent van Gogh',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Art',
		},
		{
			question:
				'¿Qué movimiento artístico es conocido por usar formas geométricas?',
			options: ['Cubismo', 'Impresionismo', 'Surrealismo', 'Expresionismo'],
			correctAnswer: 'Cubismo',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Art',
		},
		{
			question: '¿Quién pintó "La noche estrellada"?',
			options: [
				'Pablo Picasso',
				'Vincent van Gogh',
				'Salvador Dalí',
				'Claude Monet',
			],
			correctAnswer: 'Vincent van Gogh',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Art',
		},
		{
			question:
				'¿Qué artista es conocido por sus obras de arte pop como "Marilyn Diptych"?',
			options: [
				'Andy Warhol',
				'Roy Lichtenstein',
				'Jackson Pollock',
				'Mark Rothko',
			],
			correctAnswer: 'Andy Warhol',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Art',
		},
	],
	physics: [
		{
			question: '¿Cuál es la unidad de medida de la fuerza?',
			options: ['Newton', 'Joule', 'Watt', 'Pascal'],
			correctAnswer: 'Newton',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Physics',
		},
		{
			question: '¿Quién formuló las leyes del movimiento?',
			options: [
				'Albert Einstein',
				'Isaac Newton',
				'Galileo Galilei',
				'Nikola Tesla',
			],
			correctAnswer: 'Isaac Newton',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Physics',
		},
		{
			question: '¿Qué es la velocidad de la luz en el vacío?',
			options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
			correctAnswer: '300,000 km/s',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Physics',
		},
		{
			question: '¿Qué partícula subatómica tiene carga positiva?',
			options: ['Electrón', 'Protón', 'Neutrón', 'Fotón'],
			correctAnswer: 'Protón',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Physics',
		},
		{
			question:
				'¿Qué ley física establece que "a toda acción hay una reacción igual y opuesta"?',
			options: [
				'Primera ley de Newton',
				'Segunda ley de Newton',
				'Tercera ley de Newton',
				'Ley de la gravitación universal',
			],
			correctAnswer: 'Tercera ley de Newton',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Physics',
		},
	],
	social: [
		{
			question: '¿Quién fue el primer presidente de los Estados Unidos?',
			options: [
				'Thomas Jefferson',
				'Abraham Lincoln',
				'George Washington',
				'John Adams',
			],
			correctAnswer: 'George Washington',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Social',
		},
		{
			question: '¿En qué año comenzó la Segunda Guerra Mundial?',
			options: ['1935', '1939', '1941', '1945'],
			correctAnswer: '1939',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Social',
		},
		{
			question: '¿Cuál es la capital de Francia?',
			options: ['Madrid', 'París', 'Berlín', 'Roma'],
			correctAnswer: 'París',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Social',
		},
		{
			question: '¿Quién escribió "El manifiesto comunista"?',
			options: [
				'Karl Marx',
				'Vladimir Lenin',
				'Friedrich Engels',
				'Leon Trotsky',
			],
			correctAnswer: 'Karl Marx',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Social',
		},
		{
			question: '¿En qué año cayó el Muro de Berlín?',
			options: ['1985', '1989', '1991', '1995'],
			correctAnswer: '1989',
			imageUrl: 'https://via.placeholder.com/600x400.png?text=Social',
		},
	],
	'': [],
};
