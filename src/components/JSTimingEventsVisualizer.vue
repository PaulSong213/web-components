<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-green-300  h-64 shadow-xl  relative grid grid-cols-12 overflow-hidden'>
      <div class="pt-4 space-y-4 col-span-8">
        <h6 class="font-semibold text-xl text-center leading-5">Javascript Async <br/> Visualizer</h6>
        <div class="px-4">
          <button  v-for="(display,index) in displays " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all " :class="[index === selectedIndex ? 'bg-green-400/60 cursor-default' : 'hover:bg-green-400 active:bg-green-400/60', '' ]">
            <h6 class="text-sky-800 text-md" v-html="display.name"></h6>
          </button>
        </div>
      </div>
      <section class="col-span-4" >
      <div class="h-full flex flex-col justify-center my-auto relative space-y-10 px-1">
        <div class="h-14 w-full bg-slate-600 text-white mx-auto flex  rounded-md">
          <h6 class="m-auto text-sm font-bold text-center">
            {{command}}
          </h6>
        </div>
        <img class="w-32 mx-auto" :class="[isJumping ? 'animate-jump' : '','' ]" src="https://ouch-cdn2.icons8.com/fMgNzJOh83C_xEmxFCgahDmTvtA7-fwIx28IuebK49I/rs:fit:256:269/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjM3/LzZjNDc2MTJmLTJl/YjktNDRjYy05NDMz/LTUzOGU3MjhlODA0/ZC5wbmc.png" alt="">
      </div>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      timeOut : null,
      interval : null,
      isJumping : '',
      command : '...',
      selectedIndex : -1,
      displays : [
        {
          name : '<span>setTimeout(<span class="text-purple-700">jump()</span>,<span class="text-pink-500">2000</span>)</span>',
          command : 'Jump after 2000ms'
        },
        {
          name : '<span>clearTimeout(<span class="text-purple-700">timeOutVariable<span>)',
          command : 'Cancel jump'
        },
        {
          name : '<span>setInterval(<span class="text-purple-700">jump()</span>,<span class="text-pink-500">2000</span>)</span>',
          command : 'Jump every 2000ms until I said stop'
        },
        {
          name : '<span>clearInterval(<span class="text-purple-700">intervalVariable<span>)',
          command : 'Stop jumping'
        },
      ],
    }
  },
  methods: {

  },
  watch : {
    selectedIndex(index){
      const duration = 2000;
      switch (index) {
        case -1:
            setTimeout(() => {
              this.isJumping = false;
              this.command = "...";
            }, duration);
          break;
        case 0:
          this.command = this.displays[this.selectedIndex].command;
          this.timeOut = setTimeout(() => {
            this.isJumping = true;
            this.selectedIndex = -1;
          }, duration);
          break;
        case 1:
          this.isJumping = false;
          this.command = this.displays[this.selectedIndex].command;
          clearTimeout(this.timeOut);
          break;
        case 2 :
          this.command = this.displays[this.selectedIndex].command;
          this.interval = setInterval(() => {
            this.isJumping = !this.isJumping;
          }, duration);
          break;
        case 3 :
          this.isJumping = false;
          this.command = this.displays[this.selectedIndex].command;
          clearInterval(this.interval);
          this.selectedIndex = -1;
          break;
        
        default:
          break;
      }
    }
  }

}

</script>

<style>

.animate-jump {
  /* animation-iteration-count: infinite; */
  animation-name: jump;
  animation-duration: 2000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);

  }
}
</style>