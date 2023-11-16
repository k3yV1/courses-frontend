<template>
  <div class="course-details md:py-8 p-4">
    <div class="container mx-auto">
      <div class="course-details__wrapper flex md:flex-row flex-col md:gap-6 gap-3">
        <div class="md:w-2/5 w-full course-details__course-box flex flex-col">
          <div class="course-box h-max p-6 border rounded-2xl md:order-1 order-2" v-for="course in courseContent" :key="course.id">
            <div class="course-box__title mb-3" v-html="course.title"></div>
            <div class="course-box__subtitle mb-6" v-html="course.subtitle"></div>
            <div class="course-box__description" v-html="course.description"></div>
          </div>
          <div class="course-details__button-back md:mt-6 mt-0 md:mb-0 mb-3 md:order-2 order-1">
            <a @click="$router.go(-1)" class="md:hidden block cursor-pointer">
              <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg>
            </a>
            <button @click="$router.go(-1)" class="md:block hidden md:w-auto w-full back bg-pink-400 opacity-90 text-white px-4 py-2 rounded hover:opacity-100">Return Back</button>
          </div>
        </div>
        <div class="md:w-3/5 w-full course-details__lesson-box flex flex-col md:gap-6 gap-3">
          <div class="lesson-box h-max p-6 border rounded-2xl" v-for="lesson in lessonContent" :key="lesson.id">
            <div class="lesson-box__title mb-3" v-html="lesson.title"></div>
            <div class="lesson-box__content mb-6" v-html="truncateContent(lesson.content)"></div>
            <router-link class="md:w-auto w-full" :to="{ name: 'lesson', params: {  id: lesson.id, course_id: course.id} }">
              <button class="start-lesson-button md:w-auto w-full bg-pink-400 opacity-90 hover:opacity-100 text-white px-4 py-2 rounded">
                Start
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockCourses } from "@/mocks/mock_courses";
export default {
  data() {
    return {
      course: null
    }
  },

  computed: {
    courseContent() {
      return this.course.content;
    },

    lessonContent() {
      return this.course.lessons;
    }
  },

  methods: {
    truncateContent(content) {
      const maxLength = 500;
      return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
    },
  },

  created() {
    const course = mockCourses.find(course => course.id === +this.$route.params.id)
    return course ? this.course = course : this.$router.push({ name: '404' });
  }
}
</script>

<style scoped>

</style>
