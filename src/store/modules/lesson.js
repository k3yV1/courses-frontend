export default {
	state: {
		lesson:  JSON.parse(localStorage.getItem("lesson")) || [],
	},

	actions: {

	},

	mutations: {
		COMPLETE_LESSON(state, completeLesson) {
			const existingLessonIndex = state.lesson.findIndex((l) => {
				return l.completeLesson.value.id === completeLesson.completeLesson.value.id
			})

			if (existingLessonIndex !== -1) {
				state.lesson[existingLessonIndex].completeLesson.results.push({
					timer: completeLesson.completeLesson.results[0].timer,
					passDate: completeLesson.completeLesson.results[0].passDate,
				});
			} else {
				state.lesson.push(completeLesson)
			}

			localStorage.setItem("lesson", JSON.stringify(state.lesson));
		}
	},

	getters: {
		getCompleteLesson: (state) => {
			return state.lesson
		}
	},

	namespaced: true
}
