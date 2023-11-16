import { MUTATION_TYPES } from "@/store/mutationTypes";
import { mockCourses } from '@/mocks/mock_courses'
export default {
	state: {
		courses: [],
	},

	actions: {
		fakeFetchCourses({ commit }) {
			commit(MUTATION_TYPES.SET_COURSES, mockCourses)
		}
	},

	mutations: {
		[MUTATION_TYPES.SET_COURSES](state, courses) {
			state.courses = courses
		}
	},

	getters: {},

	namespaced: true
}
