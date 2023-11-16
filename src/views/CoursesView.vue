<template>
  <div class="courses-view">
    <Courses :courses="courses" />
  </div>
</template>
<script>
import Courses from "@/components/courses/CoursesComponent.vue";
import { mapActions, mapState } from 'vuex'
 export default {
   components: {
     Courses
   },

   computed: {
     ...mapState('courses', ['courses'])
   },

   methods: {
     ...mapActions('courses', ['fakeFetchCourses']),
     fetchCourses() {
       this.fakeFetchCourses()
     }
   },

   created() {
     this.fetchCourses()
   },
 }
</script>
