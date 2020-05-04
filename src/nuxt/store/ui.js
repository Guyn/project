export const state = () => ({
	colorMode: 'light',
	menu: {
		active: false
	}
});

export const mutations = {
	setMode(state, value) {
		state.settings.colorMode = value;
	},
	toggleColorMode(state) {
		if (state.settings.colorMode === 'light') state.settings.colorMode = 'dark';
		else state.settings.colorMode = 'light';
	},
	setMenuActive(state, value) {
		state.menu.active = value;
	}
};

export const actions = {
	setDarkMode({ commit }) {
		commit('setMode','dark');
	},
	setLightMode({ commit }) {
		commit('setMode','light');
	},
	toggleColorMode({ commit }) {
		commit('toggleColorMode');
	},
	setMode({ commit }, value) {
		commit('setMode', value);
	},
	setMenuActive({ commit }, bool) {
		commit('setMenuActive', bool);
	},
	toggleMenuActive({ commit, state }) {
		commit('setMenuActive', !state.menu.active);
	}
};
