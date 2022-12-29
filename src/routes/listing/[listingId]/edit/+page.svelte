<script>
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	export let data;

	let { listingId } = data;
	let listing;

	const fetchListing = async () => {
		const result = await pb.collection('listings').getOne(listingId, {
			expand: 'user'
		});
		listing = result;
	};

	onMount(fetchListing);
</script>

<div />
