<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-cyan-400 bg-gradient-to-br from-cyan-400 to-orange-400"
  >
    <div
      class="relative w-full h-64 max-w-md mx-auto overflow-hidden bg-gray-300 shadow-xl rounded-xl"
    >
      <div
        class="absolute flex justify-end transition-all duration-700 translate-x-12 top-16 right-1/2 bg-slate-900 rounded-3xl"
        :class="[isOpened ? 'w-full h-full' : 'h-16 w-16', '']"
      >
        <button
          @click="isOpened = !isOpened"
          class="relative flex w-16 h-16 text-4xl text-white transition-all bg-slate-900 rounded-3xl hover:bg-opacity-80 active:bg-opacity-100"
        >
          <span class="absolute top-[25%] -translate-x-1/2 left-1/2">
            <ion-icon class="m-auto" name="chevron-down-outline"></ion-icon>
          </span>
          <span
            class="absolute transition-all duration-1000 ease-out -translate-x-1/2 left-1/2"
            :class="[isOpened ? '-rotate-180 top-[30%]' : 'top-[25%]', '']"
          >
            <ion-icon class="m-auto" name="chevron-down-outline"></ion-icon>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isOpened: false
    }
  },
  methods: {

  },
}

</script>

<style>
</style>