<template>
  <div class="course-progress md:py-8 p-4">
    <div class="container mx-auto">
      <a @click="$router.go(-1)" class="md:hidden block mb-2 cursor-pointer">
        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg>
      </a>
      <div class="course-progress__table-progress md:whitespace-normal whitespace-nowrap">
        <div class="relative overflow-x-auto">
          <table v-if="getCompleteLesson.length > 0" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-pink-400 dark:bg-pink-400 dark:text-gray-400">
            <tr>
              <th scope="col" class="md:px-6 md:py-3 px-3 py-2 md:text-base text-xs">
                Lesson name
              </th>
              <th scope="col" class="md:px-6 md:py-3 px-3 py-2 md:text-base text-xs">
                Count Attempt
              </th>
              <th scope="col" class="md:px-6 md:py-3 px-3 py-2 md:text-base text-xs">
                Time
              </th>
              <th scope="col" class="md:px-6 md:py-3 px-3 py-2 md:text-base text-xs">
                Date of last passage
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="lesson in getCompleteLesson" :key="lesson.completeLesson.id">
              <th scope="row" class="md:px-6 md:py-4 px-3 py-2" v-html="lesson.completeLesson.value.title"></th>
              <td class="px-6 py-4">{{ lesson.completeLesson.results.length }}</td>
              <td class="px-6 py-4">
                <ul class="max-h-8 overflow-auto">
                  <li v-for="result in lesson.completeLesson.results" :key="result.timer">
                    {{ result.timer }}
                  </li>
                </ul>
              </td>
              <td class="px-6 py-4">{{ lesson.completeLesson.results[lesson.completeLesson.results.length - 1].passDate }}</td>
            </tr>
            </tbody>
          </table>
          <div v-else class="flex justify-center">
            <div role="status">
              <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
      <div class="course-progress__button-back md:mt-6 mt-3">
        <button @click="$router.go(-1)" class="md:block hidden md:w-auto w-full back bg-pink-400 opacity-90 text-white px-4 py-2 rounded hover:opacity-100">Return Back</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('lesson', ['getCompleteLesson'])
  }
}
</script>

<style scoped>

</style>
