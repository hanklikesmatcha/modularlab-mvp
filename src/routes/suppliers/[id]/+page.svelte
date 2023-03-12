<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import Breadcrumb from '$lib/components/breadcrumb.svelte';
    import { page } from '$app/stores';
  </script>
<div class='grid grid-col-3 gap-4 tems-center'>
  <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">Suppliers - {data.name}</h1>
  <div class='col-start-2 col-end3'>
    <Breadcrumb path={$page.url.href} />
  </div>
</div>
<div class='grid justify-center'>
  <div class="card card-side bg-base-100 shadow-xl max-w-screen-md w-screen">
    <figure class="m-6 w-60 rounded-lg"><img src="/images/suppliers/supplier-1.jpg" alt="supplier" /></figure>
    <div class="card-body">
      <h2 class="card-title">{data.name}</h2>
      <p class='card'>The process of the order</p>
        <ul class="steps steps-vertical">
          <li class="step step-secondary">
            Update your draft
            <ul>
              <input type="file" class="mx-12 file-input file-input-bordered file-input-xs" />
            </ul>
          </li>
          <li class="step step-secondary">Evaluation</li>
          <li class="step">Result</li>
          <li class="step">Confirmation</li>
          <li class="step">Manufacturing</li>
          <li class="step">Shipment</li>
        </ul>
      <div class="card-actions justify-end">
        <label for='confirm-modal' class="btn btn-primary">Evaluate</label>
        <input type="checkbox" id="confirm-modal" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Confirmed</h3>
              <p class="py-4">An confirmation email has been sent to your email & supplier.</p>
              <div class="modal-action">
                <label for="confirm-modal" class="btn btn-primary btn-sm">Cheers!</label>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>