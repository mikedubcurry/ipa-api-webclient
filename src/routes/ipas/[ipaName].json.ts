import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
config();
const supabase = createClient(process.env['SUPABASE_URL'], process.env['SUPABASE_ANON_KEY']);

export const get: RequestHandler<Locals, {}, {}> = async ({ path, params }) => {
	console.log(params);

	const {
		data: [{ item_id }],
		error
	} = await supabase.from('ipaSlugMap').select('item_id').eq('slug', params.ipaName);
	console.log(item_id);
	const {
		data: [ipa],
		error: ipaErr
	} = await supabase
		.from('ipas')
		.select(
			`*,
  brewer (
    id, name, location
  )`
		)
		.eq('id', item_id);

	console.log(ipa);

	return { status: 200, body: { ipa } };
};
