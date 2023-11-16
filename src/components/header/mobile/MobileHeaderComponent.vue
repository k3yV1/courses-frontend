<template>
  <div class="container mx-auto">
    <div class="header wrapper flex items-center justify-between">
      <div class="header__title">
        <span class="md:text-2xl text-base text-white cursor-pointer" @click="$router.push({name: 'home'})">ultralux</span>
      </div>
      <div class="mobile-header__hamburger-menu cursor-pointer" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path></g></g>
        </svg>
      </div>
      <div :class="{ 'active': isActive }" class="mobile-header__menu min-h-screen absolute py-4 bg-pink-400 top-14 left-0 right-0 z-10">
        <nav class="menu">
          <div class="container mx-auto p-4">
            <div class="menu__box flex flex-col gap-6">
              <router-link class="text-white hover:text-pink-200" :to="{ name: 'courses' }" @click="closeMenu">Courses</router-link>
              <router-link class="text-white hover:text-pink-200" :to="{ name: 'courses-progress' }" @click="closeMenu">Progress</router-link>
              <span class="md:text-2xl text-base text-white cursor-pointer hover:text-pink-200" @click="logoutAndCloseMenu">Logout</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { MUTATION_TYPES } from "@/store/mutationTypes";

export default {
  data() {
    return {
      isActive: false
    }
  },

  methods: {
    ...mapMutations('auth', [MUTATION_TYPES.SET_AUTHENTICATION]),
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    closeMenu() {
      this.isActive = false
    },
    logoutAndCloseMenu() {
      this[MUTATION_TYPES.SET_AUTHENTICATION](false)
      this.$router.push({ name: 'sign-in' }).catch(() => {});
    }
  },

  watch: {
    '$route' () {
      this.isActive = false
    }
  }
}
</script>

<style lang="postcss" scoped>
.header {
  font-family: 'mexcellent3d', sans-serif;
}

.mobile-header__menu {
  display: none;
}

.mobile-header__menu.active {
  display: block;
}
</style>
