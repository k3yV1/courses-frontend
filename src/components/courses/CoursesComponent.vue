<template>
  <div class="courses container mx-auto md:py-8 p-4">
    <div class="courses__box-cards grid md:grid-cols-2 grid-cols-1 gap-6 w-full">
      <div v-for="course in courses" :key="course.id" class="box-cards__card md:p-8 p-4 flex flex-col border rounded-2xl">
        <div class="card__title mb-3" v-html="course.content[0].title"></div>
        <div class="card__subtitle mb-6" v-html="course.content[0].subtitle"></div>
        <div class="card__description" v-html="course.content[0].description"></div>
        <div class="card__action md:mt-6 mt-3 flex justify-end items-center">
          <router-link class="md:w-auto w-full" :to="{ name: 'course-details', params: { id: course.id }}">
            <button class="btn-more bg-pink-400 md:w-auto w-full opacity-90 text-white px-4 py-2 rounded hover:opacity-100">Read more</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  computed: {

  }
}
</script>

<style scoped>
 .courses {
   font-family: 'Manrope', sans-serif;
 }
</style>
