<template>
  <section
    class="flex flex-col justify-center h-screen px-2 transition-all duration-1000"
    :class="[isDarkMode ? 'bg-slate-900' : 'bg-white', '']"
  >
    <button
      @click="isDarkMode = !isDarkMode"
      class="flex mx-auto space-x-1 scale-125 text-7xl"
      :class="[isDarkMode ? 'text-white' : 'text-slate-900', '']"
    >
      <h6 class="title">SW</h6>
      <div class="flex flex-col w-10 h-full gap-2 px-2">
        <div
          class="w-2 h-2 mx-auto border rounded-full"
          :class="[isDarkMode ? 'border-white bg-white' : 'border-slate-800 bg-black', '']"
        ></div>
        <div
          class="flex flex-col flex-grow"
          :class="[isDarkMode ? 'flex-col' : 'flex-col-reverse', 'first-letter:']"
        >
          <div class="w-full h-full bg-gray-700"></div>
          <div class="w-full h-full bg-gray-400"></div>
        </div>
        <div
          class="w-2 h-2 mx-auto border rounded-full"
          :class="[isDarkMode ? 'border-white bg-black' : 'border-slate-800 bg-white', '']"
        ></div>
      </div>
      <h6 class="title">TCH</h6>
    </button>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isDarkMode: true
    }
  },
  methods: {

  },
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");

.title {
  font-family: "Archivo Black", sans-serif;
}
</style>