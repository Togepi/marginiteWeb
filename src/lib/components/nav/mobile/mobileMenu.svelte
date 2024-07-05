<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly, fade, slide, scale, draw } from 'svelte/transition';

	let menuIsVisible = false;

	let setMenuVisible = () => {
		menuIsVisible = !menuIsVisible;
	};
</script>

<button on:click={setMenuVisible}
	><Icon
		icon="solar:hamburger-menu-outline"
		width="1.7em"
		height="1.7em"
		style="color: black"
		class="ml-3"
	/>
</button>
{#if menuIsVisible}
	<div class=" h-dvh fixed w-dvw z-40">
		<!-- Main content -->
		<div
			transition:fly={{ opacity: 1, x: -600, duration: 300 }}
			class="w-max-96 min-w-32 shadow-xl px-10 bg-white z-40 h-full absolute text-right flex flex-col justify-center"
		>
			<!-- Button close -->

			<button
				transition:scale={{ delay: 300 }}
				on:click={setMenuVisible}
				class="top-0 left-full absolute mt-10 translate-x-full"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="  M2 2 l 10 10 l -10 10  M22 22 l -10 -10 l 10 -10  "
					/>
				</svg>
			</button>
			<!-- Banner -->
			<div class="absolute top-0 left-0 w-full h-12">
				<img src="img/banner_mobile_001.jpg" alt="" />
			</div>

			<!-- Content Menu -->
			<h3 class=" text-gray-400 text-xs mt-8 mb-3">Menu</h3>
			<ul class=" font-bold tracking-tight space-y-2 text-2xl">
				<li in:fly={{ delay: 50, x: -500, duration: 200 }} out:fly={{ x: -500, duration: 900 }}>
					<a href="/">Shop</a>
				</li>
				<li
					class="text-nowrap"
					in:fly={{ delay: 100, x: -500, duration: 250 }}
					out:fly={{ x: -500, duration: 900 }}
				>
					<a href="/">Notre brasserie</a>
				</li>
				<li in:fly={{ delay: 150, x: -500, duration: 300 }} out:fly={{ x: -500, duration: 900 }}>
					<a href="/">Contact</a>
				</li>
			</ul>
			<!-- Mon compte -->
			<h3 class=" text-gray-400 text-xs mt-8 mb-3">Mon compte</h3>
			<ul class=" font-bold tracking-tight space-y-2 text-gray-900">
				<li in:fly={{ delay: 200, x: -500, duration: 350 }} out:fly={{ x: -500, duration: 900 }}>
					<a href="/">Mon panier</a>
				</li>
				<li
					class="text-nowrap"
					in:fly={{ delay: 250, x: -500, duration: 400 }}
					out:fly={{ x: -500, duration: 900 }}
				>
					<a href="/">Mes informations</a>
				</li>
			</ul>
			<!-- Reseaux sociaux -->
			<h3 class=" text-gray-400 text-xs mt-8 mb-3">Partagez nous !</h3>
			<div class="flex justify-end gap-2">
				<div in:fly={{ delay: 300, x: -500, duration: 500 }} out:fly={{ x: -500, duration: 900 }}>
					<Icon icon="logos:facebook" width="1.2em" height="1.2em" />
				</div>
				<div in:fly={{ delay: 350, x: -500, duration: 400 }} out:fly={{ x: -500, duration: 900 }}>
					<Icon icon="skill-icons:instagram" width="1.2em" height="1.2em" />
				</div>
				<div in:fly={{ delay: 400, x: -500, duration: 300 }} out:fly={{ x: -500, duration: 900 }}>
					<img alt="Untappd Icon" src="icon/untappd.webp" class="w-5 h-5 rounded" />
				</div>
			</div>
		</div>
		<!-- FDond noir -->
		<button
			transition:fade
			on:click={setMenuVisible}
			class=" bg-gray-100/95 w-full absolute h-full z-30 top-0 left-0"
		>
		</button>
	</div>
{/if}
