import cookie from 'cookie';
import { config } from 'dotenv';
import { v4 as uuid } from '@lukeed/uuid';
import type { GetSession, Handle } from '@sveltejs/kit';
import type { Locals, UnAuthSession, UserSession } from '$lib/types';
import { createClient } from '@supabase/supabase-js';
config();

const supabase = createClient(process.env['SUPABASE_URL'], process.env['SUPABASE_ANON_KEY']);

export const handle: Handle<Locals> = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');

	if (cookies.userid) {
		const { data: users, error } = await supabase
			.from('users')
			.select('username')
			.eq('id', cookies.userid);
		// .eq('id', cookies.userid);
		console.log('username', users, error);

		request.locals.username = users[0].username;
	}

	request.locals.userid = cookies.userid;

	const response = await resolve(request);

	response.headers['set-cookie'] = `userid=${request.locals.userid || ''}; Path=/; HttpOnly`;

	return response;
};

export const getSession: GetSession<Locals> = async ({ locals }): Promise<UserSession | UnAuthSession> => {
	const userid = locals.userid;
	if (userid) {
		return {
			authenticated: true,
			userid: locals.userid,
			username: locals.username
		};
	} else {
		return {
			authenticated: false
		};
	}
};
