<template>
	<div class="logo">
		<h1>h's</h1>
	</div>
</template>

<style lang="scss">
@import '~tools';

.logo {
	position: relative;
	width: grid(10);
	height: grid(10);
	background-color: color(Blue);
	clip-path: inset(100% 0 0 0);
	animation: comeIn $base-transition $base-cubic-bezier forwards;
	@at-root {
		@keyframes comeIn {
			to {
				clip-path: inset(0 0 0 0);
			}
		}
	}
	h1 {
		position: absolute;
		bottom: 0;
		left: 40%;
		color: color(White);
		font-size: grid(6);
		transform: translateY(100%);
		animation: comeUp $base-transition $base-transition $base-cubic-bezier
			forwards;
		@at-root {
			@keyframes comeUp {
				to {
					transform: translateY(0%);
				}
			}
		}
	}
}
</style>
