<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300  h-64 shadow-xl  relative grid grid-cols-12 overflow-hidden'>
      <div class="pt-4 pl-4 space-y-4 col-span-4">
        <h6 class="font-semibold text-md text-center leading-5">3 Ways of Adding CSS to HTML<br/> Visualizer</h6>
        <div class="">
        <button  v-for="(display,index) in displays " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all text-xs flex space-x-2 justify-center" :class="[index === selectedIndex ? 'bg-amber-500/60 cursor-default' : 'hover:bg-amber-400 active:bg-amber-400/60', '' ]">
            <h6 >{{display.name}}</h6>
            <span>-</span>
            <h6 class="font-bold text-red-900">{{display.tag}}</h6>
          </button>
        </div>
      </div>
      <div class="h-full w-full col-span-8  my-auto space-x-4 relative flex justify-center">
        <div class=" absolute z-20  transform transition-all duration-1000" :class="[ selectedIndex < 0 ? 'border-0 border-transparent bg-transparent top-1/2 left-1/2 w-0 h-0' : 'bg-red-600/50 border-2 border-pink-400  ' + displays[selectedIndex].class , ''  ]" ></div>
        <section v-for="(html,index) in htmlDocs " :key="index" class="h-32 w-28 bg-slate-900 my-auto rounded-md z-10" :class="[index === 1 ? 'transform translate-y-4' : '',''  ]" >
          <div class="p-1 bg-slate-900 w-max rounded-t-md -mt-3">
            <h6 class="text-xs text-white">{{html.name}}</h6>
          </div>
          <div class="h-28 w-full grid grid-cols-12 grid-rows-6 p-1 gap-1">
            <div class="row-span-2 col-span-full bg-purple-700 rounded-md"></div>
            <div class="row-span-4 col-span-8 bg-emerald-600 rounded-md"></div>
            <div class="row-span-2 col-span-4 bg-amber-400 rounded-md"></div>
            <div class="row-span-2 col-span-4 bg-amber-400 rounded-md"></div>
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
      htmlDocs : [
        {
          name : 'home.html'
        },
        {
          name : 'about.html'
        }
        
      ],
      selectedIndex : -1,
      displays : [
        {
          name : 'inline',
          tag : 'style',
          class : "h-10 top-28 w-10 left-[6.8rem]"
        },
        {
          name : 'internal',
          tag : '<style>',
          class : "h-40 top-10 w-32 left-7"
        },
        {
          name : 'external',
          tag : 'link',
          class : "h-48 top-10 w-64 left-7"
        }
      ],
    }
  },
  methods: {

  },
}

</script>

<style>

</style>