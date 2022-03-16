<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-sky-500 bg-gradient-to-br from-sky-500 to-green-500"
  >
    <div
      class="relative flex flex-col justify-center w-full h-64 max-w-md mx-auto overflow-hidden bg-gray-100 rounded-md shadow-xl"
    >
      <div
        class="flex w-64 h-20 gap-4 p-4 ml-16 overflow-hidden scale-150 rounded-r-xl bg-cyan-400"
      >
        <div class="relative flex flex-col w-5 gap-2">
          <div
            class="absolute w-5 h-5 transition-all duration-700 delay-100 rounded-full bg-cyan-500"
            :class="[selectedIndex === 0 ? '-top-full' : 'top-0', '']"
          ></div>
          <div
            class="absolute w-5 h-5 transition-all duration-700 rounded-full bg-cyan-900"
            :class="[selectedIndex === 0 ? 'top-0 ' : 'top-7', '']"
          ></div>
          <div
            class="absolute w-5 h-5 transition-all duration-700 delay-100 rounded-full bg-cyan-500"
            :class="[selectedIndex === 0 ? 'top-7 ' : 'top-[200%]', '']"
          ></div>
        </div>
        <div class="flex flex-col w-full gap-1">
          <button
            @click="selectedIndex = 0"
            class="w-full transition-all duration-500"
            :class="[selectedIndex === 0 ? 'text-slate-900 ' : 'text-slate-800', '']"
          >
            <h6 class="w-full text-left">Front-end Development</h6>
          </button>
          <button
            @click="selectedIndex = 1"
            class="transition-all duration-500"
            :class="[selectedIndex === 1 ? 'text-slate-900 ' : 'text-slate-800', '']"
          >
            <h6 class="w-full text-left">Back-end Development</h6>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      selectedIndex: 0,
    }
  },
  methods: {

  },
}

</script>

<style>
</style>