<template>
	<button
		class="navigation-trigger"
		:class="{ 'navigation-trigger--active': menuActive }"
		@click="menuActive = !menuActive"
	>
		<span></span>
	</button>
</template>

<script>
export default {
	computed: {
		menuActive: {
			get() {
				return this.$store.state.ui.menu.active;
			},
			set(value) {
				this.$store.dispatch('ui/setMenuActive', value);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import '~tools';
.navigation-trigger {
	position: relative;
	z-index: 2;
	display: block;
	flex-shrink: 0;
	border: none;
	background: transparent;
	font-size: 1.5rem;
	line-height: 1.5rem;
	transform: scale(1);
	padding: 1rem 1.75rem;
	&:focus {
		box-shadow: 0 0 0 2px currentColor;
		border-radius: 50%;
		outline: none;
	}
	span {
		@include menu($color: currentColor);
	}
	&--active {
		span {
			@include menu-close();
		}
	}
	@media #{$large-up} {
		transform: scale(0);
	}
}
</style>
