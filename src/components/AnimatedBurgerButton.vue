<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-purple-900 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-700"
  >
    <button
      @click="isToggled = !isToggled"
      class="relative w-32 h-16 mx-auto scale-150">
      <div
        class="h-3 w-20 bg-white absolute -left-0.5  transition-all duration-700 rounded-full delay-300"
        :class="[isToggled ? 'top-0 rotate-45' : 'top-3', '']"
      ></div>
      <div
        class="h-3 w-20 bg-white absolute -right-0.5  transition-all duration-700 rounded-full delay-500"
        :class="[isToggled ? 'top-0 -rotate-45' : 'top-3', '']"
      ></div>
      <div
        class="absolute w-20 h-3 transition-all duration-700 delay-700 bg-white rounded-full"
        :class="[isToggled ? 'bottom-0 -rotate-45 -left-0.5 ' : 'bottom-3 -left-0.5 ', '']"
      ></div>
      <div
        class="absolute w-20 h-3 transition-all duration-700 bg-white rounded-full delays-1000"
        :class="[isToggled ? 'bottom-0 rotate-45 -right-0.5' : 'bottom-3 -right-0.5' ,'' ]"
      ></div>
    </button>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isToggled: true
    }
  },
  methods: {

  },
}

</script>

<style>
</style>