<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { currentUser, pb } from '$lib/pocketbase';
	import PostItem from './PostItem.svelte';
	import PageContainer from '../glue/PageContainer.svelte';
	import Aside from '../glue/Aside.svelte';
	import Main from '../glue/Main.svelte';

	let posts: any[] = [];

	onMount(async () => {
		// Get initial posts
		const result = await pb.collection('posts').getList(1, 50, {
			sort: 'created',
			expand: 'user'
		});
		posts = result.items;
	});

	const sections = [
		{
			overline: 'about',
			name: 'Interpretations of reality',
			preview1:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione nihil quia ea quam doloremque. Unde quisquam voluptate rem ratione obcaecati voluptatibus earum totam exercitationem inventore, non eaque corrupti animi?',
			preview2:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione nihil quia ea quam doloremque. Unde quisquam voluptate rem ratione obcaecati voluptatibus earum totam exercitationem inventore, non eaque corrupti animi?'
		},
		{
			overline: 'time period',
			name: 'FA22 semester',
			preview1:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione nihil quia ea quam doloremque. Unde quisquam voluptate rem ratione obcaecati voluptatibus earum totam exercitationem inventore, non eaque corrupti animi?',
			preview2:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione nihil quia ea quam doloremque. Unde quisquam voluptate rem ratione obcaecati voluptatibus earum totam exercitationem inventore, non eaque corrupti animi?'
		}
	];

	const periods = [
		{
			label: 'Fall 2022'
		},
		{
			label: 'Summer 2022'
		},
		{
			label: 'Spring 2022'
		}
	];
</script>

<PageContainer title="Blog" layout="aside-main">
	<Main>
		<div class="space-y-8">
			<!-- hero -->
			<div class="bg-gradient-purple-red-orange w-full rounded-3xl py-20">
				<div class="flex flex-col gap-4">
					<p class="text-7xl font-bold text-base-100">Inter-</p>
					<p class="text-7xl font-bold text-base-100">pretations</p>
					<p class="text-7xl font-bold text-base-100">of</p>
					<p class="text-7xl font-bold text-base-100">reality</p>
				</div>
			</div>

			<!-- sections -->
			<div class="space-y-8">
				{#each sections as section (section.name)}
					<div>
						<p class="text-gradient-purple-red-orange mb-1 font-bold uppercase">
							{section.overline}
						</p>

						<p class="mb-4 text-3xl font-bold text-base-content">
							{section.name}
						</p>
						<p class="mb-3 text-base-content text-opacity-80">{section.preview1}</p>
						<p class="text-base-content text-opacity-80">{section.preview2}</p>
					</div>
				{/each}
			</div>
		</div>
	</Main>

	<Aside>
		<div class="space-y-5">
			{#each periods as { label }}
				<div class="space-y-2">
					<p class="ml-2 font-bold uppercase">{label}</p>
					<ul class="menu menu-compact w-full rounded-xl bg-base-300 p-2">
						<li><a>Evidence based confidence leads to spirals</a></li>
						<li><a>Curiosity driven vs fear driven</a></li>
						<li><a>Item 3</a></li>
					</ul>
				</div>
			{/each}
		</div>
	</Aside>
</PageContainer>
