<template>
  <div class="lesson md:py-8 p-4">
    <div class="container mx-auto">
      <div class="lesson__wrapper">
        <a @click="$router.go(-1)" class="md:hidden block mb-2 cursor-pointer">
          <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg>
        </a>
        <div class="lesson__box md:order-1 order-2">
          <div class="box__title" v-html="lessonData.title"></div>
          <div
            ref="lessonContent"
            class="box__content mt-6 px-4 py-2 border rounded-2xl overflow-y-auto h-[150px]"
            v-html="lessonData.content"
            @scroll="checkScroll">
          </div>
        </div>
        <div class="lesson__buttons md:mt-6 mt-3 flex md:flex-row flex-col md:justify-between">
          <button @click="$router.go(-1)" class="md:block hidden md:w-auto w-full back bg-pink-400 opacity-90 text-white px-4 py-2 rounded hover:opacity-100">Return Back</button>
          <div class="lesson__timer md:mb-0 mb-3">
              Time: {{ formatTime(timer) }}
          </div>
          <button @click="done" :disabled="isButtonDisabled" class="back bg-green-700 opacity-90 text-white px-4 py-2 rounded hover:opacity-100">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockCourses } from "@/mocks/mock_courses";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      lessonData: null,
      isButtonDisabled: true,
      timer: 0,
      timerInterval: null
    }
  },

  created() {
    const lesson = mockCourses.flatMap(c => c.lessons).find(l => l.id === +this.$route.params.id)
    if (lesson) {
      this.lessonData = lesson;

      this.startTimer();
    } else  {
      this.$router.push({ name: '404' })
    }
  },

  beforeDestroy() {
    clearInterval(this.timerInterval);
  },

  computed: {
    ...mapState("lesson", ["lesson"]),
  },

  methods: {
    ...mapMutations('lesson', ['COMPLETE_LESSON']),
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timer += 1
      }, 1000)
    },

    stopTimer() {
      clearInterval(this.timerInterval);
    },

    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    },

    done() {
      this.stopTimer();

      this.COMPLETE_LESSON({
        completeLesson: {
          value: { id: this.lessonData.id, title: this.lessonData.title },
          results: [{
            timer: this.formatTime(this.timer),
            passDate: new Date().toLocaleDateString(),
          }]},
      });

      setTimeout(() => {
        this.$router.go(-1)
      }, 1000)
    },

    checkScroll() {
      const lessonContent = this.$refs.lessonContent;
      if (lessonContent) this.isButtonDisabled = lessonContent.scrollHeight - lessonContent.scrollTop !== lessonContent.clientHeight;
    },
  }
}
</script>

<style scoped>
.lesson__buttons button:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}
</style>
