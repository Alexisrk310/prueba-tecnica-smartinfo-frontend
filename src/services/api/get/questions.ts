export const question = async (pathname: string) => {
	const loginEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/questions?category=${pathname}`;
	try {
		const response = await fetch(loginEndpoint);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error: any) {
		throw new Error(error.message || 'No hay preguntas.');
	}
};
