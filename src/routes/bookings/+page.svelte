<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import Breadcrumb from '$lib/components/breadcrumb.svelte';
    import { page } from '$app/stores';
  </script>
<div class='grid grid-col-3 gap-4 tems-center'>
    <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">Bookings</h1>
    <div class='col-start-2 col-end3'>
      <Breadcrumb path={$page.url.href} />
    </div>
</div>
<div class="flex justify-center align-middle">
    {#each data.bookings as { id, supplierName, steps}, i}
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
        <img src="/images/suppliers/milling-1.JPG" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">Booking with {supplierName}</h2>
        {#each Object.entries(steps) as [key, value]}
            <p>{key} - {value}</p>
        {/each}
        <div class="card-actions">
            <a href="/bookings/{id}">
                <div class="radial-progress" style="--value:70; --thickness: 6px;">70%</div>
            </a>
        </div>
        </div>
    </div>
    {/each}
</div>