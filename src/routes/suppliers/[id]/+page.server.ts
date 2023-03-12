
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  if (typeof params.id === 'string') {
    return {
      id: params.id,
      name: "Pien Ri Ltd",
      type: "Machining",
      description: "Specialised in cutting metal with 0.05 mm margin",
    };
  }
 
  throw error(404, 'Not found');
}) satisfies PageServerLoad;