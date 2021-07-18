import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const get: RequestHandler<Locals, FormData, {}> = async (request) => {

	const response = await api(request, '/ipas/liked', );

	// if (response.status === 404) {
	// 	return {
	// 		body: {}
	// 	};
	// }

	return response;
};
