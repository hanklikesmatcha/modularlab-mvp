<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import type { PageData } from './$types';
	import { ThemeSupa } from '@supabase/auth-ui-shared'
	export let data: PageData;
</script>

<h1 class="text-3xl font-bold text-center m-8">Home Page</h1>
<div class="flex justify-center align-middle">
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Sign in</h2>
			<Auth
				supabaseClient={data.supabase}
				appearance={{ theme: ThemeSupa } }
				view="magic_link"
				redirectTo={`${data.url}/logging-in?redirect=/`}
				showLinks={false}
			/>
		</div>
	</div>
</div>