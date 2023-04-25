import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession }, params }) => {
  const session = getSession()

  if (!session) {
    throw redirect(303, '/');
  }
  try{
    const { data: booking } = await supabase
    .from('bookings')
    .select('*, suppliers(*)')
    .eq('id', params.id)
    .single()

    if (!booking) {
      throw error(404, {message: "Booking not found"})
    }
    return {
      session: session,
      booking
    }
  } catch (err) {
    throw error(500, {message: "Error happened while fetching booking"})
  }
}) satisfies PageServerLoad;
