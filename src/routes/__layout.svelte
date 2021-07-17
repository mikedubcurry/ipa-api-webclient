<script context="module" lang="ts">
	export async function load({ page, fetch, session, context }) {
		return {
			props: {
				session
			}
		};
	}
</script>

<script lang="ts">
	// import Login from '$lib/auth/Login.svelte';
	// import Signup from '$lib/auth/Signup.svelte';
	import { user } from '$lib/stores/user';
	// let visible = false;
	export let session = undefined;
	$: console.log(session);
</script>

{#if !session.authenticated}
	<a href="/login">Login/Signup</a>
	<!-- <Login  {visible} /> -->
	<!-- <Signup {visible} /> -->
{:else}
  <p>Logged in as {session.username}</p>
	<a href="/logout">Log out</a>
{/if}
<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
