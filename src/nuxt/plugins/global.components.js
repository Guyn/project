import Vue from 'vue';
// import GlobalComponentExample from '~/components/global-component-example.vue';

const Components = {
	// GlobalComponentExample
};

Object.keys(Components).forEach((key) => {
	Vue.component(key, Components[key]);
});
