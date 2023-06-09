import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	const { data: profile } = await supabase
		.from('users')
		.select(`username, full_name, website, avatar_url`)
		.eq('id', session.user.id)
		.single();

	return { session, profile };
}) satisfies PageServerLoad;

export const actions = {
	update: async ({ request, locals: { supabase, getSession } }) => {
		const formData = await request.formData();
		const fullName = formData.get('fullName') as string;
		const username = formData.get('username') as string;
		const website = formData.get('website') as string;
		const avatarUrl = formData.get('avatarUrl') as string;

		const session = await getSession();

		const { error: supaBaseError } = await supabase.from('users').upsert({
			id: session?.user.id,
			full_name: fullName,
			username,
			website,
			avatar_url: avatarUrl,
			email: session?.user.email,
			updated_at: new Date()
		});

		if (supaBaseError) {
			return error(500, { message: supaBaseError.message });
		}

		return {
			fullName,
			username,
			website,
			avatarUrl
		};
	},
	signout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/');
		}
	}
} satisfies Actions;
