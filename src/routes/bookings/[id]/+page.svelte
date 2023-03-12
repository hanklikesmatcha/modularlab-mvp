<script lang="ts">
    import type { PageData } from './$types';
    import {captaliseWord} from '../../../lib/utils/formatting';
    export let data: PageData;
    import Breadcrumb from '$lib/components/breadcrumb.svelte';
    import { page } from '$app/stores';

    const toggleForManufacturingProgress = () => {
        switch(data.booking.steps.processing) {
            case 'finished': {
                return '✅';
            }
            case 'process': {
                return '🔨'
            }
            default: {
                return '⚙️'
            }
        }
    };
</script>

<div class='grid grid-col-3 gap-4 tems-center'>
  <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">Booking - {data.booking.id}</h1>
  <div class='col-start-2 col-end3'>
    <Breadcrumb path={$page.url.href} />
  </div>
</div>
<div class='grid justify-center'>
  <div class="card card-side bg-base-100 shadow-xl max-w-screen-md">
    <figure class="m-6 w-60 rounded-lg"><img src="/images/suppliers/supplier-1.jpg" alt="supplier" /></figure>
    <div class="card-body">
      <div class='flex flex-row justify-between'>
        <h2 class="card-title">{data.booking.supplierName} - {data.booking.id}</h2>
        <div class="radial-progress" style="--value:70;  --thickness: 6px">70%</div>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-fixed w-full">
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
                        <figure class="m-6 w-full rounded-sm"><img src="/images/suppliers/supplier-1.jpg" alt="supplier" /></figure>
                    </div>
                    </div>
              </td>
            </tr>
            <tr>
              <td>Evaluation</td>
              <td>
                <div class='flex flex-row'>
                    {#each data.booking.steps.evaluation as row }
                        <span class="badge badge-outline">{row}</span>
                    {/each}
                </div>
              </td>
            </tr>
            <tr>
              <td>Confirmation</td>
              <td>
                <div class='flex flex-row'>
                    {#each data.booking.steps.confirmedProcess as row }
                        <span class="badge badge-outline">{row}</span>
                    {/each}
                </div>
              </td>
            </tr>
            <tr>
              <td>Manufacturing</td>
              <td>{toggleForManufacturingProgress()}</td>
            </tr>
            <tr>
              <td>Shipment</td>
              <td>
                <ol class="flex flex-col ">
                    {#each Object.entries(data.booking.steps.shipment) as [key, value] }
                            {#if key === 'destination' }
                                    <li>{captaliseWord(key)} - </li>
                                {#each Object.entries(value) as [_, addressLine] }
                                    <ul>
                                        <li>{addressLine}</li>
                                    </ul>
                                {/each}
                            {:else}
                                <li>{captaliseWord(key)} - {value}</li>
                            {/if}
                    {/each}
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-actions justify-end">
        <a href='mailto:hank.likes.matcha@gmail.com' class="btn btn-info btn-circle">✉️</a>
      </div>
    </div>
  </div>
</div>