<script context="module">
	export const load = async ({ session }) => {
		console.log(session);
		return {
			props: {
				session
			}
		};
	};
</script>

<script lang="ts">
	import type { IPA, Locals, UnAuthSession, UserSession } from '$lib/types';
	import type { Load } from '@sveltejs/kit';

	import { onMount } from 'svelte';

	let ipas: IPA[] = [];
	let liked: IPA[] = [];

	export let session: UserSession | UnAuthSession;

	onMount(async () => {
		let resIpas = await fetch('/ipas');
		if (resIpas.ok) {
			ipas = await resIpas.json();
		}
		if (session.authenticated) {
			let resLiked = await fetch('/ipas/liked');
			if (resLiked.ok) {
				liked = await resLiked.json();
				console.log(liked);
			}
		}
	});
</script>

<h1>IPA-API</h1>
<p>
	<dfn>IPA</dfn> (noun) India Pale ale, a type of light-colored beer similar to bitter, typically with
	a higher than average alcohol and hop content.
</p>
<p>
	<dfn>API</dfn> (noun) Application Programming Interface, a set of functions and procedures allowing
	the creation of applications that access the features or data of an operating system, application,
	or other service.
</p>

{#if session.authenticated}
	<h2>Your Favorties</h2>
	{#each liked as ipa (ipa.id)}
		<article>
			<h3>{ipa.name}</h3>
			<p>{ipa.brewer.name} {ipa.brewer.location}</p>
			{#if ipa.isAlcoholic}
				<p>{ipa.alcohol} % ABV</p>
			{/if}
			<p>{ipa.description}</p>
		</article>
	{/each}
{/if}

<h2>IPAs</h2>
{#each ipas as ipa (ipa.id)}
	<article>
		<h3>{ipa.name}</h3>
		<p>{ipa.brewer.name} {ipa.brewer.location}</p>
		{#if ipa.isAlcoholic}
			<p>{ipa.alcohol} % ABV</p>
		{/if}
		<p>{ipa.description}</p>
	</article>
{/each}
