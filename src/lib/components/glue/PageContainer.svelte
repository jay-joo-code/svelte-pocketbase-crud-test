<script lang="ts">
	import { APP_NAME } from '$lib/config';

	export let title = '';
	export let layout: 'mobile-only' | 'aside-main' = 'mobile-only';
</script>

<svelte:head>
	<title>{title ? `${title} | ` : ''}{APP_NAME}</title>
</svelte:head>
{#if layout === 'mobile-only'}
	<div class="flex justify-center">
		<div class="w-full max-w-2xl">
			<slot />
		</div>
	</div>
{:else if layout === 'aside-main'}
	<!-- aside main layout: should only have 2 top level children -->
	<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
		<slot />
	</div>
{/if}
