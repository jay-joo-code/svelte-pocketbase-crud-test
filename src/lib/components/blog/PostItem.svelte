<script lang="ts">
	import Textarea from '../glue/Textarea.svelte';
	import debounce from 'just-debounce-it';
	import { pb } from '$lib/pocketbase';

	export let post: any;

	const handleChange = (event: any) => {
		pb.collection('posts').update(post?.id, {
			content: event?.target?.value
		});
	};
	const debouncedHandleChange = debounce(handleChange, 200);
</script>

{#if post?.content != null}
	<Textarea bind:value={post.content} on:input={debouncedHandleChange} class="textarea-ghost" />
{/if}
