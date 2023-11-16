import { MUTATION_TYPES } from "@/store/mutationTypes";

export default {
	state: {
		isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated') || false)
	},

	actions: {

	},

	mutations: {
		[MUTATION_TYPES.SET_AUTHENTICATION](state, isAuthenticated) {
			state.isAuthenticated = isAuthenticated
			localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated))
		}
	},

	getters: {

	},

	namespaced: true
}
