'use client';
import React, { FormEvent, useState } from 'react';
import {
	TextField,
	Button,
	Container,
	Typography,
	Box,
	Link,
} from '@mui/material';
import {
	Lock as LockIcon,
	PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useAuthForm } from '@/hooks/useForm';

const LoginForm = () => {
	const router = useRouter();
	const { formAuth, setFormAuth, handleChange } = useAuthForm({
		name: 'alexis',
		email: 'alexis@gmail.com',
		password: 'alexis123',
		confirmPassword: 'alexis123',
	});
	const [isRegister, setIsRegister] = useState(false);
	const [passwordError, setPasswordError] = useState(''); // Estado para manejar errores de contraseña

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormAuth({
			...formAuth,
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

	const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (formAuth.password !== formAuth.confirmPassword) {
			setPasswordError('Las contraseñas no coinciden');
			return;
		}

		setPasswordError('');
		setFormAuth({
			...formAuth,
			name: formAuth.name,
			email: formAuth.email,
			password: formAuth.password,
		});
		if (formAuth) {
			router.push('/questions');
		} else {
			console.log('Invalid credentials');
		}
		console.log('Registro exitoso:', formAuth);
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
				{isRegister ? (
					<>
						<PersonAddIcon sx={{ fontSize: 40, color: '#427b3e' }} />
						<Typography component="h1" variant="h5">
							Registro
						</Typography>
						<Box
							component="form"
							onSubmit={handleRegisterSubmit}
							sx={{ mt: 3 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								label="Nombre"
								name="name"
								autoComplete="name"
								autoFocus
								value={formAuth.name}
								onChange={handleChange}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								label="Correo Electrónico"
								name="email"
								autoComplete="email"
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
								autoComplete="new-password"
								value={formAuth.password}
								onChange={handleChange}
								error={!!passwordError}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="confirmPassword"
								label="Confirmar Contraseña"
								type="password"
								autoComplete="new-password"
								value={formAuth.confirmPassword}
								onChange={handleChange}
								error={!!passwordError}
								helperText={passwordError}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ background: '#78b474', mt: 3, mb: 2 }}>
								Registrarse
							</Button>
							<Typography variant="body2" sx={{ mt: 2 }}>
								¿Ya tienes una cuenta?{' '}
								<Typography
									component="span"
									sx={{
										color: 'primary.main',
										textDecoration: 'none',
										cursor: 'pointer',
										'&:hover': {
											textDecoration: 'underline',
										},
									}}
									onClick={() => setIsRegister(false)}>
									Inicia Sesión
								</Typography>
							</Typography>
						</Box>
					</>
				) : (
					<>
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
							<Typography variant="body2" sx={{ mt: 2 }}>
								¿No tienes una cuenta?{' '}
								<Typography
									component="span"
									sx={{
										color: 'primary.main',
										textDecoration: 'none',
										cursor: 'pointer',
										'&:hover': {
											textDecoration: 'underline',
										},
									}}
									onClick={() => setIsRegister(true)}>
									Regístrate
								</Typography>
							</Typography>
						</Box>
					</>
				)}
			</Box>
		</Container>
	);
};

export default LoginForm;
