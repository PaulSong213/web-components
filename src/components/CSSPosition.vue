<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300  h-64 shadow-xl  relative grid grid-cols-2 overflow-hidden'>
      <div class="pt-4 pl-4 space-y-4">
        <h6 class="font-semibold text-xl text-center leading-5">CSS Display <br/> Visualizer</h6>
        <div class="px-4">
          <button  v-for="(display,index) in displays " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all " :class="[index === selectedIndex ? 'bg-amber-400/60 cursor-default' : 'hover:bg-amber-400 active:bg-amber-400/60', '' ]">
            <h6 >{{display}}</h6>
          </button>
        </div>
      </div>
      <div class="h-4/6 my-auto relative">
        <div v-for="(block,index) in blocks " :key="index" class="h-6 absolute transform bg-red-900 transition-all duration-1000" :style="{left : block.left[selectedIndex] + 'px' , top: block.top[selectedIndex] + 'px', width : block.width[selectedIndex] + 'rem' }">
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
      displays : [
        'inline','block','inline-block','flex','grid',
      ],
      blocks : [
        {
          top :  [30, 30 , 30 , 30  , 30],
          left : [0 , 0  , 0  , 0  , 30],
          width :[3 , 3  , 3  , 2.5 , 5]
        },
        {
          top :  [30 , 57 ,30 , 30  ,30],
          left : [50 , 0  ,50 , 44  ,113],
          width :[3  , 3  ,3  , 1.8 ,5]
        },
        {
          top : [30   ,  85  ,  30  ,30  ,58],
          left : [100 ,  0   ,  100 ,75  ,30],
          width : [3  ,  3   ,  3   ,1.9 ,5]
        },
        {
          top :  [30  ,112 ,30  ,30  ,58],
          left : [150 ,0   ,150 ,108 ,113],
          width :[3   ,3   ,3   ,2.3 ,5]
        },
        {
          top : [56  ,139  ,65 ,30 ,86],
          left : [0  , 0   ,0  ,150  ,30],
          width : [3 ,3    ,3  ,3  ,5]
        },
      ]
    }
  },
  methods: {

  },
}

</script>

<style>

</style>