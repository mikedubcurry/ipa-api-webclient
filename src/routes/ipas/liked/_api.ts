import type { Request } from '@sveltejs/kit';
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import type { Locals } from '$lib/types';

config();
const SUPABASE_URL = process.env['SUPABASE_URL'];
const SUPABASE_ANON_KEY = process.env['SUPABASE_ANON_KEY'];
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function api(request: Request<Locals>, resource: string, data?: any) {
	console.log(request.locals.userid);
	if (request.locals.userid) {
		const { data: ipaIds, error } = await supabase
			.from('users')
			.select('ipas')
			.eq('id', request.locals.userid).limit(1);
		console.log(ipaIds);

		if (!error) {
			const ipas = await Promise.all(
				ipaIds[0].ipas.map(async (id) => {
					const { data: ipa, error } = await supabase
						.from('ipas')
						.select(
							`
        *,
        brewer (
          id, name, location
        )
      `
						)
						.eq('id', `${id}`);
					if (!error) {
						return ipa;
					} else {
						return error;
					}
				})
			);
			console.log(ipas);

			return {
				// status: 303,
				body: ipas.flat()
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
}
