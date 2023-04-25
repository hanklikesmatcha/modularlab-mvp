import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	const { data: bookings } = await supabase
		.from('bookings')
		.select('*, suppliers(*)')
		.eq('user_id', session.user.id);

	return { user: session.user, bookings: bookings ?? [] };
}) satisfies PageServerLoad;
