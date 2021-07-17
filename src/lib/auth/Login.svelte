<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { enhance } from '$lib/form';
	import { user } from '$lib/stores/user';
	let email = '';
	let password = '';
	let authErr = false;
	// export let visible = false;
</script>

<!-- <button on:click={() => (visible = !visible)}>Login</button> -->
<!-- {#if visible} -->
<form
	class:authErr
	transition:fly={{ x: -200 }}
	use:enhance={{
		result: async (res, form) => {
			authErr = false;
			const token = await res.json();
			user.set(token.id);
			form.reset();
			goto('/')
		},
		error: async (res, error, form) => {
			form.reset();
			authErr = true;
		}
	}}
	method="POST"
	action="/login"
>
	<label for="email"><p>Email</p></label>
	<input bind:value={email} name="email" type="text" id="email" />
	<label for="password"><p>Password</p></label>
	<input bind:value={password} name="password" type="password" id="password" />
	<input type="submit" value="Login" />
</form>

<!-- {/if} -->
<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		width: fit-content;
		background-color: rgb(138, 122, 77);
		padding: 2rem;
		border-radius: 14px;
		transition: background-color .3s ease;
	}
	label {
		font-size: 1.8rem;
		color: rgb(235, 165, 16);
		margin-bottom: .5rem;
		padding-left: 2rem;
		transition: color .3s ease;
	}
	input {
		margin-bottom: 1rem;
		border-radius: 4px;
		border: none;
		height: 2.5rem;
	}
	[type='submit'] {
		margin-top: 1rem;
		padding: .5rem;
		border-radius: 4px;
		height: unset;
		border: none;
		margin: 0 4rem;
	}
	.authErr {
		background-color: red;
	}
	.authErr label {
		color: white;

	}
	@media (min-width: 500px) {
		form{ 
			width: 400px;
		}
	}
</style>
