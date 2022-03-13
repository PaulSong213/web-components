<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-lime-400 bg-gradient-to-br from-cyan-400 to-violet-500"
  >
    <div
      class="relative flex justify-between w-full h-64 max-w-md mx-auto bg-stone-100 shadow-xl rounded-xl overflow-hidden"
    >
      <div class="h-44 w-full sm:w-9/12 bg-white shadow-xl rounded-br-2xl z-40 px-7 py-10 overflow-hidden space-y-5">
        <div class="flex space-x-3">
          <button class="border border-slate-900 w-12 h-12 rounded-lg flex items-center shrink-0">
            <ion-icon class="m-auto" name="chevron-back-outline"></ion-icon>
          </button>
          <button
            @click="isSharing = !isSharing"
            class="bg-slate-900 h-12 rounded-lg active:bg-opacity-90 transition-all text-slate-300 text-xs uppercase justify-around relative shrink-0"
            :class="[isSharing ? 'w-12 delay-500' : 'w-40 ', '']"
          >
            <transition name="fade-sharing">
              <div
                v-if="!isSharing"
                class="flex justify-around absolute top-1/2 -translate-y-1/2 w-40"
              >
                <h6 class="my-auto font-black">Share Video</h6>
                <ion-icon class="text-lg my-auto" name="videocam"></ion-icon>
              </div>
              <div v-else class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ion-icon class="text-lg my-auto" name="close"></ion-icon>
              </div>
            </transition>
          </button>
          <div
            class="flex-grow w-10 overflow-hidden flex transition-all duration-500 gap-2"
            :class="[!isSharing ? ' pl-24' : 'pl-0 delay-700', '']"
          >
            <button
              @click="isSharing = flase"
              v-for="share in shareOptions"
              class="bg-slate-900 h-12 rounded-lg active:bg-opacity-80 transition-all text-slate-300 text-xs uppercase justify-around relative w-12 delay-500 flex-shrink-0"
            >
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ion-icon class="text-lg my-auto" :name="share"></ion-icon>
              </div>
            </button>
          </div>
        </div>
        <div class="flex justify-end gap-3">
          <div class="flex gap-1">
            <div class="h-2 w-2 bg-slate-900 my-auto"></div>
            <div class="h-2 w-8 bg-slate-900 my-auto"></div>
          </div>
          <h6 class="text-slate-900 font-black text-2xl uppercase">Your video</h6>
        </div>
      </div>
      <div
        class="h-[90%] w-9/12 bg-emerald-500 shadow-sm rounded-bl-2xl z-10 absolute right-0 top-0"
      ></div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isSharing: false,
      shareOptions : [
        'logo-facebook',
        'logo-twitter',
        'logo-instagram'
      ]
    }
  },
  methods: {

  },
}

</script>

<style scope>
.fade-sharing-enter-active,
.fade-sharing-leave-active {
  transition: all 400ms linear;
}

.fade-sharing-enter-from,
.fade-sharing-leave-to {
  opacity: 0;
}
</style>