<script lang="ts">
    import Breadcrumb from '../../lib/components/breadcrumb.svelte';
    import { page } from '$app/stores';
    
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let { session,  profile } = data;
  	let profileForm: any;
	let loading = false;
	let fullName: string | null = profile?.full_name;
	let username: string | null = profile?.username;
	let website: string | null = profile?.website;
	let avatarUrl: string | null = profile?.avatar_url;

	function handleSubmit() {
		loading = true;
		return async () => {
			loading = false;
		};
	}
</script>
<div class='grid grid-col-3 gap-4 tems-center'>
    <h1 class="col-start-1 col-end-4 text-3xl font-bold text-center m-8">Profile</h1>
    <div class='col-start-2 col-end3'>
      <Breadcrumb path={$page.url.href} />
    </div>
</div>
<div class="flex justify-center align-middle">
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Personal Details</h2>
			<form
				class="form-widget w-full max-w-sm m-auto"
				method="post"
				action="?/update"
				use:enhance={handleSubmit}
				bind:this={profileForm}
			>
				<div>
					<label class='label' for="email">Email</label>
					<input class='input input-bordered w-full max-w-xs' id="email" type="text" value={session.user.email} disabled />
				</div>
		
				<div>
					<label class='label' for="fullName">Full Name</label>
					<input class='input input-bordered w-full max-w-xs' id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
				</div>
		
				<div>
					<label class='label' for="username">Username</label>
					<input class='input input-bordered w-full max-w-xs' id="username" name="username" type="text" value={form?.username ?? username} />
				</div>
		
				<div>
					<label class='label' for="website">Website</label>
					<input class='input input-bordered w-full max-w-xs' id="website" name="website" type="url" value={form?.website ?? website} />
				</div>
		
				<div>
					<input
						type="submit"
						class="btn btn-primary w-full mt-4"
						value={loading ? 'Loading...' : 'Update'}
						disabled={loading}
					/>
				</div>
			</form>
		
			<form method="post" action="?/signout" use:enhance={handleSubmit}>
				<div>
					<button class="btn btn-block" disabled={loading}>Sign Out</button>
				</div>
			</form>
		</div>
	</div>
</div>
