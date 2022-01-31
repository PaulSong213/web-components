<template>
  <section class='flex flex-col h-screen justify-center bg-blue-600 bg-gradient-to-br from-blue-500 via-blue-500 to-sky-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-sky-50  h-64 shadow-xl shadow-sky-600/50 flex justify-between relative overflow-hidden'>
      <div class="absolute z-20 h-40 left-6 top-3">
        <img class="h-32 mx-auto" src="https://ouch-cdn2.icons8.com/XbOTI-xltWTtWwH_dDQoE3HAx4XwIBqjqFir-mx57kM/rs:fit:256:266/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjM2/L2FhMGM3MGIwLWUw/ZmMtNGFmNy05MmJi/LWJiMzc1OGZkZGFk/MS5wbmc.png" alt="">
        <h6 class="text-3xl font-black uppercase my-2 tracking-wider text-white">Hit or Miss</h6>
        <button @click="download" class="bg-slate-900 hover:bg-slate-800 active:bg-slate-900 transition-all flex space-x-2 text-white  rounded-md text-xs relative" :class="[isDownloading ? 'w-36 h-1' : 'w-24 h-auto p-2' , ''  ]" >
          <div class="transition-all" :class="[isDownloading ? 'absolute  scale-150 transform -translate-x-full -top-0.5' : 'block -mb-0.5' , '', isLoading ? 'left-full duration-[2500ms]' : 'left-2 duration-500', ''  ]" >
            <ion-icon v-if="!isDownLoaded"  class="text-md pointer-events-none" name="logo-google-playstore"></ion-icon>
            <ion-icon v-else  class="text-md pointer-events-none" name="game-controller"></ion-icon>
          </div>
          <h6 v-if="!isDownloading && !isDownLoaded" class="my-auto font-bold">Download</h6>
          <h6 v-if="isDownLoaded" class="my-auto font-bold">Play Now</h6>
        </button>
      </div>
      <div class="absolute h-40 bg-blue-600 bg-gradient-to-br from-blue-500 via-blue-500 to-sky-400 w-full transform rotate-[-8deg] scale-x-125 bottom-0 z-10"></div>
      <div class="h-4/6 w-1/2 absolute bottom-5 right-0 z-30 px-8 pt-10">
        <button v-for="(info,index) in infos" :key="index" :class="[selectedIndex === index ? 'cursor-default' : 'cursor-pointer',''  ]">
          <div @click="selectedIndex = index" class="text-white font-bold flex space-x-8  transform transition-all duration-700" :class="[selectedIndex === index ? 'scale-110 shadow-sm' : 'scale-100',''  ]">
            <div class="flex space-x-2 text-xs w-32">
              <ion-icon class="text-xl" :name="info.icon"></ion-icon>
              <h6 class="my-auto tracking-wider">{{info.name}}</h6>
            </div>
            <div class="font-black my-auto text-md -mt-0.5">
              <span class="transition-opacity duration-500"  :class="[selectedIndex !== index ? 'opacity-100' : 'opacity-0',''  ]" >+</span>
            </div>
          </div>
          <div class="text-[7px] text-left font-medium  text-white  overflow-hidden transition-all duration-700 my-1" :class="[selectedIndex === index ? 'h-8' : 'h-0',''  ]" >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut voluptatum quae ratione</p>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      isDownloading : false,
      isLoading : false,
      isDownLoaded : false,
      selectedIndex : -1,
      infos : [
        {
          name : "Competitive",
          icon : "construct"
        },
        {
          name : "Realistic",
          icon : "planet"
        },
        {
          name : "Vibrant World",
          icon : "aperture"
        },
        
      ]
    }
  },
  methods: {
    download(){
      if(this.isDownLoaded)return;
      this.isDownloading = true;
    }
  },
  watch : {
    isDownloading(isDownloading){
      if(isDownloading){
        setInterval(() => {
          this.isLoading = true;
        }, 800);

        setInterval(() => {
          this.isDownloading = false;
          this.isDownLoaded = true;
        }, 2800);
      }
    }
  }
}

</script>

<style>

</style>