import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const post: RequestHandler<Locals, FormData, {}> = async (request) => {
	const email = request.body.get('email');
	const password = request.body.get('password');

	const response = await api(request, '/signup', {
		email,
		password
	});

	// if (response.status === 404) {
	// 	return {
	// 		body: {}
	// 	};
	// }

	return response;
};
