<script lang="ts">
	import Icon from '@iconify/svelte';

	import { fly, fade, slide, scale, draw } from 'svelte/transition';

	let menuIsVisible = false;

	let setMenuVisible = () => {
		menuIsVisible = !menuIsVisible;
	};
</script>

<div class=" h-dvh fixed w-64 z-40 p-5">
	<!-- Main content -->
	<div class=" z-40 h-full flex flex-col shadow-xl bg-white ring-black/20 rounded-lg p-5">
		<div class=" basis-5/12 pb-16 flex flex-col items-start justify-start">
			<!-- title -->
			<a class=" ml-4 bg-black border" href="/">
				<img class="  w-40" src="img/marginite_logo.png" alt="Logo Marginite" />
			</a>

			<!-- Content Menu -->
		</div>
		<div class=" basis-5/12">
			<ul class=" font-bold text-left mt-1 font-vertical text-2xl tracking-wide">
				<li
					class="text-nowrap text-center"
					in:fly={{ delay: 200, x: -500, duration: 900 }}
					out:fly={{ x: -500, duration: 900 }}
				>
					<a class="relative group hover:text-gray-700 hover:underline hover:italic" href="/"
						>Shop
					</a>
				</li>
				<li
					class="text-nowrap text-center"
					in:fly={{ delay: 250, x: -500, duration: 1000 }}
					out:fly={{ x: -500, duration: 900 }}
				>
					<a class="relative group hover:text-gray-700 hover:underline hover:italic" href="/"
						>Notre brasserie
					</a>
				</li>
				<li
					class="text-nowrap text-center"
					in:fly={{ delay: 300, x: -500, duration: 1100 }}
					out:fly={{ x: -500, duration: 900 }}
				>
					<a class="relative group hover:text-gray-700 hover:underline hover:italic" href="/"
						>Contact
					</a>
				</li>
			</ul>
			<div class="w-full flex justify-start mt-6">
				<button
					class="flex font-bold items-center gap-4 border group hover:text-gray-100 hover:bg-gray-900 border-black/40 px-4 py-1"
					><p>search</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="size-5 text-black group-hover:text-gray-100"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
				</button>
			</div>
			<ul
				class=" font-bold text-black flex justify-start items-center gap-2 mt-5 pb-2 font-vertical"
			>
				<li
					class="text-nowrap hover:text-gray-500 text-2xl order-last"
					in:fly={{ delay: 400, x: -500, duration: 1000 }}
					out:fly={{ x: -500, duration: 900 }}
				>
					<a class="flex gap-2 items-center justify-end relative" href="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-10 scale-x-[-1]"
						>
							<path
								d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
							/>
						</svg>

						Panier

						<div
							class="absolute z-10 left-0 -translate-x-1
			top-0 bg-cyan-400 text-white rounded-full text-xs font-bold aspect-square w-5 h-5 flex items-center justify-center -translate-y-1"
						>
							23
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class=" basis-2/12 flex flex-col justify-end">
			<div
				class="text-nowrap hover:text-gray-500 text-2xl"
				in:fly={{ delay: 400, x: -500, duration: 1000 }}
				out:fly={{ x: -500, duration: 900 }}
			>
				<a
					class=" font-bold border-black flex gap-2 items-center justify-start font-vertical"
					href="/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="size-6"
					>
						<path
							fill-rule="evenodd"
							d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
							clip-rule="evenodd"
						/>
					</svg>Compte
				</a>
			</div>
			<!-- Reseaux sociaux -->
			<!-- Mon compte -->
			<div class=" mt-5 flex justify-end flex-col w-full gap-10">
				<ul class="flex justify-start items-end gap-5 w-full">
					<a
						class="hover:scale-125"
						href="/"
						in:fly={{ delay: 550, x: -500, duration: 1000 }}
						out:fly={{ x: -500, duration: 900 }}
					>
						<Icon class="hover:scale-125" icon="logos:facebook" width="1.2em" height="1.2em" />
					</a>
					<a
						href="/"
						in:fly={{ delay: 500, x: -500, duration: 1000 }}
						out:fly={{ x: -500, duration: 900 }}
					>
						<Icon
							class="hover:scale-125"
							icon="skill-icons:instagram"
							width="1.2em"
							height="1.2em"
						/>
					</a>
					<a
						href="/"
						in:fly={{ delay: 450, x: -500, duration: 1000 }}
						out:fly={{ x: -500, duration: 900 }}
					>
						<img
							alt="Untappd Icon"
							src="icon/untappd.webp"
							class="w-5 h-5 rounded hover:scale-125"
						/>
					</a>
				</ul>
			</div>
		</div>
	</div>
</div>
