import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {

  return {
    booking: {
        id: 1,
        supplierId: 1,
        supplierName: "Pien Ri Ltd",
        steps:{
            file: true,
            evaluation: ['milling', 'polishing', 'anodic oxidation'],
            confirmedProcess: ['milling', 'polishing'],
            processing: 'finished',
            shipment: {
                deliveryDate: '2023-03-04',
                origin: 'Taiwan',
                destination: {
                    addressLine1: '111 Customhouse Quay',
                    addressLine2: '',
                    suburb: 'Wellington Central',
                    city: 'Wellington',
                    postcode: '6011',
                    countryCode: 'NZ'
                },
            }
        },
      },
  }
}) satisfies PageServerLoad;