<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300  sm:h-64 shadow-xl  relative grid sm:grid-cols-12 overflow-hidden gap-5 sm:gap-0 p-4'>
      <div class="pt-4 pl-4 space-y-4 col-span-7 row-start-2 sm:row-start-1">
        <h6 class="font-semibold text-xl text-center leading-5">CSS 2D Transform <br/> Visualizer</h6>
        <div class="px-4 h-40 overflow-auto">
          <button  v-for="(display,index) in displays " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full shadow-sm w-full transition-all text-xs" :class="[index === selectedIndex ? 'bg-amber-400/60 cursor-default' : 'hover:bg-amber-400 active:bg-amber-400/60', '' ]">
            <h6 >{{display.name}}</h6>
          </button>
        </div>
      </div>
      <div class="h-full flex flex-col justify-center my-auto relative col-span-4">
        <div class="h-28 w-28 bg-red-700/30  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-20"></div>
        <div class="h-28 w-28 bg-red-900 transform duration-1000 mx-auto z-10" :style="[displays[selectedIndex].name]" ></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      selectedIndex : 0,
      displays : [
        {
          name : 'Default'
        },
        {
          name : 'transform: skew(12deg, 6deg)',
        },
        {
          name : 'transform: translate(20px, 50px);',
        },
        {
          name : 'transform: rotate(40deg);'
        },
        {
          name : 'transform: scale(1.5, 2);'
        },
        {
          name : 'transform: matrix(1, -0.3, 0, 1, 0, 0);'
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