<script lang="ts">
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase';

	let listings: any[] = [];

	onMount(async () => {
		const result = await pb.collection('listings').getList(1, 50, {
			sort: 'created',
			expand: 'user'
		});
		listings = result.items;
	});
</script>

<div class="space-y-4">
	{#each listings as listing (listing.id)}
		<a href={`/listing/${listing.id}`}>
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
</div>
