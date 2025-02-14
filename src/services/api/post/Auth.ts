import { userAuth } from '@/interfaces/user.Interface';

export const loginAuth = async (
	credentials: Partial<userAuth>,
	pathname: string
) => {
	const loginEndpoint = `http://localhost:4000/auth/${pathname}`;
	try {
		const response = await fetch(loginEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		throw new Error(error.message || 'Error durante el login.');
	}
};
