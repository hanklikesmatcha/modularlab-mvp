import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  return {
    suppliers: [
      {
        id: 1,
        name: "Pien Ri Ltd",
        type: "Machining",
        description: "Specialised in cutting metal with 0.05 mm margin",
      },
      {
        id: 2,
        name: "Caveman Workshop",
        type: "Machining",
        description: "Specialised in cutting metal with 0.05 mm margin",
      },
    ]
  }
}) satisfies PageServerLoad;