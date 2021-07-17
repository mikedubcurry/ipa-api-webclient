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
import type { Locals, UnAuthSession, UserSession } from "$lib/types";


	export let session: UserSession | UnAuthSession = undefined;
</script>

<header>
	{#if !session.authenticated}
		<div class="auth">
			<a href="/login">Login/Signup</a>
		</div>
	{:else}
		<p class="user">Logged in as {session.username}</p>
		<div class="auth">
			<a href="/logout">Log out</a>
		</div>
	{/if}
</header>
<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		font-size: 2rem;
		padding: 0 1rem;
	}
	header {
		height: 10vh;
		display: grid;
		grid-template-columns: 4fr 1fr;
		width: 100%;
		font-size: 2rem;
		padding: 0 1rem;
	}
	.auth,
	.user {
		display: flex;
		align-items: center;
		width: 100%;
	}
	.auth {
		grid-column: 2;
		justify-content: flex-end;
	}
	.user {
		justify-content: flex-start;
	}

	@media (min-width: 500px) {
		main {
			max-width: 95vw;
		}
	}
	@media (min-width: 750px) {
		main {
			max-width: 650px;
		}
	}
	@media (min-width: 1024px) {
		main {
			/* might need to be changed */
			max-width: 1000px;
		}
	}
</style>
