<template>
  <section
    class="relative flex flex-col justify-center h-screen px-2 bg-sky-400 bg-gradient-to-r from-sky-400 to-green-bg-sky-400"
  >
  
  <transition name="fade">
  <section v-if="isOn" class="absolute top-0 left-0 w-screen h-screen bg-sky-400 bg-gradient-to-br from-sky-400 to-green-400 "> </section>
  <section v-else class="absolute top-0 left-0 w-screen h-screen bg-purple-400 bg-gradient-to-br from-orange-400 to-purple-400 "> </section>
  </transition>
 
    <div
      class="relative z-40 justify-between w-full h-64 max-w-md mx-auto rounded-sm shadow-xl bg-stone-100"
    >
      <button
        @click="isOn = !isOn"
        class="absolute flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        <button
          class="relative h-24 transition-all duration-1000 border-4 rounded-full w-44 border-slate-700"
          :class="[!isOn ? 'bg-transparent' : 'bg-black', '']"
        >
          <div
            class="w-[5rem] h-[5rem] absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 z-20"
            :class="[!isOn ? 'bg-slate-900 left-px' : 'bg-slate-100 left-full -translate-x-full', '']"
          ></div>
          <h6
            class="absolute z-10 w-20 font-bold transition-all duration-1000 -translate-y-1/2 right-2 top-1/2 text-8xl text-slate-800"
            :class="[!isOn ? 'opacity-100' : 'opacity-0', '']"
          >
            <span>F</span>
          </h6>
        </button>
        <h6 class="w-20 font-bold text-8xl text-slate-800">
          <transition name="fade">
            <span v-if="isOn">N</span>
            <span v-else>F</span>
          </transition>
        </h6>
      </button>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isOn: false
    }
  },
  methods: {

  },
}

</script>

<style>
</style>