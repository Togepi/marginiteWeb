<script lang="ts">
	import { scale, fly, slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
</script>

<a
	href="/"
	class=" lg:col-span-6 h-96 xl:h-[450px] 2xl:h-[600px] flex flex-col justify-start items-center group transition-all relative overflow-hidden bg-pink-100 rounded"
>
	<img
		src="img/landing_bonhomme_1.png"
		alt=""
		class="absolute z-10 bottom-0 object-contain transition group-hover:scale-[1.02] duration-1000"
	/>
	<div class=" z-20 relative text-center font-helvetica pt-12 text-stone-950">
		<h2 class="text-4xl tracking-tight font-bold">Zone de livraison</h2>
		<h4 class=" text-xl w-fit m-auto px-3 py-1 rounded-full">Voir la zone</h4>
		<button
			type="button"
			class=" relative mt-3 group-hover:px-12 rounded-full
				 bg-white px-8 transition-all py-2 text-sm font-semibold
				  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center justify-center m-auto gap-2"
			><p>Voir les conditions</p>

			<Icon
				class=" absolute right-2 opacity-0 group-hover:opacity-100"
				icon="fluent-emoji:clinking-beer-mugs"
				width="1.5em"
				height="1.5em"
			/>
		</button>
	</div>
</a>
