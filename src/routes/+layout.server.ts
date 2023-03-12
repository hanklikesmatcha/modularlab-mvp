import { apiRouter } from '$lib/utils/api';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const url = apiRouter + `/users/4e5d8461-e6e3-4fac-875d-16e979e0562d`
  const res = await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json()
    });
    
  return {
    user: {
      firstName: res.name.split(' ').slice(0, 2),
      lastName: 'Chou',
      address: {
        addressLine1: '111 Customhouse Quay',
        addressLine2: '',
        suburb: 'Wellington Central',
        city: 'Wellington',
        postcode: '6011',
        countryCode: 'NZ'
      },
      paymentDetails: {
        method: 'credit card',
        cardNumber: '0000-0000-0000-0000',
        cardHolderName: 'Szu Han Chou',
        cardExpiryDate: '2030-03-04',
      }
    }
  }
}) satisfies LayoutServerLoad;