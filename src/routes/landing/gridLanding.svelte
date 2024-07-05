<script lang="ts">
	import { scale, fly, slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import Hero from './grid_sections/hero.svelte';
	import Carouge from './grid_sections/carouge.svelte';
	import Pack from './grid_sections/pack.svelte';
	import Shop from './grid_sections/shop.svelte';
	import Brasserie from './grid_sections/brasserie.svelte';
	import Lastbiere from './grid_sections/lastbiere.svelte';
	import Contact from './grid_sections/contact.svelte';
	import Pdv from './grid_sections/pdv.svelte';
	import Equipe from './grid_sections/equipe.svelte';
</script>

<div
	transition:slide
	class="col-span-12 bg-amber-400 py-1 h-fit text-white text-center text-xs lg:hidden"
>
	Livraison sur Genève - Livraison offerte si 500chf
</div>
<div class=" px-0">
	<Hero />
	<div class="flex justify-center lg:h-32 xl:h-auto h-16">
		<img class="  h-full" src="img/landing_bonhomme_1.png" alt="" />
		<img class=" " src="img/landing_lautrehomme_1.png" alt="" />
	</div>

	<Carouge />

	<div class="grid grid-cols-1 md:grid-cols-3 px-12 md:mb-12">
		<Pack />
		<Equipe />
		<Brasserie />
	</div>
	<h1 class=" text-5xl md:text-7xl font-bold text-center p-12 pb-20">Nos dernières bières</h1>
	<div class="grid grid-col-1 lg:grid-cols-3 aspect-6 mt-1 md:gap-12 mx-12 md:mx-24">
		{#each [{ title: 'La goula', price: 13, type: ' ambrée', img: 'img/landing_presBeerYellow.jpg' }, { title: 'La meule', price: 5.5, type: ' blanche', img: 'img/landing_presPurple.jpg' }, { title: 'La goula', price: 8, type: ' blonde', img: 'img/landing_presBeer.jpg' }] as { title, price, type, img }}
			<a href="/" class=" md:w-80 m-auto rounded mt-12 md:mt-0 group">
				<div class="relative w-full aspect-[2/3] overflow-hidden rounded-3xl">
					<div
						class="absolute z-20 text-center w-full h-full backdrop-brightness-50 hidden group-hover:flex rounded-3xl"
					>
						<p class="m-auto font-bold text-3xl text-white">Voir la bière</p>
					</div>
					<img
						class="h-full object-cover rounded-3xl group-hover:scale-110 transition
				"
						src={img}
						alt=""
					/>
				</div>

				<div class="text-center my-5 space-y-1">
					<h1 class="font-bold text-2xl">{title}</h1>
					<p class="font-black">{price} CHF</p>
					<h3 class="text-stone-800">{type}</h3>
				</div>
			</a>
		{/each}
	</div>

	<Contact />
</div>
