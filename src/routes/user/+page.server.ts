import type { PageServerLoad } from './$types';
 
export const load = (async ({ params, parent }) => {
  const {user} = await parent();

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    paymentDetails: user.paymentDetails
  }
}) satisfies PageServerLoad;