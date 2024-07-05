<script lang="ts">
	import MobileMenu from './mobileMenu.svelte';
	import CartMobile from './cartMobile.svelte';
</script>

<nav class="flex justify-between shadow fixed w-full bg-white z-40">
	<MobileMenu />
	<div class="text-2xl py-3 px-8">
		<img src="img/marginite_logo_black.png" alt="Marginite" class="h-8" />
	</div>

	<CartMobile />
</nav>
