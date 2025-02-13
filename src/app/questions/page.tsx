'use client';
import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useRouter } from 'next/navigation';
import { TypeQuestion } from '@/types/typeQuestionsType';

const QuestionPage = () => {
	const router = useRouter();
	const [selectQuizze, setSelectQuizze] = useState<TypeQuestion>('');
	const handleSelectQuiz = (value: string) => {
		setSelectQuizze(value as TypeQuestion);
	};
	const handleSubmit = () => {
		router.push(`/questions/${selectQuizze}`);
	};
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 5,
				height: '100vh',
				padding: 3, // Añadir padding para evitar que el contenido toque los bordes en móviles
			}}>
			{/* Contenedor para los Box (matemáticas, sociales, física, artística) */}
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, // 1 columna en móviles, 2 en pantallas más grandes
					gap: 5,
					width: '100%', // Ocupar el ancho disponible
					maxWidth: '800px', // Limitar el ancho máximo
				}}>
				{/* Box de Matemáticas */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						paddingX: { xs: 2, sm: 10 }, // Menor padding en móviles
						height: { xs: '120px', sm: '150px' }, // Altura más pequeña en móviles
						minWidth: '200px', // Tamaño mínimo
						border: '1px solid #000',
						backgroundImage:
							"url('https://epe.brightspotcdn.com/02/ac/a5498e524778b568fea054141968/math-102023-1281244731-01.jpg')",
						backgroundPosition: 'center',
						cursor: 'pointer',
						backgroundSize: 'cover',
						transform: selectQuizze === 'math' ? 'scale(1.1)' : 'scale(1)',
						transition: 'transform 0.3s ease', // Suavizar la animación
						'&:hover': {
							transform: 'scale(1.1)',
						},
					}}
					onClick={() => handleSelectQuiz('math')}>
					<CalculateIcon
						sx={{
							fontSize: 40,
							position: 'relative',
							zIndex: 2,
						}}
					/>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Tamaño de fuente responsivo
						}}
						component="h1"
						variant="h4">
						MATEMATICAS
					</Typography>
				</Box>

				{/* Box de Sociales */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						paddingX: { xs: 2, sm: 10 },
						height: { xs: '120px', sm: '150px' },
						minWidth: '200px',
						border: '1px solid #000',
						backgroundImage:
							"url('https://st3.depositphotos.com/1526816/13612/v/450/depositphotos_136127136-stock-illustration-book-and-the-world-on.jpg')",
						backgroundPosition: 'center',
						cursor: 'pointer',
						backgroundSize: 'cover',
						transform: selectQuizze === 'social' ? 'scale(1.1)' : 'scale(1)',
						transition: 'transform 0.3s ease',
						'&:hover': {
							transform: 'scale(1.1)',
						},
					}}
					onClick={() => handleSelectQuiz('social')}>
					<CalculateIcon
						sx={{
							fontSize: 40,
							position: 'relative',
							zIndex: 2,
						}}
					/>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: { xs: '1.25rem', sm: '1.5rem' },
						}}
						component="h1"
						variant="h4">
						SOCIALES
					</Typography>
				</Box>

				{/* Box de Física */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						paddingX: { xs: 2, sm: 10 },
						height: { xs: '120px', sm: '150px' },
						minWidth: '200px',
						border: '1px solid #000',
						backgroundImage:
							"url('https://img.freepik.com/vector-gratis/cientifico_1308-6633.jpg')",
						backgroundPosition: 'center',
						cursor: 'pointer',
						backgroundSize: 'cover',
						transform: selectQuizze === 'physics' ? 'scale(1.1)' : 'scale(1)',
						transition: 'transform 0.3s ease',
						'&:hover': {
							transform: 'scale(1.1)',
						},
					}}
					onClick={() => handleSelectQuiz('physics')}>
					<CalculateIcon
						sx={{
							fontSize: 40,
							position: 'relative',
							zIndex: 2,
						}}
					/>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: { xs: '1.25rem', sm: '1.5rem' },
						}}
						component="h1"
						variant="h4">
						FISICA
					</Typography>
				</Box>

				{/* Box de Artística */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						paddingX: { xs: 2, sm: 10 },
						height: { xs: '120px', sm: '150px' },
						minWidth: '200px',
						border: '1px solid #000',
						backgroundImage:
							"url('https://img.freepik.com/vector-premium/concepto-imaginacion-e-inspiracion-educacion-artistica-leccion-dibujo-proceso-creativo_361213-915.jpg?semt=ais_hybrid')",
						backgroundPosition: 'center',
						cursor: 'pointer',
						backgroundSize: 'cover',
						transform: selectQuizze === 'art' ? 'scale(1.1)' : 'scale(1)',
						transition: 'transform 0.3s ease',
						'&:hover': {
							transform: 'scale(1.1)',
						},
					}}
					onClick={() => handleSelectQuiz('art')}>
					<CalculateIcon
						sx={{
							fontSize: 40,
							position: 'relative',
							zIndex: 2,
						}}
					/>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: { xs: '1.25rem', sm: '1.5rem' },
						}}
						component="h1"
						variant="h4">
						ARTISTICA
					</Typography>
				</Box>
			</Box>

			{/* Botón de Elegir */}
			<Box
				sx={{ width: '100%', maxWidth: '500px', textAlign: 'center', mt: 3 }}>
				<Button
					sx={{
						width: '100%',
						background: '#427b3e',
						color: '#FFFF',
						fontWeight: 'bold',
						'&:hover': {
							background: '#5aa256',
						},
					}}
					disabled={!selectQuizze}
					onClick={handleSubmit}>
					ELEGIR
				</Button>
			</Box>
		</Container>
	);
};
export default QuestionPage;
