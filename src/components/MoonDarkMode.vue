<template>
  <section class="flex flex-col justify-center h-screen px-2 transition-all duration-700" :class="[isDarkMode ? 'bg-slate-900' : 'bg-slate-200' ,'' ]" >
    <button
      @click="isDarkMode = !isDarkMode"
      class="relative h-24 mx-auto overflow-hidden rounded-full shadow-xl sm:scale-150 w-52 bg-slate-800"
    >
      <div
        class="h-[5.5rem] w-[5.5rem] bg-amber-400 rounded-full top-1/2  absolute -translate-y-1/2 transition-all duration-1000 z-10"
        :class="[isDarkMode ? 'left-[99%] -translate-x-full' : 'left-[1%]', '']"
      ></div>
      <div
        class="h-[4.7rem] w-[4.7rem] bg-slate-800 rounded-full top-1/2  absolute -translate-y-1/2 transition-all duration-1000 z-20 delay-100"
        :class="[isDarkMode ? 'left-[85%] -translate-x-full' : '-left-[100%]', '']"
      ></div>
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isDarkMode: false,
    }
  },
  methods: {

  },
}

</script>

<style>
</style>