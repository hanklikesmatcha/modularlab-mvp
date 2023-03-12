<script lang='ts'>
	import '../app.css';
    import type { LayoutData } from './$types';
    export let data: LayoutData;
</script>

<div class="navbar flex top-0 left-0 right-0 z-50 bg-white shadow-lg border-none">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-5 p-2 shadow-lg bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Home 🏠</a></li>
                <li><a href="/user">Profile 👤</a></li>
                <li><a href="/bookings">Bookings 🔍</a></li>
				<li><a href="/suppliers">Suppliers 🏭</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="btn btn-ghost normal-case text-xl">ModularLab</a>
	</div>
	<div class="navbar-end" />
</div>

<slot />
