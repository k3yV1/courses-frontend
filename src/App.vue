<template>
  <div id="app">
    <header v-if="showHeader" class="header md:relative fixed w-full z-10 md:py-6 bg-pink-400 md:p-0 p-4">
      <Header class="md:block hidden" />
      <MobileHeader class="md:hidden block" />
    </header>
    <div class="body md:pt-0 pt-20">
      <div class="container-fluid mx-auto">
        <transition name="component-fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
  #app {
    @apply min-h-screen;
  }
</style>
<script>
import Header from "@/components/header/HeaderComponent.vue";
import MobileHeader from "@/components/header/mobile/MobileHeaderComponent.vue";
 export default {
   components: {
     MobileHeader,
     Header
   },

   computed: {
     showHeader() {
       return this.$route.meta.showHeader !== false;
     }
   }
 }
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 0.5s;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
