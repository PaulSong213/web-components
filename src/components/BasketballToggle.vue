<template>
  <section class="flex flex-col justify-center h-screen px-2 bg-cyan-600">
    <button
      @click="isToggled = !isToggled"
      class="relative h-20 mx-auto overflow-hidden rounded-full sm:scale-150 w-60 bg-slate-900 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900"
    >
      <h6 class="absolute z-30 text-xs -translate-x-1/2 top-1 text-cyan-300 left-1/2">
        <transition name="fade">
        <span v-if="isToggled" class="ad-title">
          In-Game
        </span>
        <span v-else class="ad-title text-amber-400">
          Waiting
        </span>
        </transition>
      </h6>
      <div
        class="absolute z-20 w-8/12 h-10 -translate-x-1/2 -translate-y-1/2 bg-amber-400/90 top-1/2 left-1/2"
      >
        <div class="relative w-full h-full">
          <div class="absolute top-0 left-0 h-full py-1">
            <div
              class="w-10 h-full py-2 pr-2 bg-transparent border-r rounded-r-full border-y border-slate-800"
            >
              <div class="w-5/6 h-full border-r border-y border-slate-800"></div>
            </div>
          </div>
          <div class="absolute top-0 flex flex-col h-full -translate-x-1/2 left-1/2">
            <div class="flex-grow w-px mx-auto bg-slate-800"></div>
            <div class="w-6 h-6 mx-auto border rounded-full border-slate-800"></div>
            <div class="flex-grow w-px mx-auto bg-slate-800"></div>
          </div>
          <div class="absolute top-0 right-0 h-full py-1 rotate-180">
            <div
              class="w-10 h-full py-2 pr-2 bg-transparent border-r rounded-r-full border-y border-slate-800"
            >
              <div class="w-5/6 h-full border-r border-y border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="absolute z-20 h-24 -rotate-90 -right-3 -top-2 filter brightness-200"
        src="https://images.vexels.com/media/users/3/229584/isolated/preview/f44dd09fbf854063844fb213a1cdfd30-basketball-basket-up-stroke.png"
      />

      <div
        class="absolute z-40 flex w-16 h-16 overflow-hidden transition-all duration-1000 -translate-y-1/2 bg-pink-700 rounded-full text-9xl top-1/2 bg-gradient-to-br from-pink-400 via-pink-700 to-pink-700 text-slate-900"
        :class="[isToggled ? 'left-[80%] -translate-x-1/2 rotate-180' : 'left-2' , 'first-letter:', isShooted ? 'scale-50' : 'scale-100','' ]"
      >
        <ion-icon class="h-16 m-auto leading-none scale-150" name="basketball-outline"></ion-icon>
      </div>
    </button>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isToggled: false,
      isShooted : false,
    }
  },
  methods: {

  },
  watch : {   
    isToggled(isToggled){
      let delay = 1000;
      if(!isToggled)delay = 500;
      setTimeout(() => {
        this.isShooted = isToggled;
      }, delay);
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.ad-title{
  font-family: 'Press Start 2P', cursive;
}
</style>