import type { Request } from '@sveltejs/kit';
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config();
const SUPABASE_URL = process.env['SUPABASE_URL'];
const SUPABASE_ANON_KEY = process.env['SUPABASE_ANON_KEY'];
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function api(
	request: Request<{}>,
	resource: string,
	data?: { email: string; password: string }
) {
	const { email, password } = data;
	let { user, error } = await supabase.auth.signUp({
		email,
		password
	});

	if (!error) {
		return {
			status: 200,
			body: user
		};
	}
	return {
		status: 400,
		body: error
	};
}
