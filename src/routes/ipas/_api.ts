import type { Request } from '@sveltejs/kit';
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import type { Locals } from '$lib/types';

config();
const SUPABASE_URL = process.env['SUPABASE_URL'];
const SUPABASE_ANON_KEY = process.env['SUPABASE_ANON_KEY'];
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function api(request: Request<Locals>, resource: string, data?: any) {
	const { data: ipas, error } = await supabase
		.from('ipas')
		.select(
			`
      *,
      brewer (
        id, name, location
      )
    `
		)
		.limit(5);

	if (!error) {
		return {
			// status: 303,
			body: ipas
			// headers: {
			// 	'set-cookie': `userid=${user.id}; Path=/; HttpOnly`
			// }
		};
	}
	return {
		status: 400,
		body: error
	};
}
