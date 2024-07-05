<script lang="ts">
	import '../app.css';
	import MainNav from '$lib/components/nav/mainNav.svelte';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let menuIsVisible = false;

	onMount(() => (menuIsVisible = true));
</script>

<div class="  hidden lg:block bg-white">
	<div class="  w-full left-0 fixed top-0 h-24 z-40">
		<MainNav />
	</div>
	<div class="z-10 pt-20"><slot /></div>
</div>
<div class="lg:hidden min-h-screen w-screen">
	<MainNav />
	<div class="pt-14"><slot /></div>
</div>

<Footer />
