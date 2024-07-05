<script lang="ts">
	import MobileNav from './mobile/mobileNav.svelte';
	import DesktopNav from './desktop/dekstopNav.svelte';
	import DesktopNav2 from './desktop/desktopNav2.svelte';
</script>

<div class="lg:hidden"><MobileNav /></div>
<div class=" hidden lg:block"><DesktopNav2 /></div>
