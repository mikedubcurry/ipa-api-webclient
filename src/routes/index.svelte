<script type="module" lang="ts">
	export async function load({ page, fetch, session, context }) {
		const url = `/`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					message: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
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
