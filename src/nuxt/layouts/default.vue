<template>
	<div class="layout layout-default" :class="colorMode">
		<LayoutHeader />
		<nuxt />
		<LayoutFooter />
	</div>
</template>

<script>
import LayoutHeader from '~/components/layout/header.vue';
import LayoutFooter from '~/components/layout/footer.vue';

export default {
	components: {
		LayoutHeader,
		LayoutFooter
	},
	computed: {
		colorMode() {
			return this.$store.state.ui.colorMode;
		}
	}
};
</script>
