<template>
  <div class="container mx-auto">
    <div class="header wrapper flex items-center justify-between">
      <div class="header__title">
        <span class="md:text-2xl text-base text-white cursor-pointer" @click="$router.push({name: 'home'})">ultralux</span>
      </div>
      <div class="header__menu">
        <nav class="menu flex flex-row gap-6">
          <router-link class="text-white hover:text-pink-200" :to="{ name: 'courses' }">Courses</router-link>
          <router-link class="text-white hover:text-pink-200" :to="{ name: 'courses-progress' }">Progress</router-link>
        </nav>
      </div>
      <div class="header__logout">
        <span class="md:text-2xl text-base text-white cursor-pointer hover:text-pink-200" @click="logout">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { MUTATION_TYPES } from "@/store/mutationTypes";

export default {
  methods: {
    ...mapMutations('auth', [MUTATION_TYPES.SET_AUTHENTICATION]),
    logout() {
      this[MUTATION_TYPES.SET_AUTHENTICATION](false)
      this.$router.push({ name: 'sign-in' }).catch(() => {});
    }
  }
}
</script>

<style lang="postcss" scoped>
  .header {
    font-family: 'mexcellent3d', sans-serif;
  }
</style>
