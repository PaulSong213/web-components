<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-cyan-400 bg-gradient-to-br from-cyan-300 via-sky-200 to-green-300"
  >
    <button @click="isLocked = !isLocked" 
    class="relative mx-auto transition-all duration-1000 sm:scale-150 h-28 w-60"
    :class="[isLocked ? 'bg-pink-400' : 'bg-green-400', '']"
    >
      <div
        class="bg-white h-[6.5rem] w-1/2 absolute top-1/2 -translate-y-1/2 transition-all duration-1000 z-10"
        :class="[!isLocked ? 'left-[98%] -translate-x-full' : 'left-[2%]', '']"
      ></div>
      <div class="absolute top-0 z-20 grid grid-cols-2 h-28 w-60">
        <div class="relative flex items-center h-full col-span-1 overflow-hidden">
          <span class="z-10 m-auto text-pink-600 transition-all duration-500 text-7xl"
          >
            <ion-icon class="m-auto pointer-events-none" name="lock-closed-sharp"></ion-icon>
          </span>
          <div class="absolute z-30 h-full transition-all duration-1000 w-28"
          :class="[isLocked ? 'right-full bg-pink-400' : 'right-0 bg-green-400', '']"
          ></div>
        </div>
        <div class="relative flex items-center h-full col-span-1 overflow-hidden">
          <span class="z-10 m-auto text-green-600 transition-all duration-500 text-7xl"
          >
            <ion-icon class="m-auto pointer-events-none" name="lock-open-sharp"></ion-icon>
          </span>
          <div class="absolute z-30 h-full transition-all duration-1000 w-28"
          :class="[!isLocked ? 'left-full bg-green-400' : 'left-0 bg-pink-400', '']"
          ></div>
        </div>
      </div>
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isLocked: true
    }
  },
  methods: {

  },
}

</script>

<style>
</style>