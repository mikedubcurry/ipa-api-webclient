export interface Locals {
	userid: string;
	username: string;
}

export interface UserSession {
	authenticated: true;
	userid: string;
	username: string;
}

export interface UnAuthSession {
	authenticated: false;
}

export type IPA = {
	id: string;
	name: string;
	description: string;
	isAlcoholic: boolean;
	alcohol?: number;
	brewer: Brewer;
};

export type Brewer = {
	id: string;
	name: string;
	location: string;
};
