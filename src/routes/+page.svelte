<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onMount } from 'svelte';
	import { json } from '@sveltejs/kit';
	
	/**
	 * @type {any[]}
	 */
	let posts = [];

	onMount(async () => {
		fetchPosts()
	});

	async function fetchPosts() {
		const response = await fetch('/api/posts', {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
		});

		posts = await response.json();
        console.log(posts);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	{#each posts as post}	
		<h3>{@html post.title.rendered}</h3>
		<p>{@html post.excerpt.rendered}</p>
	{/each}
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
