<template>
  <section class='flex flex-col h-screen justify-center bg-gray-400 px-2 overflow-hidden'>
    <div class="w-full max-w-md h-24 bg-white mx-auto shadow-xl rounded-b-3xl rounded-t-md relative grid grid-cols-3 p-4 gap-5 z-20">
      <div class="h-28 w-28 rounded-full bg-gray-400 absolute -top-7 p-2  transform -translate-x-1/2 z-20 transition-all duration-1000"  :style="{left: icons[selectedIndex].position }" :class="[icons[selectedIndex].bgClass]" >
        <div class="w-full h-full bg-white rounded-full flex text-7xl" :class="icons[selectedIndex].textClass" >
          <ion-icon class="m-auto pointer-events-none" :name="icons[selectedIndex].name "></ion-icon>

        </div>
      </div>
      <div v-for="(icon,index) in icons" :key="index" class="z-10" >
        <div @click="selectedIndex  = index" class="w-24 rounded-2xl transition-all h-full mx-auto flex text-6xl text-slate-700 cursor-pointer bg-opacity-0 hover:bg-opacity-90 active:bg-opacity-75 " :class="[icon.bgClass,index === selectedIndex ? 'opacity-0 delay-500 bg-opacity-0' : '','']" >
          <ion-icon class="m-auto pointer-events-none" :name="icon.name"></ion-icon>
        </div>
      </div>
    </div>
    <div class="absolute h-full w-screen z-10 top-0 left-0  overflow-hidden" >
      <div class="w-[300vw] flex h-full transform relative transition-all duration-1000" :style="{right: bgPosition}" >
        <div v-for="(icon,index) in icons" :key="index" class=" w-screen h-full" :class="[icon.bgClass]">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      selectedIndex : 0,
      icons : [
        {
          name : "football-outline",
          position : "18%",
          bgClass : "bg-sky-300",
          textClass : "text-sky-700"
        },
        {
          name : "basketball-outline",
          position : "50%",
          bgClass : "bg-orange-300",
          textClass : "text-orange-700"
        },
        {
          name : "bowling-ball-outline",
          position : "82%",
          bgClass : "bg-rose-300",
          textClass : "text-rose-700"
        },
        
      ]
    }
  },
  methods: {

  },
  computed : {
    bgPosition(){
      let percentage = this.selectedIndex * 100;
      return percentage + "%";
    }
  }
}

</script>

<style>

</style>