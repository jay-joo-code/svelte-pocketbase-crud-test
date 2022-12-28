<script lang="ts">
	import Aside from '$lib/components/glue/Aside.svelte';
	import Main from '$lib/components/glue/Main.svelte';
	import PageContainer from '$lib/components/glue/PageContainer.svelte';
	import TextInput from '$lib/components/glue/TextInput.svelte';
	import { currentUser, pb } from '$lib/pocketbase';

	const formData = new FormData();
	let address = 'test addr';

	const handleCreateListing = async () => {
		formData.append('address', address);
		formData.append('user', $currentUser?.id as string);
		await pb.collection('listings').create(formData);
	};

	const handleFileChange = (event: any) => {
		for (let file of event?.target?.files) {
			formData.append('photos', file);
		}
	};
</script>

<PageContainer title="New listing">
	<Aside />
	<Main>
		<div class="space-y-4">
			<p class="text-2xl font-medium">Create a new listing</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis assumenda
				necessitatibus earum illum eaque debitis quisquam numquam enim voluptatibus unde!
			</p>
			<form on:submit|preventDefault={handleCreateListing} class="space-y-4">
				<TextInput placeholder="151 Dryen road, Ithaca, NY" label="Address" bind:value={address} />
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text">Photos</span>
					</label>
					<input
						type="file"
						class="file-input-bordered file-input w-full max-w-xs"
						multiple
						on:change={handleFileChange}
					/>
				</div>
				<button class="btn-primary btn">Create listing</button>
			</form>
		</div>
	</Main>
</PageContainer>
