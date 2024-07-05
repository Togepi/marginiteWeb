<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { fly, fade, slide, scale, blur } from 'svelte/transition';
	beforeNavigate(() => (cartIsVisible = false));

	let cartIsVisible = false;

	function cartIn() {
		return {
			duration: 300,
			css: (t: number) => {
				return `transform: translateX(${100 - t * 100}%)`;
			}
		};
	}

	let cartItemsList = [...Array(18).keys()];
	let nbrItems = cartItemsList.map((n) => n.toString());

	let cartIsVisibleOnOff = () => {
		cartIsVisible = !cartIsVisible;
	};
</script>

<li>
	<button on:click={cartIsVisibleOnOff} type="button" class="flex items-center relative"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
			/>
		</svg>

		<div
			class="absolute text-xs rounded-full font-black tracking-tighter right-0 top-0 translate-x-3 -translate-y-1 h-5 w-5 flex justify-center items-center bg-cyan-500 text-white"
		>
			12
		</div>
	</button>
</li>

{#if cartIsVisible}
	<div class="fixed w-full h-screen top-0 left-0 z-50">
		<!-- Content cart -->
		<div class="  h-dvh flex flex-col justify-center md:py-5 max-w-3xl right-0 absolute mr-5">
			<div
				in:fly={{ x: 1000 }}
				out:scale
				class="bg-white max-h-full flex flex-col md:rounded-xl z-50 shadow-xl"
			>
				<div class=" flex border-b tracking-tight px-8 items-center py-5 justify-between">
					<h2 class="text-2xl font-bold">Votre panier</h2>
					<button on:click={cartIsVisibleOnOff}>
						<Icon class="text-gray-900" icon="akar-icons:cross" width="1.5em" height="1.5em" />
					</button>
				</div>
				<div in:slide={{ delay: 400 }} class="overflow-y-scroll max-h-full">
					{#each cartItemsList as item, i}
						<div
							class="flex relative py-5 justify-center gap-5 px-2 {i % 2 === 0
								? 'bg-gray-50 '
								: 'bg-white '}"
						>
							<div class="  p-2">
								<div class="w-24 h-24 rounded-lg overflow-hidden relative">
									<img
										src="img/beer_alone.png"
										alt=""
										class="absolute w-24 h-24 object-contain py-2"
									/>
									<img
										class="  object-cover w-full h-full"
										src="img/gradient/greenToYellow_001.jpeg"
										alt="Product"
									/>
								</div>
							</div>
							<div class=" ">
								<h4 class="font-bold">Biere marginite Ambrée</h4>
								<div class="flex gap-1 font-semibold">
									<p>CHF</p>
									<p>32.00</p>
								</div>
								<div class="flex justify-between px-0">
									<select name="qtItems" class="rounded-lg scale-75 -translate-x-2">
										{#each nbrItems as item}
											<option value={item}>{item}</option>
										{/each}
									</select>
									<button class=" underline text-xs">Supprimer</button>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<!-- COmmander -->
				<div class="py-4 px-8 border-t">
					<div
						class="flex justify-between items-center text-gray-800 tracking-tighter text-xl md:text-2xl font-bold"
					>
						<p>Total :</p>
						<p>150 chf</p>
					</div>
					<div class="mb-5 mt-2 text-xs text-gray-500 md:text-sm border-t pt-1">
						<p>Taxes incluses. Livraison sur Genève et france voisine.</p>
					</div>
					<div class="flex items-center justify-center">
						<a
							href="/payments
						"
							class="bg-gradient-to-r from-pink-600 to-violet-700 text-white px-8 py-3 rounded-full text-2xl hover:from-black hover:to-black"
							>Commander</a
						>
					</div>
				</div>
			</div>
		</div>

		<!-- bg-white -->
		<button
			transition:fade
			on:click={cartIsVisibleOnOff}
			class=" bg-gray-900/50 w-full absolute h-full z-20 top-0 left-0"
		>
		</button>
	</div>
{/if}
