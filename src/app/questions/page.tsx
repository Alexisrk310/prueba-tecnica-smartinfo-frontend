'use client';
import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useRouter } from 'next/navigation';

const QuestionPage = () => {
	const router = useRouter();
	// router.push('/questions');
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
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				justifyContent: 'center',
				gap: 5,
			}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					paddingX: 10,
					height: '150px',
					border: '1px solid #000',
					backgroundImage:
						"url('https://epe.brightspotcdn.com/02/ac/a5498e524778b568fea054141968/math-102023-1281244731-01.jpg')",
					backgroundPosition: 'center',
					cursor: 'pointer',
					backgroundSize: 'cover',
					transform: selectQuizze === 'math' ? 'scale(1.1)' : 'scale(1)',
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
					}}
					component="h1"
					variant="h4">
					MATEMATICAS
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					paddingX: 10,
					height: '150px',
					border: '1px solid #000',
					backgroundImage:
						"url('https://st3.depositphotos.com/1526816/13612/v/450/depositphotos_136127136-stock-illustration-book-and-the-world-on.jpg')",
					backgroundPosition: 'center',
					cursor: 'pointer',
					backgroundSize: 'cover',
					transform: selectQuizze === 'social' ? 'scale(1.1)' : 'scale(1)',
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
					}}
					component="h1"
					variant="h4">
					SOCIALES
				</Typography>
			</Box>
			<Box
				sx={[
					{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						paddingX: 10,
						height: '150px',
						border: '1px solid #000',
						backgroundImage:
							"url('https://img.freepik.com/vector-gratis/cientifico_1308-6633.jpg')",
						backgroundPosition: 'center',
						cursor: 'pointer',
						backgroundSize: 'cover',
						transform: selectQuizze === 'physics' ? 'scale(1.1)' : 'scale(1)',
						'&:hover': {
							transform: 'scale(1.1)',
						},
					},
				]}
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
					}}
					component="h1"
					variant="h4">
					FISICA
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					paddingX: 10,
					height: '150px',
					border: '1px solid #000',
					backgroundImage:
						"url('https://img.freepik.com/vector-premium/concepto-imaginacion-e-inspiracion-educacion-artistica-leccion-dibujo-proceso-creativo_361213-915.jpg?semt=ais_hybrid')",
					backgroundPosition: 'center',
					cursor: 'pointer',
					backgroundSize: 'cover',
					transform: selectQuizze === 'art' ? 'scale(1.1)' : 'scale(1)',
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
					}}
					component="h1"
					variant="h4">
					ARTISTICA
				</Typography>
			</Box>
			<Box sx={{ width: '100%', gridColumn: '1 / -1', textAlign: 'center' }}>
				<Button
					sx={{
						width: '100%',
						background: 'green',
						color: '#FFFFFF',
						fontWeight: 'bold',
						'&:hover': {
							background: 'blue',
						},
					}}
					onClick={handleSubmit}>
					ELEGIR
				</Button>
			</Box>
		</Container>
	);
};
export default QuestionPage;
