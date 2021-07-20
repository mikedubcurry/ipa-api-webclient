<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, session, page }) => {
		console.log(page);
		const res = await fetch(page.path + '.json');
		const data = await res.json();
		return {
			props: {
				ipa: data.ipa
			}
		};
	};
</script>

<script lang="ts">
	export let ipa;
	console.log(ipa);
</script>

<h1>{ipa.name}</h1>

<style>
</style>
