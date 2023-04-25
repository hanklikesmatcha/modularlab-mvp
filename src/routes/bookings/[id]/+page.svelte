<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import Breadcrumb from '$lib/components/breadcrumb.svelte';
    import { page } from '$app/stores';
    let { supabase, session, booking } = data;

    const toggleForManufacturingProgress = () => {
        switch(booking?.status) {
            case 'finished': {
                return '✅ Done';
            }
            case 'manufacturing': {
                return '🔨WIP'
            }
            default: {
                return '⚙️ Pending'
            }
        }
    };
</script>

<div class='grid grid-col-3 gap-4'>
  <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">Booking - {booking.id}</h1>
  <div class='col-start-2 col-end3'>
    <Breadcrumb path={$page.url.href} />
  </div>
</div>
<div class='grid justify-center'>
  <div class="card card-side bg-base-100 shadow-xl max-w-screen-md">
    <div class="card-body">
      <div class='flex flex-row justify-between'>
        <h2 class="card-title">{booking.suppliers.name} - {new Date(booking.created_at).toLocaleDateString()}</h2>
        <div class="radial-progress" style="--value:0;  --thickness: 6px">0%</div>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-auto w-full">
          <tbody class='text-base'>
            <tr>
              <td>
                Drawing
              </td>
              <td>
                <label for='drawing-modal' class="btn btn-primary btn-xs btn-outline btn-bg-neutral">Preview</label>
                <input type="checkbox" id="drawing-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                    <div class="flex justify-center  modal-box">
                        <label for="drawing-modal" class="btn btn-sm btn-circle btn-outline border-hidden absolute right-2 top-2">✕</label>
                        {#if booking.fire_url} 
                          <figure class="m-6 w-full rounded-sm"><img src={booking.file_url} alt="supplier" /></figure>
                        {:else}
                            <p class='text-center'>No drawing available</p>
                        {/if}
                    </div>
                    </div>
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{toggleForManufacturingProgress()}</td>
            </tr>
            <tr class="w-auto">
              <td>Details</td>
              <td class="whitespace-normal break-words">
                {booking.suppliers.description}
              </td>
            </tr>
            <tr>
              <td>Notes for the manufacturer</td>
              <td>{booking.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>