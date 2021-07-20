import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
config();
const supabase = createClient(process.env['SUPABASE_URL'], process.env['SUPABASE_ANON_KEY']);

export const get: RequestHandler<Locals, {}, {}> = async ({ path, params }) => {
	const {
		data: [data],
		error: slugErr
	} = await supabase.from('ipaSlugMap').select('item_id').eq('slug', params.ipaName);

	if (!data) {
		return {
			status: 404
		};
	}
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
		.eq('id', data.item_id);

	if (!ipa) {
		return {
			status: 404
		};
	}

	return { status: 200, body: { ipa } };
};
