<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-green-300  h-64 shadow-xl  relative grid grid-cols-2 gap-5 overflow-hidden'>
      <div class="pt-4 pl-4 space-y-4">
        <h6 class="font-semibold text-lg text-center leading-5">Javascript <br/> Array Methods <br/> Visualizer</h6>
        <div class="px-4 h-32 overflow-auto">
          <button  v-for="(display,index) in displays " :key="index" @click="arrayMethod(index)" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all active:bg-green-400/30" :class="[index === selectedIndex ? 'bg-green-400/60' : 'hover:bg-green-400', '' ]">
            <h6 >{{display}}</h6>
          </button>
        </div>
      </div>
      <section >
      <transition-group name="list" tag="div" class="h-4/6 my-auto relative" >
        <div  v-for="(block,index) in blocks " :key="index" class="h-6 absolute transform transition-all duration-1000" >
          <div class="h-full relative transform transition-all duration-1000 bg-cyan-700 w-12 " :style="{left : block.left  + 'px' , top: block.top + 'px'}">
          </div>
        </div>
      </transition-group>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      selectedIndex : -1,
      nextShiftIndex : 0,
      displays : [
        'pop()','push(newItem)','shift()','unshift(newItem)'
      ],
      blocks : [
        {
          left :     0,
          top : 90
        },
        {
          left :      50,
          top : 90
        },
        {
          left :     100,
          top : 90
        },
      ],
      defaultPosition : {
        top : [90,90,90,90],
        left : [100,50,0],
      }
    }
  },
  methods: {
    blockLeft(index){
      if(this.selectedIndex < 0)return this.defaultPosition.left[index];
      return this.blocks[index].left[this.selectedIndex];
    },
    arrayMethod(index){
      this.selectedIndex = index;
      let nextLeft = 0;
      let nextBlock = {left : nextLeft, top : 90 };
      switch (index) {
        case 0:
          this.blocks.pop();
          break;
        case 1:
          if(this.blocks.length > 0)nextLeft = this.blocks[this.blocks.length - 1].left + 50;
          nextBlock.left = nextLeft;
          this.blocks.push(nextBlock);
          break;
        case 2:
          for (let i = (this.blocks.length - 1); i > 0; i--) {
              this.blocks[i].left = this.blocks[i - 1].left;
          }
          this.blocks[this.nextShiftIndex].top = -100;
          this.nextShiftIndex++;
          break;
        case 3:

          //reverse the position to the right
           for (let i = 0; i < this.blocks.length; i++) {
              this.blocks[i].left += 50;
            }

          if(this.nextShiftIndex > 0){
            //if there are item on the top that are shifted
           
            this.nextShiftIndex--;
            this.blocks[this.nextShiftIndex].top = 90;
            this.blocks[this.nextShiftIndex].left = 0;
          }else{
            this.blocks.push(nextBlock);
          }

          break;
          break;
        default:
          break;
      }
    }
  },
  watch : {
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

.list-enter-active,
.list-leave-active {
  transition: all 500ms linear;
}
.list-enter-from,
.list-leave-to {
  transform: translateY(-100px);
}
</style>