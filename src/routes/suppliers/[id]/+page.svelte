<script lang="ts">
    import type { PageData, ActionData } from './$types';
    import Breadcrumb from '$lib/components/breadcrumb.svelte';
    import { page } from '$app/stores';
	  import { enhance } from '$app/forms';
    export let data: PageData;
    export let form: ActionData;
    let { session, supplier } = data;
  	
    let loading = false;
    function handleSubmit() {
      loading = true;
      return async () => {
        loading = false;
        document.getElementById('confirm-modal').checked = false
      };
	}
  </script>
<div class='grid grid-col-3 gap-4 tems-center'>
  <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">Suppliers - {supplier?.name}</h1>
  <div class='col-start-2 col-end3'>
    <Breadcrumb path={$page.url.href} />
  </div>
</div>
{#if supplier }
<div class='grid justify-center'>
  <div class="card card-side bg-base-100 shadow-xl max-w-screen-md w-screen">
    <figure class="m-6 w-60 rounded-lg"><img src={supplier.thumbnail} alt="supplier" /></figure>
    <div class="card-body">
      <h2 class="card-title">{supplier.name}</h2>
      <p class='card'>The process of the order</p>
      <form action="?/upload" method="post" use:enhance={handleSubmit} enctype="multipart/form-data" class="form-control w-full">
        <ul class="steps steps-vertical">
          <li class="step step-secondary">
            Update your draft
              <ul>
                <input type="file" name="file" class="mx-12 file-input file-input-bordered file-input-xs" required/>
              </ul>
          </li>
          <li class="step step-secondary">Evaluation</li>
          <li class="step">Result</li>
          <li class="step">Confirmation</li>
          <li class="step">Manufacturing</li>
          <li class="step">Shipment</li>
        </ul>
        <div class="flex flex-col">
          <label for="notes">Notes for the manufacturer:</label>
          <textarea name="notes" id="notes"class="textarea textarea-secondary textarea-bordered textarea-md my-6" placeholder="Notes for the manufacturer" required></textarea>
        </div>
        <div class="card-actions justify-end">
          <label for='confirm-modal' class="btn btn-primary">Evaluate</label>
          <input type="checkbox" id="confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Confirmed</h3>
                <p class="py-4">An confirmation email has been sent to your email & supplier.</p>
                <label for="confirm-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div class="modal-action">
                  <button id='confirm-modal-confirm-button' type='submit' class="btn btn-primary btn-sm w-full" value={loading ? 'Loading...' : 'Update'}
                  disabled={loading}>Cheers! Let's do it!</button>
                </div>
              </div>
            </div>
        </div>
      </form>
    </div>
  </div>
</div>
{/if}
