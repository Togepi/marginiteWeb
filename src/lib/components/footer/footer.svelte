<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="bg-white">
	<div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
		<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
			<div class="pb-6">
				<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Marginite</a>
			</div>
			<div class="pb-6">
				<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Notre brasserie</a>
			</div>
			<div class="pb-6">
				<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Shop</a>
			</div>
			<div class="pb-6">
				<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
					>Fabriquer son pack</a
				>
			</div>
			<div class="pb-6">
				<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pack</a>
			</div>
			<div class="pb-6">
				<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact</a>
			</div>
		</nav>
		<div class="mt-10 flex justify-center space-x-10">
			<a href="/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">instagram</span>
				<a href="/">
					<Icon class="hover:scale-125" icon="skill-icons:instagram" width="1.2em" height="1.2em" />
				</a>
			</a>
			<a href="/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">facebook</span>
				<Icon class="hover:scale-125" icon="logos:facebook" width="1.2em" height="1.2em" />
			</a>
			<a href="/" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">untappd</span>
				<img alt="Untappd Icon" src="icon/untappd.webp" class="w-5 h-5 rounded hover:scale-125" />
			</a>
		</div>
		<p class="mt-10 text-center text-xs leading-5 text-gray-500">
			&copy; 2024 Marginite SA, Inc. Tous droits réservés.
		</p>
	</div>
</footer>
