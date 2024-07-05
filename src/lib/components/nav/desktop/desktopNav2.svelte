<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	$: pageName = $page.url.pathname;
	let scrollY = 0;

	import { fly, fade, slide, scale, draw } from 'svelte/transition';
	import CartDesktop from './cartDesktop.svelte';
	import Search from '$lib/components/nav/search.svelte';

	let menuIsVisible = false;
	let carteIsVisible = false;
	$: IsSearchVisible = false;

	let setMenuVisible = () => {
		menuIsVisible = !menuIsVisible;
	};
	console.log(pageName);
</script>

<svelte:window bind:scrollY />
{#if scrollY < 100}
	<div transition:slide class="col-span-12 bg-amber-400 py-1 h-fit text-white text-center text-xs">
		Livraison sur Genève - Livraison offerte si 500chf
	</div>
{/if}

<div class=" bg-white w-wdh flex justify-between items-center py-2 px-14 transition">
	<div class="">
		<a href="/"
			><img
				class="h-8"
				src="
		img/marginite_logo.png"
				alt=""
			/></a
		>
	</div>
	<ul class="flex gap-8 font-bold text-sm justify-center underline-offset-4 grow">
		<li>
			<a class="hover:underline {pageName === '/' ? 'underline' : 'no-underline'} " href="/">Home</a
			>
		</li>

		<li>
			<a class="hover:underline {pageName === '/shop' ? 'underline' : 'no-underline'} " href="/shop"
				>Shop</a
			>
		</li>
		<li>
			<a
				class="hover:underline {pageName === '/brasserie' ? 'underline' : 'no-underline'}"
				href="/brasserie">Points de vente</a
			>
		</li>
		<li>
			<a
				class="hover:underline {pageName === '/brasserie' ? 'underline' : 'no-underline'}"
				href="/brasserie">Notre brasserie</a
			>
		</li>

		<li>
			<a
				class="hover:underline {pageName === '/contact' ? 'underline' : 'no-underline'}"
				href="/contact">Contact</a
			>
		</li>
	</ul>
	<ul class="flex gap-6 ustify-end items-center">
		<Search />
		<CartDesktop />
		<li>
			<button
				type="button"
				class="rounded-full bg-white py-[0.5rem] px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex gap-1 items-center ml-2"
			>
				Mon compte <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
					/>
				</svg>
			</button>
		</li>
	</ul>
</div>
