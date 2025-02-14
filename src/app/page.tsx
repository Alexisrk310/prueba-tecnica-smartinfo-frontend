'use client';
import React, { FormEvent, useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import {
	Lock as LockIcon,
	PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useAuthForm } from '@/hooks/useForm';
import { loginAuth } from '@/services/api/post/Auth'; // Importa la función loginAuth
import { userAuth } from '@/interfaces/user.Interface'; // Asegúrate de importar la interfaz correcta

const LoginForm = () => {
	const router = useRouter();
	const { formAuth, setFormAuth, handleChange } = useAuthForm({
		username: 'alexis',
		email: 'alexis@gmail.com',
		password: 'alexis123',
		confirmPassword: 'alexis123',
	});
	const [isRegister, setIsRegister] = useState(false);
	const [passwordError, setPasswordError] = useState('');
	const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar errores

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validar campos antes de enviar
		if (!formAuth.email || !formAuth.password) {
			setErrorMessage('Por favor, completa todos los campos.');
			return;
		}

		try {
			// Llamar a la función loginAuth para el login
			const credentials: Partial<userAuth> = {
				email: formAuth.email,
				password: formAuth.password,
			};
			const data = await loginAuth(credentials, 'login');

			if (data && data.access_token) {
				// Guardar el token en localStorage
				localStorage.setItem('access_token', data.access_token);
				// Redirigir al usuario a la página de preguntas
				router.push('/questions');
			} else {
				setErrorMessage('Credenciales inválidas.');
			}
		} catch (error: any) {
			setErrorMessage(error.message || 'Error durante el login.');
		}
	};

	const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validar que las contraseñas coincidan
		if (formAuth.password !== formAuth.confirmPassword) {
			setPasswordError('Las contraseñas no coinciden');
			return;
		}
		setPasswordError('');

		// Validar campos antes de enviar
		if (!formAuth.username || !formAuth.email || !formAuth.password) {
			setErrorMessage('Por favor, completa todos los campos.');
			return;
		}

		try {
			// Llamar a la función loginAuth para el registro
			const credentials: Partial<userAuth> = {
				username: formAuth.username,
				email: formAuth.email,
				password: formAuth.password,
			};
			const data = await loginAuth(credentials, 'register');

			if (data) {
				// Registro exitoso, redirigir al login
				setErrorMessage(''); // Limpiar mensajes de error
				setIsRegister(false); // Cambiar a la vista de login
				alert('Registro exitoso. Por favor, inicia sesión.'); // Mostrar mensaje de éxito
			} else {
				setErrorMessage('Error durante el registro.');
			}
		} catch (error: any) {
			setErrorMessage(error.message || 'Error durante el registro.');
		}
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
						{errorMessage && (
							<Typography variant="body2" sx={{ color: 'red', mt: 2 }}>
								{errorMessage}
							</Typography>
						)}
						<Box
							component="form"
							onSubmit={handleRegisterSubmit}
							sx={{ mt: 3 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								label="Nombre"
								name="username"
								autoComplete="name"
								autoFocus
								value={formAuth.username}
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
						{errorMessage && (
							<Typography variant="body2" sx={{ color: 'red', mt: 2 }}>
								{errorMessage}
							</Typography>
						)}
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
