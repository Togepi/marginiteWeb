<script lang="ts">
	import { scale, fly, slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
</script>

<a
	href="/"
	class="  flex flex-col justify-start items-center group transition-all relative rounded-3xl"
>
	<div class=" z-20 relative text-center font-helvetica pt-12 text-stone-950">
		<h2 class="text-4xl tracking-tight font-bold">Notre équipe</h2>
		<h4 class=" text-xl w-fit m-auto px-3 py-1 rounded-full">Une certaine philosophie de vie</h4>
		<button
			type="button"
			class=" relative mt-3 rounded-full
				 bg-amber-500 px-8 py-2 text-sm font-semibold
				  text-gray-900 outline-1 outline-amber-800/50 outline shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-amber-400 flex items-center justify-center m-auto gap-2"
			><p>Pour vous servir</p>
		</button>
	</div>
	<img src="img/landing_sectionEquipe.webp" alt="" class="  group-hover:scale-105" />
</a>
