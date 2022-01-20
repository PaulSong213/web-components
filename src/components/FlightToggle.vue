<template>
  <section class='flex flex-col h-screen justify-center bg-purple-400 px-2'>
    <div @click="fly" class="w-40 h-16 rounded-full mx-auto relative shadow-md shadow-slate-700/50 bg-opacity-80 select-none cursor-pointer overflow-hidden transition-all duration-500" >
      <div  class="w-14 h-14  rounded-full absolute top-1/2 transform -translate-y-1/2 shadow-sm shadow-slate-800/50 flex text-4xl text-white transition-all duration-500 ease-in z-20 bg-white" :class="[isOnFlight ? '-translate-x-full left-[97%] text-sky-400' : 'text-slate-500 left-[3%] ','' ]" >
        <ion-icon class="m-auto pointer-events-none" name="airplane"></ion-icon>
      </div>
      <transition name="fade">
      <div v-if="!isOnFlight" class="h-full w-full py-2  bg-gradient-to-r from-slate-700 via-slate-700 to-slate-700 relative" >
        <div class="h-full w-full flex flex-col justify-between opacity-50">
          <div class="w-full h-0.5 bg-white"></div>
          <div class="w-[200%] h-1 border-4 border-dotted absolute top-1/2 transform -translate-y-1/2"  :class="[isOnRoad ? 'animate-road' :  '','' ]" ></div>
          <div class="w-full h-0.5 bg-white"></div>
        </div>
      </div>
      <div v-else class="h-full w-full py-2  bg-gradient-to-r from-sky-200 via-sky-300 to-sky-500 relative delay-300">
        <div class="h-full w-full flex flex-col justify-between opacity-50 ">
          <div class="text-white text-5xl absolute transform scale-y-50 filter blur-sm animate-cloud -right-10">
            <ion-icon name="cloud"></ion-icon>
          </div>
          <div class="text-white text-5xl absolute transform scale-y-50 filter blur-sm animate-cloud -right-10 -bottom-5" style="animation-delay: 500ms" >
            <ion-icon name="cloud"></ion-icon>
          </div>
          <div class="text-white text-5xl absolute transform scale-y-50 filter blur-sm animate-cloud -right-10 -top-5" style="animation-delay: 1500ms" >
            <ion-icon name="cloud"></ion-icon>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </section>
</template>
<script>

export default {
  data(){
    return {
      isOnRoad : false,
      isOnFlight : false
    }
  },
  methods: {
    fly(){
      let delay = 500;
      if(this.isOnFlight)delay = 0;;

      this.isOnRoad = true;
      setTimeout(()=>{
        this.isOnFlight = !this.isOnFlight;
        this.isOnRoad = false;
      }, delay);
    }
  },
}

</script>

<style scoped >
.animate-cloud {
  animation-name: cloud;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes cloud {
  0% {
    right: 0%;
  }
  100% {
    right: 120%;
  }
}
.animate-road {
  animation-name: road;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes road {
  0% {
    left: 0%;
  }
  100% {
    left: -100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1000ms linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>