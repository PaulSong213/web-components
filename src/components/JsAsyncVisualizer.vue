<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-green-300  h-64 shadow-xl  relative grid grid-cols-2 overflow-hidden'>
      <div class="pt-4 pl-4 space-y-4">
        <h6 class="font-semibold text-xl text-center leading-5">Javascript Async <br/> Visualizer</h6>
        <div class="px-4">
          <button  v-for="(display,index) in displays " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all " :class="[index === selectedIndex ? 'bg-green-400/60 cursor-default' : 'hover:bg-green-400 active:bg-green-400/60', '' ]">
            <h6 >{{display}}</h6>
          </button>
        </div>
      </div>
      <section >
      <div class="h-4/6 my-auto relative">
        <div  v-for="(block,index) in blocks " :key="index" class="h-6 absolute transform transition-all duration-1000" >
          <div v-if="(selectedIndex === 2 ||selectedIndex === 3 )  && index === 1" class="h-full w-full relative transform transition-all duration-1000" :class="[ !block.hadRun[selectedIndex] ? 'bg-green-700' : 'bg-cyan-700 animate-jump' , '',  ]" :style="{left : block.left[0] + 'px' , top: block.top[0] + 'px', width : block.width[0] + 'rem' }">
          </div>
          <div v-else-if="(selectedIndex === 2 ||selectedIndex === 3 ) && index === 2" class="h-full w-full relative transform transition-all duration-1000" :class="[ !block.hadRun[selectedIndex] ? 'bg-rose-700' : 'bg-cyan-700 animate-jump' , '',  ]" :style="{left : block.left[0] + 'px' , top: block.top[0] + 'px', width : block.width[0] + 'rem' }">
          </div>
          <div v-else-if="index !== 3 || selectedIndex < 3 " class="h-full w-full relative transform transition-all duration-1000" :class="[ !block.hadRun[selectedIndex] ? 'bg-slate-700' : 'bg-cyan-700 animate-jump' , '',  ]" :style="{left : block.left[0] + 'px' , top: block.top[0] + 'px', width : block.width[0] + 'rem' }">
          </div>

        </div>
      </div>
      <div class="h-2/6">
        <div>
          <div class="flex space-x-4" v-for="(legend,index) in legends " :key="index">
            <div  class="h-3 w-3" :class="[legend.color]" ></div>
              <h6 class="text-xs font-semibold text-slate-700">
                {{legend.name}}
              </h6>
            </div>
        </div>
      </div>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      legends : [
        {
          name : 'Pending Function',
          color : 'bg-slate-900'
        },
        {
          name : 'Executed Function',
          color : 'bg-cyan-700'
        },
        {
          name : 'Success Function',
          color : 'bg-green-700'
        },
        {
          name : 'Error Function',
          color : 'bg-rose-700'
        },
        
      ],
      selectedIndex : 2,
      displays : [
        'Callback','Asynchronous','Promises','Async/Await'
      ],
      blocks : [
        {
          top :  [90, 30 , 30 , 30  , 30],
          left : [0 , 0  , 0  , 0  , 30],
          width :[3 , 3  , 3  , 2.5 , 5],
          hadRun:[false,false,false,false],
        },
        {
          top :  [90 , 57 ,30 , 30  ,30],
          left : [50 , 0  ,50 , 44  ,113],
          width :[3  , 3  ,3  , 1.8 ,5],
          hadRun:[false,false,false,false],
        },
        {
          top :  [90   ,  85  ,  30  ,30  ,58],
          left : [100 ,  0   ,  100 ,75  ,30],
          width :[3  ,  3   ,  3   ,1.9 ,5],
          hadRun:[false,false,false,false],
        },
        {
          top :  [90  ,112 ,30  ,30  ,58],
          left : [150 ,0   ,150 ,108 ,113],
          width :[3   ,3   ,3   ,2.3 ,5],
          hadRun:[false,false,false,false],
        },
      ]
    }
  },
  methods: {

  },
  watch : {
    selectedIndex(index){
      const blockCount = 4;
      var i = 0;
      var interval = 100;
      
      if(index !== 0)interval = 1500;

      for (let j = 0; j < blockCount; j++) {
                        this.blocks[j].hadRun[index] = false;
                      }

      let runner =  setInterval(() => {
                  if(index >= 2 && i === 2)return i++;
                  this.blocks[i].hadRun[index] = true;
                  i++;
                  if (i === blockCount){
                    clearInterval(runner);
                    setTimeout(() => {
                      for (let j = 0; j < blockCount; j++) {
                        this.blocks[j].hadRun[index] = false;
                      }
                    }, 2400);
                  }
                }, interval);

    }
  }

}

</script>

<style>

.animate-jump {
  /* animation-iteration-count: infinite; */
  animation-name: jump;
  animation-duration: 1500ms;
  animation-timing-function: linear;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-54px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>