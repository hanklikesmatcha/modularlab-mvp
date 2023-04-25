import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	const { data: suppliers } = await supabase
		.from('suppliers')
		.select('*')

  let suppliersWithUrls

  if (suppliers?.length !== 0) {
    try{
      suppliersWithUrls = suppliers?.map((supplier) => {
        const { data } = supabase
        .storage
        .from('thumbnails-for-suppliers')
        .getPublicUrl(`${supplier.id}.jpeg`)

        supplier.thumbnail = data.publicUrl.toString()
        return supplier
      })
    }
    catch (err) {
      throw error(500, {message: "Error downloading image"});
    }
  }

	return { user: session.user, suppliers : suppliersWithUrls ?? [] }; 
}) satisfies PageServerLoad;