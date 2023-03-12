<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import { page } from '$app/stores';
</script>

<div class='grid grid-col-3 gap-4 tems-center'>
  <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">Suppliers</h1>
  <div class='col-start-2 col-end3'>
    <Breadcrumb path={$page.url.href} />
  </div>
</div>

<div>
  <div class="flex justify-center align-middle">
    {#each data.suppliers as { id, name, type, description }, i}
    <div class="card w-72 bg-base-100 shadow-xl mx-8">
      <a href='/suppliers/{id}'>
        <figure><img src="/images/suppliers/supplier-1.jpg" alt="supplier" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            {name}
            <div class="badge badge-secondary">Recommended</div>
          </h2>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Metal Cutting</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </a>
    </div>
    {/each}
  </div>
</div>
