<script lang="ts">
  import type { PageData } from './$types';
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import { page } from '$app/stores';
  export let data: PageData;
  let { session, suppliers } = data;
</script>

<div class='grid grid-col-3 gap-4 tems-center'>
  <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">Suppliers</h1>
  <div class='col-start-2 col-end3'>
    <Breadcrumb path={$page.url.href} />
  </div>
</div>

<div>
  <div class="flex justify-center align-middle">
    {#each suppliers as { id, created_at, name, description, type, thumbnail }, i}
    <div class="card w-72 bg-base-100 shadow-xl mx-8">
      <a href='/suppliers/{id}'>
        {#if thumbnail}
          <img
            src={thumbnail}
            alt={thumbnail ? 'thumbnail' : 'No image'}
            class="thubnamUrl image"
          />
        {:else}
        <div class="avatar no-image" style="height: 10em; width: 10em;" />
        {/if}
        <div class="card-body">
          <h2 class="card-title">
            {name}
          </h2>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">{type}</div>
          </div>
        </div>
      </a>
    </div>
    {/each}
  </div>
</div>
