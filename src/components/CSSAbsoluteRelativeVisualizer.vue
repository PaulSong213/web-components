<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300 p-2 sm:h-64 shadow-xl  relative grid sm:grid-cols-12 overflow-hidden'>
      <div class="pt-4 space-y-4 w-44 mx-auto col-span-6 row-start-2 sm:row-start-1">
        <h6 class="font-semibold text-md text-center leading-5">
          {{title}}
        </h6>
        <div>
          <button  v-for="(attribute,index) in attributes " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all flex justify-end space-x-1 ">
            <label class="text-sm" :for="index"> 
              {{attribute.name}}
            </label>
            <input v-model="attributes[index].isAdded" :id="index" class="m-auto accent-slate-900" type="checkbox">
          </button>
          <div class="h-28 w-full mt-4 relative">
            <h6 @click="leftPos = 50" class="text-red-900 font-bold absolute text-sm">left: {{leftPos}} </h6>
            <h6  @click="topPos = 50" class="text-purple-900 top-5 font-bold absolute text-sm">top: {{topPos}} </h6>
            <input v-model="leftPos" class="w-28 accent-red-900 relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" type="range">
            <input v-model="topPos" class="w-28 accent-purple-900 relative left-1/2 top-5 -translate-x-1/2  transform rotate-90" type="range">
          </div>
        </div>
      </div>
      <div class="h-full my-auto relative flex flex-col justify-center pr-1 col-span-6">
        <div class="border border-slate-700 h-44 relative">
          <div class="absolute z-10 h-full w-px bg-amber-50/80 left-1/2 -translate-x-1/2"></div>
          <div class="absolute z-10 w-full h-px bg-amber-50/80 top-1/2 -translate-y-1/2"></div>
          <h6 class="font-bold text-slate-900 absolute text-xs z-10 top-1 left-1">{{bodyTag}}</h6>
          <h6 class="font-bold text-slate-900 absolute text-xs z-10 top-5 left-14">{{divTag}}</h6>
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 bg-amber-400 z-20">
            <div class="z-30 h-14 w-14 bg-purple-900/90 relative transition-transform duration-1000 transform" :class="[translateYClass,translateXClass]" :style="{left : leftPos + '%' , top : topPos + '%' }" >
              <div class="relative h-full w-full">
                <h6 class="text-white text-xs text-center font-semibold">relative</h6>
                <div class=" w-full absolute left-0 transition-all duration-1000 bg-white" :class="[attributes.translateY.isAdded ? 'top-1/2 -translate-y-1/2 h-px' : 'h-0 top-0',''  ]" ></div>
                <div class="h-full absolute top-0 transition-all duration-1000 bg-white" :class="[attributes.translateX.isAdded ? 'left-1/2 -translate-x-1/2 w-px' : 'left-0 w-0',''  ]" ></div>
              </div>
            </div>
          </div>
          <div class="z-30 h-14 w-14 bg-red-900/90 absolute transition-transform duration-1000 transform" :class="[translateYClass,translateXClass]" :style="{left : leftPos + '%' , top : topPos + '%' }" >
            <div class="relative h-full w-full">
              <h6 class="text-white text-xs text-center font-semibold">absolute</h6>
              <div class="w-full absolute left-0 transition-all duration-1000 bg-white" :class="[attributes.translateY.isAdded ? 'top-1/2 -translate-y-1/2 h-px ' : 'top-0 h-0',''  ]" ></div>
              <div class="h-full absolute top-0 transition-all duration-1000 bg-white" :class="[attributes.translateX.isAdded ? 'left-1/2 -translate-x-1/2 w-px' : 'left-0 w-0',''  ]" ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      leftPos : 50,
      topPos : 50,
      bodyTag : '<body>',
      divTag : '<div>',
      title : 'CSS Relative vs Absolute Visualizer',
      selectedIndex : 0,
      attributes : {
        "translateY":{
          name : 'transform:translateY(-50%)',
          isAdded : false,
          class : '-translate-y-1/2'
        },
        "translateX":{
          name : 'transform:translateX(-50%)',
          isAdded : false,
          class : '-translate-x-1/2'
        },
      },
    }
  },
  computed : {
    translateXClass(){
      if(this.attributes.translateX.isAdded)return this.attributes.translateX.class;
      return 'translate-x-0';
    },
    translateYClass(){
      if(this.attributes.translateY.isAdded)return this.attributes.translateY.class;
      return 'translate-y-0';
    },
    
  }
}

</script>

<style>

</style>