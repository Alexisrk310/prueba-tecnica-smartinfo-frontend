export interface userAuth {
	username?: string | undefined;
	isAdmin?: boolean;
	email: string | undefined;
	password: string | undefined;
	confirmPassword?: string;
}
export interface User {
	id: string;
	name: string;
	score: number;
}