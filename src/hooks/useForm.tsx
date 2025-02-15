import { userAuth } from '@/interfaces/user.Interface';
import { useState, ChangeEvent } from 'react';

export const useAuthForm = (initialState: userAuth) => {
	const [formAuth, setFormAuth] = useState(initialState);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;

		setFormAuth((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	return { handleChange, formAuth, setFormAuth };
};
