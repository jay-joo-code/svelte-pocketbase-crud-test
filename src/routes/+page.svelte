<script>
	import Aside from '$lib/components/glue/Aside.svelte';
	import Main from '$lib/components/glue/Main.svelte';
	import PageContainer from '$lib/components/glue/PageContainer.svelte';
	import ListingList from '$lib/components/listing/ListingList.svelte';
</script>

<PageContainer title="Home" layout="aside-main">
	<Aside />
	<Main>
		<ListingList />
	</Main>
</PageContainer>
