'use client';
import React, { FormEvent } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Lock as LockIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useAuthForm } from '@/hooks/useForm';

const LoginForm = () => {
	const router = useRouter();
	const { formAuth, setFormAuth, handleChange } = useAuthForm({
		email: 'alexis@gmail.com',
		password: 'alexis123',
	});
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormAuth({
			email: formAuth.email,
			password: formAuth.password,
		});
		if (formAuth) {
			router.push('/questions');
		} else {
			console.log('Invalid credentials');
		}

		console.log('Email:', formAuth.email);
		console.log('Password:', formAuth.password);
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
				<LockIcon sx={{ fontSize: 40, color: '#427b3e' }} />
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
						value={formAuth.email}
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
						value={formAuth.password}
						onChange={handleChange}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ background: '#78b474', mt: 3, mb: 2 }}>
						Iniciar Sesión
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default LoginForm;
