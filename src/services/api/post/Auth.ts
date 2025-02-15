import { userAuth } from '@/interfaces/user.Interface';

export const loginAuth = async (
	credentials: Partial<userAuth>,
	pathname: string
) => {
	const loginEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/auth/${pathname}`;
	console.log(loginEndpoint);
	console.log(process.env);

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
