import Vue, { Component } from 'vue';
import { ExtendedVue } from 'vue/types/vue';

declare module 'vue/types/vue' {
	interface VueConstructor<V extends Vue = Vue> {
		component<Data, Methods, Computed, Props>(
			id: string,
			definition: Component<Data, Methods, Computed, Props>
		): ExtendedVue<V, Data, Methods, Computed, Props>;
	}
}
