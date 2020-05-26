import { colorModeType, IUIState } from '@/types';

export const state = (): IUIState => ({
	colorMode: 'light',
	activeMenu: false
});

export const mutations = {
	setMode(state: IUIState, value: colorModeType) {
		state.colorMode = value;
	},
	toggleColorMode(state: IUIState) {
		state.colorMode = state.colorMode === 'light' ? 'dark' : 'light';
	},
	setMenuActive(state: IUIState, bool: boolean) {
		state.activeMenu = bool;
	}
};

export const actions = {
	setDarkMode({ commit }: any) {
		commit('setMode', 'dark');
	},
	setLightMode({ commit }: any) {
		commit('setMode', 'light');
	},
	toggleColorMode({ commit }: any) {
		commit('toggleColorMode');
	},
	setMode({ commit }: any, value: string) {
		commit('setMode', value);
	},
	setMenuActive({ commit }: any, bool: boolean) {
		commit('setMenuActive', bool);
	},
	toggleMenuActive({ commit, state }: any) {
		commit('setMenuActive', !state.activeMenu);
	}
};
