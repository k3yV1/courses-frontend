<template>
  <div class="404 container mx-auto md:py-8 p-4">
    <div class="404__message flex flex-col justify-center text-center md:gap-6 gap-3">
      <span>Oops ;) wrong URL address ? click the button for authorization</span>
      <router-link class="md:w-auto w-full" :to="{ name: 'sign-in'}">
        <button class="btn-more bg-pink-400 md:w-auto w-full opacity-90 text-white px-4 py-2 rounded hover:opacity-100">Authorization</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
