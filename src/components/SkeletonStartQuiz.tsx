import { Skeleton, Box } from '@mui/material';

const SkeletonStartQuiz = () => {
	return (
		<Box
			sx={{
				textAlign: 'center',
				padding: '20px',
				background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
			}}>
			<Skeleton
				variant="text"
				width="60%"
				height={60}
				sx={{ mx: 'auto', bgcolor: '#a5d6a7' }}
			/>

			<Skeleton
				variant="text"
				width="80%"
				height={40}
				sx={{ mx: 'auto', my: 2, bgcolor: '#a5d6a7' }}
			/>

			<Skeleton
				variant="rectangular"
				width={200}
				height={50}
				sx={{ mx: 'auto', mt: 4, bgcolor: '#a5d6a7' }}
			/>
		</Box>
	);
};

export default SkeletonStartQuiz;
