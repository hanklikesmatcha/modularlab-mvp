<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
    import Breadcrumb from '../../lib/components/breadcrumb.svelte';
    import { page } from '$app/stores';
    
    let firstName = data.firstName;
    let lastName = data.lastName;
    let address = data. address;
</script>
<div class='grid grid-col-3 gap-4 tems-center'>
    <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">{firstName} {lastName}'s Profile</h1>
    <div class='col-start-2 col-end3'>
      <Breadcrumb path={$page.url.href} />
    </div>
</div>
<div class="flex justify-center align-middle">
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Personal Details</h2>
			<div class="form-control w-full max-w-xs">
				<label class="label">
					<span class="label-text">First Name</span>
				</label>
				<input type="text" bind:value={firstName} class="input input-bordered w-full max-w-xs" />
                <label class="label">
					<span class="label-text">Last Name</span>
				</label>
				<input type="text"bind:value={lastName} class="input input-bordered w-full max-w-xs" />
                <label class="label">
					<span class="label-text">Address</span>
				</label>
                <input type="text" bind:value={address.addressLine1} class="input input-bordered w-full max-w-xs my-2" />
                <input type="text" bind:value={address.addressLine2} class="input input-bordered w-full max-w-xs my-2" />
                <input type="text" bind:value={address.suburb} class="input input-bordered w-full max-w-xs my-2" />
                <input type="text" bind:value={address.city} class="input input-bordered w-full max-w-xs my-2" />
                <input type="text" bind:value={address.countryCode} class="input input-bordered w-full max-w-xs my-2" />
                <input type="text" bind:value={address.postcode} class="input input-bordered w-full max-w-xs my-2" />
			</div>
		</div>
	</div>
</div>
