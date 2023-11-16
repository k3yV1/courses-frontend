<template>
  <div class="sign-up-component md:p-0 p-2">
    <div class="left-side md:flex justify-center flex-col items-center hidden w-2/5 bg-pink-400 animate-[test_2s_ease-in-out]">
      <span class="text-7xl text-blue-400">ultralux</span>
      <span class="text-7xl text-yellow-400">courses</span>
    </div>
    <div class="right-side flex justify-center items-center md:w-3/5 w-full">
      <form @submit.prevent="onSubmit" class="w-full max-w-sm md:shadow-none shadow-1 md:rotate-0 rounded-xl md:p-0 p-2 md:h-auto h-[250px] flex flex-col justify-center">
        <div class="md:flex md:items-center md:mb-6 mb-3">
          <div class="md:w-full">
            <input v-model="form.email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-400" id="inline-full-name" type="text" placeholder="Your Email" required>
            <span v-if="form.errorMessage" class="text-xs text-red-700 mt-3">{{ form.errorMessage }}</span>
          </div>
        </div>
        <div class="md:flex md:items-center md:flex-col">
          <div class="md:w-full">
            <button class="md:w-auto w-full shadow bg-pink-400 opacity-90 hover:opacity-100 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Sign Up
            </button>
          </div>
          <div class="md:w-full mt-4 flex md:flex-row flex-col md:text-left text-center">
            <span class="text-pink-400 opacity-50">Already have an account? </span><router-link :to="{ name: 'sign-in' }" class="text-pink-400 opacity-100 hover:underline">Sign in!</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { MUTATION_TYPES } from "@/store/mutationTypes";
export default {
  data() {
    return {
      form: {
        email: '',
        errorMessage: ''
      }
    }
  },

  computed: {
    ...mapState('auth', ['isAuthenticated'])
  },

  methods: {
    ...mapMutations('auth', [MUTATION_TYPES.SET_AUTHENTICATION]),

    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    onSubmit() {
      if (!this.validateEmail(this.form.email)) {
        this.form.errorMessage = 'Invalid email address.';
        return;
      }

      this[MUTATION_TYPES.SET_AUTHENTICATION](true)
      this.$router.push({ name: 'home' });
    },
  }
}
</script>

<style lang="postcss">
.sign-up-component {
  @apply flex min-h-screen
}

.left-side {
  font-family: 'mexcellent3d', sans-serif;
}
</style>
