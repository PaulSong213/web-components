<template>
  <section class="bg-green-400 h-screen flex flex-col justify-center">

    <div  class=" mx-auto w-36 h-36 rounded-full grid grid-cols-2 text-center pb-14 overflow-hidden text-xl text-green-800 absolute left-1/2 -translate-x-1/2 -mt-16 transform z-10 transition-all duration-700" :class="[isMoreOptionOpened ? 'rotate-0' : '-rotate-180 opacity-0','']">
      <div @click="isMoreOptionOpened = false" class="col-span-2 flex flex-col justify-center bg-white pt-1">
        <div class="m-auto  hover:bg-green-500 active:bg-green-400 hover:text-green-50 cursor-pointer transition-all duration-300   p-2 rounded-full">
          <ion-icon class="block m-auto -mt-0.5" name="camera"></ion-icon>
        </div>
      </div>
      <div @click="isMoreOptionOpened = false" class="col-span-1 flex flex-col justify-center bg-white">
        <div class="m-auto  hover:bg-green-500 active:bg-green-400 hover:text-green-50 cursor-pointer transition-all duration-300   p-2 rounded-full ">
          <ion-icon class="block m-auto -mt-0.5" name="videocam"></ion-icon>
        </div>
      </div>
      <div @click="isMoreOptionOpened = false" class="col-span-1 flex flex-col justify-center bg-white">
        <div class="m-auto  hover:bg-green-500 active:bg-green-400 hover:text-green-50 cursor-pointer transition-all duration-300   p-2 rounded-full ">
          <ion-icon class="block m-auto -mt-0.5" name="albums"></ion-icon>
        </div>
      </div>
      <div class="col-span-2 h-16 overflow-hidden">
        
      </div>
    </div>

    <nav class="grid grid-cols-5 w-full max-w-sm bg-white px-4 py-2 rounded-t-sm rounded-b-2xl mx-auto text-2xl gap-2 z-20">
      <div v-for="(icon,index) in navIcons" :key="index"  @click="setNewActive(index)" class="text-center  flex flex-col justify-center p-3 rounded-xl hover:bg-green-500 active:bg-green-400 transition-all duration-300 hover:text-green-50 active:scale-50 transform" :class="[activeIndex === index ? 'text-green-700 bg-opacity-0 cursor-default' : 'text-gray-500  bg-opacity-100 cursor-pointer' , '']">
        <ion-icon  :class="[index === 2 ? 'text-4xl' : '','']" class="block m-auto" :name="icon"></ion-icon>
      </div>
    </nav>

  </section>
</template>

<script>
export default {
  data(){
    return {
      isMoreOptionOpened : false,
      activeIndex : 0,
      navIcons : [
        "home",
        "search",
        "add-circle",
        "share-social",
        "calendar-number"
      ]
    }
  },
  methods:{
    setNewActive(index){
      if(index === 2){
        this.isMoreOptionOpened = !this.isMoreOptionOpened;
      }
      this.activeIndex = index;
    }
  }
}
</script>

<style scoped>
.spin-enter-active {
  transition: all 1000ms ease-in;
}

.spin-enter-from{
    opacity: 5;
    transform: rotate(90deg);
}
</style>