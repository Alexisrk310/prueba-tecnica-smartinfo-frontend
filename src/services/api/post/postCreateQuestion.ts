export const postCreateQuestion = async (
	credentials: {
		category: string;
		question: string;
		options: string[];
		correctAnswer: string;
	},
	pathname: string
) => {
	const loginEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/${pathname}`;
	try {
		const response = await fetch(loginEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				access_token: localStorage.getItem('access_token') || '',
			},
			body: JSON.stringify(credentials),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		throw new Error(error.message || 'Error al enviar tu pregunta.');
	}
};
