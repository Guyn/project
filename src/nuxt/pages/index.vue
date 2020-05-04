<template>
	<main class="page page--home">
		<HenrisIntro />
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import HenrisIntro from '@/components/intro.vue';

export default Vue.extend({
	components: {
		HenrisIntro
	}
});
</script>

<style lang="scss">
@import '~tools';
.page {
	&--home {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
}
</style>
