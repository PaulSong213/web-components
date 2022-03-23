<template>
  <section class="relative flex flex-col justify-center h-screen px-2 transition-all duration-300"
      :class="[!isToggled ? 'bg-emerald-300' : 'bg-purple-300', '']"
  >
    <div
      class="absolute w-56 h-24 transition-all duration-300 -translate-x-1/2 border-t-4 border-b-8 border-yellow-300 rounded-full border-x-8 -scale-y-[30%] left-1/2"
      :class="[!isToggled ? ' top-32' : '-top-[100%] ', '']"
    ></div>
    <div class="relative mx-auto scale-75 sm:scale-100">
      <div class="absolute w-20 h-20 transition-all duration-700 -translate-y-full -right-12"
      :class="[!isToggled ? 'scale-0  top-12' : 'scale-100  top-0', '']"
      >
        <div class="relative w-20 h-20">
          <div class="absolute z-10 w-20 h-20 bg-red-900 rounded-full"></div>
          <div class="absolute z-20 w-20 h-20 bg-purple-300 rounded-full right-8 -top-4"></div>
        </div>
      </div>
      <div class="absolute w-20 h-20 transition-all duration-700 -translate-y-full -left-12 "
      :class="[!isToggled ? 'scale-0  top-12' : 'scale-100  top-0', '']"
      >
        <div class="relative w-20 h-20">
          <div class="absolute z-10 w-20 h-20 bg-red-900 rounded-full"></div>
          <div class="absolute z-20 w-20 h-20 bg-purple-300 rounded-full left-8 -top-4"></div>
        </div>
      </div>
      <button
        @click="isToggled = !isToggled"
        class="relative z-30 w-56 h-24 mx-auto transition-all duration-1000 scale-150 rounded-full"
        :class="[!isToggled ? 'bg-sky-500 ' : 'bg-pink-900 ', '']"
      >
        <div
          class="w-24 h-24 rounded-full scale-[98%] absolute top-1/2 -translate-y-1/2 transition-all duration-1000 z-20"
          :class="[!isToggled ? 'left-px bg-sky-300 ' : 'left-full -translate-x-full bg-pink-700 ', '']"
        ></div>
        <h6
          class="absolute z-10 text-4xl font-bold text-white transition-all duration-500 -translate-y-1/2 top-1/2"
          :class="[isToggled ? 'left-[17%]' : 'left-[90%] -translate-x-full ', '']"
        >
          <span v-if="!isToggled">GOOD</span>
          <span v-else>BAD</span>
        </h6>
      </button>
    </div>
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