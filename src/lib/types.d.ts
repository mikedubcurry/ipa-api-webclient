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
