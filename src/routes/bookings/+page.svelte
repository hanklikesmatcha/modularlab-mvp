<script lang="ts">
	import Breadcrumb from '$lib/components/breadcrumb.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	let { session, bookings } = data;
</script>

<div class="grid grid-col-3 gap-ß4">
	<h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">
		Bookings
	</h1>
	<div class="col-start-2 col-end3">
		<Breadcrumb path={$page.url.href} />
	</div>
</div>
<div class="grid grid-cols-2 gap-4 justify-between">
	{#if bookings.length === 0}
		<a href="/suppliers" class="link link-secondary text-center"
			>No bookings. Let's make a booking</a
		>
	{:else}
		{#each bookings as { id, created_at, suppliers }, i}
			<div class="card w-full sm:w-96 bg-base-100 shadow-xl m-auto">
				<figure class="px-10 pt-10">
					<img src="/images/logo.png" alt="Shoes" class="rounded-xl" />
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">Booking with {suppliers.name}</h2>
					<p>Created at - {new Date(created_at).toLocaleDateString()}</p>
					<div class="card-actions">
						<a href="/bookings/{id}">
							<div
								class="radial-progress"
								style="--value:0; --thickness: 6px;"
							>
								0%
							</div>
						</a>
					</div>
				</div>
			</div>
		{/each}
	{/if}
</div>
