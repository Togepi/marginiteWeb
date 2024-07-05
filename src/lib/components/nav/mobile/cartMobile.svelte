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

<div class="mr-3 flex justify-center items-center z-20">
	<button on:click={cartIsVisibleOnOff} class="m-auto 0 relative">
		<div
			class="absolute z-10 left-0
			top-0 bg-cyan-500 text-white rounded-full text-xs tracking-tighter font-bold aspect-square w-5 h-5 flex items-center justify-center -translate-x-2.5 -translate-y-1"
		>
			{cartItemsList.length}
		</div>
		<Icon icon="heroicons:shopping-bag" width="1.7em" height="1.7em" style="color: black" />
	</button>
</div>
{#if cartIsVisible}
	<div class="fixed h-dvh w-dvw z-40 flex justify-items-center items-center flex-col">
		<!-- Content cart -->
		<div class="z-30 shadow-xl h-dvh flex flex-col justify-center md:py-5">
			<div
				in:scale={{ duration: 100 }}
				out:scale
				class="bg-white max-h-full flex flex-col md:rounded-xl"
			>
				<div class=" flex border-b tracking-tight px-8 items-center py-5 justify-between">
					<h2 class="text-2xl font-bold">Votre panier</h2>
					<button on:click={cartIsVisibleOnOff}>
						<Icon class="text-gray-900" icon="akar-icons:cross" width="1.5em" height="1.5em" />
					</button>
				</div>
				<div in:slide={{ delay: 200 }} class="overflow-y-scroll max-h-full">
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
							class="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-8 py-3 rounded-3xl text-2xl"
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
			class=" bg-gray-400/95 w-full absolute h-full z-20 top-0 left-0"
		>
		</button>
	</div>
{/if}
