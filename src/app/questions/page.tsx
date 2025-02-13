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
				padding: 3,
			}}>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
					gap: 5,
					width: '100%',
					maxWidth: '800px',
				}}>
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
							"url('https://epe.brightspotcdn.com/02/ac/a5498e524778b568fea054141968/math-102023-1281244731-01.jpg')",
						backgroundPosition: 'center',
						cursor: 'pointer',
						backgroundSize: 'cover',
						transform: selectQuizze === 'math' ? 'scale(1.1)' : 'scale(1)',
						transition: 'transform 0.3s ease',
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
							fontSize: { xs: '1.25rem', sm: '1.5rem' },
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

			<Box
				sx={{
					display: 'flex',
					width: '100%',
					maxWidth: '500px',
					textAlign: 'center',
					mt: 3,
					gap: 2,
				}}>
				<Button
					sx={{
						width: '100%',
						background: '#427b3e',
						color: '#FFFFFF',
						fontWeight: 'bold',
						'&:hover': {
							background: '#5aa256',
						},
					}}
					disabled={!selectQuizze}
					onClick={handleSubmit}>
					ELEGIR
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => router.back()}
					sx={{ backgroundColor: 'red', color: '#fff', width: '100%' }}>
					CERRAR SESIÓN
				</Button>
			</Box>
		</Container>
	);
};
export default QuestionPage;
