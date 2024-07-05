<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { isHttpError } from '@sveltejs/kit';

	import { onMount } from 'svelte';

	let IsSearchVisible = false;
	let InputElement: HTMLInputElement | null = null;

	let ToogleVisibility = () => {
		IsSearchVisible = !IsSearchVisible;
		if (InputElement) {
			InputElement.focus();
		}
	};

	onMount(() => {
		if (InputElement) {
			InputElement.focus();
			console.log(InputElement);
		}
	});
</script>

<li>
	<button on:click={ToogleVisibility} type="button" class="flex items-center"
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
				d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
			/>
		</svg>
	</button>
</li>
{#if IsSearchVisible}
	<button
		in:fade={{ duration: 100 }}
		on:click|self={ToogleVisibility}
		class="  bg-white/90 fixed inset-0 h-dvh w-dvw z-50"
		><div
			class="m-auto max-w-xl z-50 transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
		>
			<div class="relative">
				<svg
					class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
						clip-rule="evenodd"
					/>
				</svg>
				<input
					bind:this={InputElement}
					type="text"
					class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
					placeholder="Rechercher..."
					role="combobox"
					aria-expanded="false"
					aria-controls="options"
				/>
			</div>

			<!-- Results, show/hide based on command palette state -->
			<ul
				class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
				id="options"
				role="listbox"
			>
				<!-- Active: "bg-indigo-600 text-white" -->
				<li class="cursor-default select-none px-4 py-2" id="option-1" tabindex="-1">
					Leslie Alexander
				</li>
				<li class="cursor-default select-none px-4 py-2" id="option-2" tabindex="-1">
					Michael Foster
				</li>
				<li class="cursor-default select-none px-4 py-2" id="option-3" tabindex="-1">
					Dries Vincent
				</li>
				<li class="cursor-default select-none px-4 py-2" id="option-4" tabindex="-1">
					Lindsay Walton
				</li>
				<li class="cursor-default select-none px-4 py-2" id="option-5" tabindex="-1">
					Courtney Henry
				</li>
			</ul>

			<!-- Empty state, show/hide based on command palette state -->
			<p class="p-4 text-sm text-gray-500">Last command</p>
		</div>
	</button>
{/if}
