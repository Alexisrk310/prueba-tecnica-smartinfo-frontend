'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Lock as LockIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
	const router = useRouter();
	const [inputValue, setInputValue] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push('/questions');
		console.log('Email:', inputValue.email);
		console.log('Password:', inputValue.password);
	};
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue({
			...inputValue,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Container maxWidth="xs">
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '80vh',
				}}>
				<LockIcon sx={{ fontSize: 40, color: 'primary.main' }} />
				<Typography component="h1" variant="h5">
					Iniciar Sesión
				</Typography>
				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Correo Electrónico"
						name="email"
						autoComplete="email"
						autoFocus
						value={inputValue.email}
						onChange={handleChange}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Contraseña"
						type="password"
						autoComplete="current-password"
						value={inputValue.password}
						onChange={handleChange}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>
						Iniciar Sesión
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default LoginForm;
