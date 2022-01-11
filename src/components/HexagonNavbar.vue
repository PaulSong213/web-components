<template>
  <section class='flex flex-col h-screen justify-center bg-purple-400 bg-gradient-to-bl from-purple-400 to-purple-500 px-2'>
    <div class="w-full max-w-xs h-16 bg-white rounded-b-3xl shadow-md shadow-purple-400/50 mx-auto flex justify-between px-3 py-2 relative">
      <div v-for="(icon,index) in icons" :key="index" class="select-none" >
        <div v-if="icon.name !== 'add'" @click="isAdding = false" class="text-3xl my-auto text-purple-500 cursor-pointer bg-purple-200 rounded-full w-10 h-10 flex transition-all bg-opacity-0 hover:bg-opacity-80 hover:scale-110 transform active:scale-90 active:bg-opacity-100">
          <ion-icon class="m-auto" :name="icon.name"></ion-icon>
        </div>
        <div v-else @click="isAdding = !isAdding" class="text-2xl my-auto p-1 cursor-pointer flex transition-all relative text-white w-12 h-12 -mt-2 text-center hover:scale-110 transform active:scale-90">
          <img class="absolute left-1/2 transform -translate-x-1/2 z-20" src="https://www.nicepng.com/png/full/36-360901_clipart-black-and-white-stock-hexagon-clipart-pink.png" alt="">
          <ion-icon class="z-20 m-auto" :name="icon.name"></ion-icon>
        </div>
      </div>
      <transition name="addPop">
      <div v-if="isAdding" class="w-3/4 h-10 bg-pink-100 bg-opacity-80 z-10 rounded-lg filter backdrop-blur-sm absolute bottom-[110%] left-1/2 -translate-x-1/2 transform flex justify-between overflow-hidden px-3">
        <div v-for="(icon,index) in addIcons" :key="index" @click="isAdding = false"  class="select-none my-auto" >
          <div class="text-lg my-auto text-purple-500 cursor-pointer bg-purple-50 rounded-full w-6 h-6 p-1 flex transition-all bg-opacity-0 hover:bg-opacity-80  active:bg-opacity-100">
            <ion-icon class="m-auto" :name="icon.name"></ion-icon>
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
      isAdding : false,
      icons : [
        {
          name : "nuclear-outline"
        },
        {
          name : "planet-outline"
        },
        {
          name : "add",
        },
        {
          name : "earth-outline"
        },
        {
          name : "cog-outline"
        },
        
      ],
      addIcons : [
        {
          name : "pizza"
        },
        {
          name : "podium"
        },
        {
          name : "radio"
        },
        {
          name : "prism"
        },
        {
          name : "qr-code"
        },
        
      ]
    }
  },
}
</script>
<style>
  .addPop-enter-active,
  .addPop-leave-active {
    transition: all 300ms ease-in-out;
  }

  .addPop-enter-from,
  .addPop-leave-to {
      opacity: 0.5;
      width: 0;
      margin-bottom: -3rem;
  }
</style>