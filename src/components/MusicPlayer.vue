<template>
  <section class="h-screen flex flex-col justify-center bg-gradient-to-br from-pink-300 via-pink-200 to-pink-300">

    <transition name="fade-top">
    <div v-if="isPlaying" class="h-24 bg-pink-300 rounded-xl absolute top-24 z-10 w-full max-w-xs left-1/2 transform -translate-x-1/2 pl-28 pr-4 pt-2">
      <div class="w-full pt-2 h-full">
        <h1 class="text-gray-800 text-lg font-bold leading-4">Pagsamo</h1>
        <h6 class="text-gray-700 font-semibold text-xs mt-1">Arthur Nery</h6>

        <div  class="my-2">
          <div class="h-1 rounded-full bg-gray-100 w-full">
            <div class="h-1 rounded-full bg-pink-400 animate-loader" :class="[!isPlaying ? 'pause-animation' : '','']"></div>
          </div>

        </div>

      </div>
    </div>
    </transition>
    <div class="max-w-sm h-28 mx-auto relative z-20">
      
      <div class="bg-pink-100 w-full  shadow-2xl rounded-lg flex px-8 space-x-8 h-full z-30">
        <section class="w-20 h-20 flex relative rounded-full shadow-2xl my-auto transition-all duration-500" :class="[isPlaying ? 'transform scale-150 -translate-y-10 shadow-xl' : '','']">
        <div  :class="[!isPlaying ? 'pause-animation' : '','']" class="w-20 h-20 bg-pink-400 rounded-full my-auto flex overflow-hidden animate-disk z-30">
          <img class="relative min-h-full min-w-full z-10 select-none" :src="song.image" alt="">
        </div>
        <div class="w-5 h-5 z-30  rounded-full bg-pink-100 m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </section>

        <section class="w-full flex justify-center space-x-2 text-purple-400 text-4xl">
          <div class="my-auto hover:bg-pink-500 hover:text-pink-200 p-3 rounded-md flex flex-col justify-center cursor-pointer transition-all duration-300 hover:shadow-md active:bg-pink-400">
            <ion-icon name="play-back"></ion-icon>
          </div>
          <div @click="isPlaying = !isPlaying" class="my-auto hover:bg-pink-500 hover:text-pink-200 p-3 rounded-md flex flex-col justify-center cursor-pointer transition-all duration-300 hover:shadow-md active:bg-pink-400">
            <transition name="fade">
              <ion-icon v-if="!isPlaying" name="play"></ion-icon>
              <ion-icon v-else name="pause"></ion-icon>
            </transition>
          </div>
          <div class="my-auto hover:bg-pink-500 hover:text-pink-200 p-3 rounded-md flex flex-col justify-center cursor-pointer transition-all duration-300 hover:shadow-md active:bg-pink-400">
            <ion-icon name="play-forward"></ion-icon>
          </div>
        </section>
      </div>
      
    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      isPlaying : false,
      song : {
        image : "https://images.unsplash.com/photo-1517210122415-b0c70b2a09bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
      }
    }
  }
}
</script>

<style >
.animate-loader {
  animation: loader linear infinite 30000ms;
}

.animate-disk {
  animation: disk-spin linear infinite 5000ms;
}
.pause-animation {
  animation-play-state: paused;
}
@keyframes disk-spin {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
@keyframes loader {
  from {width: 0%;}
  to {width: 100%;}
}

.fade-top-enter-active{
  transition: all 800ms linear;
}
.fade-top-leave-active {
  transition: all 200ms linear;
}

.fade-top-enter-from,
.fade-top-leave-to {
    opacity: 0;
    margin-top: 100px;   
}
</style>