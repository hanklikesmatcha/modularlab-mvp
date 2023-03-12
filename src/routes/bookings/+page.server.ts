import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  return {
    bookings: [
      {
        id: 1,
        supplierId: 1,
        supplierName: "Pien Ri Ltd",
        steps:{
            file: true,
            evaluation: {

            },
            confirmedProcess: {
              
            },
            processing: 'process',
            shipment: {}
        },
      },
    ]
  }
}) satisfies PageServerLoad;