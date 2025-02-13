
import { userAuth } from '@/interfaces/user.Interface';
import { useState, ChangeEvent } from 'react';

export const useAuthForm = (initialState: userAuth) => {
	const [formAuth, setFormAuth] = useState(initialState);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		return setFormAuth({
			...formAuth,
			[name]: value,
		});
	};

	return { handleChange, formAuth, setFormAuth };
};