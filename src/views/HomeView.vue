<template>
  <div class="home">
    <div class="container mx-auto md:py-8 p-4">
      <div class="home__title">
        <span>Online programming courses</span>
      </div>
      <div class="home__button md:mt-6 mt-3">
        <button class="btn__learn-more border md:p-4 p-2 md:text-lg text-base bg-pink-400 text-white rounded-xl border-pink-400 opacity-100 hover:opacity-90" @click="$router.push({name: 'courses'})">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style lang="postcss">
  .home {
    font-family: 'Manrope', sans-serif;
    @apply min-h-screen flex justify-center text-center md:py-10 md:text-4xl;
  }
</style>
