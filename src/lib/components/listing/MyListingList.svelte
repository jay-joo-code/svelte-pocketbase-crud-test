<script lang="ts">
	import { onMount } from 'svelte';
	import { currentUser, pb } from '$lib/pocketbase';

	let listings: any[] = [];
	let page = 1;

	const fetchListings = async () => {
		const result = await pb.collection('listings').getList(page, 50, {
			sort: 'created',
			expand: 'user',
			filter: `user = '${$currentUser?.id}'`
		});
		listings = [...listings, ...result.items];
	};

	onMount(fetchListings);
</script>

<div class="space-y-4">
	{#each listings as listing (listing.id)}
		<a href={`/listing/${listing.id}/edit`}>
			<div class="flex space-x-4 rounded-xl p-2 hover:bg-base-200">
				<div>
					<img
						src={pb.getFileUrl(listing, listing.photos[0], { thumb: '400x0' })}
						alt=""
						width="200"
						height="120"
						class="rounded-xl"
					/>
				</div>
				<div>
					<p class="text-xl font-bold">{listing.address}</p>
					<p>{listing.expand.user.name}</p>
				</div>
			</div>
		</a>
	{/each}
	<div class="flex justify-center">
		<button
			class="btn"
			on:click={() => {
				page += 1;
				fetchListings();
			}}>Load more</button
		>
	</div>
</div>
