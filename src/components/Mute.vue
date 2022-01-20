<template>
  <section class='flex flex-col h-screen justify-center bg-sky-900 px-2'>
    <div  class="m-auto text-9xl text-white   tracking-tighter  relative w-64 h-40 flex justify-center ">
      <transition name="mute">
      <div v-if="isMuted" class="text-5xl mt-auto absolute z-20  top-1/2 -translate-y-1/2 transform left-[5.5rem]">
      <ion-icon name="close-outline"></ion-icon>
      </div>
      </transition>

      <div @click="isMuted = !isMuted" class="z-30 absolute  top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 origin-center transform transition-all duration-1000 cursor-pointer" :class="[isMuted ? 'rotate-90 pb-12' : '', '' ]" >
        <ion-icon name="volume-off"></ion-icon>
      </div>
      <transition name="music">
      <div v-if="!isMuted" class="text-5xl z-10 absolute top-10 left-36 transform rotate-90">
        <ion-icon name="wifi-outline"></ion-icon>
      </div>
      </transition>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      isMuted : false
    }
  },
  methods: {

  },
}

</script>

<style scoped>
  .music-enter-active,
  .music-leave-active {
    transition: all 300ms ease-in;
  }

  .music-enter-from,
  .music-leave-to {
    opacity: 0;
    transform: scale(0.1);
    
  }

  .mute-enter-active,
  .mute-leave-active {
    transition: all 1000ms ease-out;
  }

  .mute-enter-from,
  .mute-leave-to {
    opacity: 0;
  }

</style>