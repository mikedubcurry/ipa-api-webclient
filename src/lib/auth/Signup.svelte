<script lang="ts">
	import { fly } from 'svelte/transition';
	import { enhance } from '$lib/form';
	import { user } from '$lib/stores/user';
	let email = '';
	let password = '';

	export let visible = false;
</script>

<!-- <button on:click={() => (visible = !visible)}>Sign up</button> -->
{#if visible}
	<form
		transition:fly={{ x: -200 }}
		use:enhance={{
			result: async (res, form) => {
				const token = await res.json();
				user.set(token.id);
				form.reset();
			}
		}}
		method="POST"
		action="/signup"
	>
		<label for="email"><p>Email</p></label>
		<input bind:value={email} name="email" type="text" id="email" />
		<label for="password"><p>Password</p></label>
		<input bind:value={password} name="password" type="password" id="password" />
		<input type="submit" value="Signup" />
	</form>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
	}
</style>
