<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-emerald-500 bg-gradient-to-br from-cyan-500 via-emerald-400 to-cyan-500"
  >
    <div
      class="relative flex flex-col justify-center w-full h-64 max-w-md mx-auto overflow-hidden bg-gray-100 rounded-sm shadow-xl"
    >
      <button @click="isOpened = !isOpened" class="relative w-48 h-48 mx-auto transition-all rounded-xl shadow-emerald-500/50">
        <div
          class="absolute h-4 transition-all duration-1000 -translate-x-1/2 rounded-full w-44 bg-slate-800 left-1/2 "
          :class="[isOpened ? 'top-20 rotate-45' : 'top-[3.5rem]', '']"
        ></div>
        <div
          class="absolute h-4 transition-all duration-1000 -translate-x-1/2 rounded-full w-44 bg-slate-800 left-1/2"
          :class="[isOpened ? 'top-20 -rotate-45' : 'top-[6rem]', '']"
        ></div>

        <div
          class="absolute flex justify-around h-4 font-black tracking-widest transition-all duration-1000 -translate-x-1/2 rounded-full w-44 left-1/2"
          :class="[isOpened ? 'top-[200%] -rotate-45' : 'top-[8.5rem]', '']"
        >
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>U</span>
        </div>
      </button>
    </div>
  </section>
</template>
<script>

export default {
  data() {
    return {
      isOpened: false,
    }
  },
  methods: {

  },
}

</script>

<style>
</style>