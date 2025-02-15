export const postScore = async (score: number, pathname: string) => {
	const loginEndpoint = `http://localhost:4000/${pathname}`;
	try {
		const response = await fetch(loginEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				access_token: localStorage.getItem('access_token') || '',
			},
			body: JSON.stringify(score),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		throw new Error(error.message || 'Error al enviar tu puntaje.');
	}
};
