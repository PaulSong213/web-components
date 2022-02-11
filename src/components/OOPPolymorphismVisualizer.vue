<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-blue-300  h-64 shadow-xl  relative grid grid-cols-12 overflow-hidden'>
      <div class="pt-4 space-y-4 px-4 mx-auto col-span-7 h-full  flex flex-col justify-between">
        <div class="space-y-4">
          <h6 class="font-semibold text-lg text-center leading-5">
          {{title}}
          </h6>
          <div>
            <button  v-for="(method,index) in methods " :key="index" :title="method.info" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all " :class="[index === selectedIndex ? 'bg-sky-400/60 cursor-default' : 'hover:bg-sky-400 active:bg-sky-400/60', '' ]">
              <h6 v-html="method.name" class="text-slate-700 text-sm"></h6>
            </button>
          </div>
        </div>
      </div>
      <div class="h-full my-auto relative flex flex-col justify-center pr-1 col-span-5">
        <div class="text-slate-900 text-sm absolute top-5 left-0">
          <h6 class="">
            <bold class="text-purple-800">showShape</bold> ()
          </h6>
          <h6>//{{pseudocode}}</h6>
        </div>

        <div class="h-28 w-28 bg-amber-400 border border-black left-7  absolute top-24  transition-all duration-500 transform" :class="[polyClass, shiftClass]" >
        </div>


        
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      shiftClass : '',
      isCapsuleOpen : false,
      title : 'OOP Polymorphism Visualizer',
      selectedIndex : 0,
      methods : [
        {
          name : 'class <bold class="text-purple-800">Shape</bold>',
        },
        {
          name : 'class <bold class="text-purple-800">Circle</bold> extends <bold class="text-purple-800">Shape</bold> ',
        },
        {
          name : 'class <bold class="text-purple-800">Diamond</bold> extends <bold class="text-purple-800">Shape</bold> ',
        },
        {
          name : 'class <bold class="text-purple-800">Rectangle</bold> extends <bold class="text-purple-800">Shape</bold> ',
        },
        
      ]
    }
  },
  computed : {
    circleColor(){
      return this.colors[this.currentColorIndex];
    }
  },
  computed : {
    polyClass(){
      if(this.selectedIndex <= 0){
        return '';
      }
      switch (this.selectedIndex) {
        case 1:
          return 'rounded-full'
          break;
        case 2:
          return 'rotate-45'
          break;
        case 3:
          return 'scale-y-50 scale-x-110'
          break;
        
        default:
          break;
      }
    },
    pseudocode(){
      switch (this.selectedIndex) {
        case 1:
          return "turn shape's form into circle";
          break;
        case 2:
          return "turn shape's form into diamond";
          break;
        case 3:
          return "turn shape's form into rectangle";
          break;
        
        default:
          return "default shape is square";
          break;
      }
    }
  },
  watch : {
    selectedIndex(){
      this.shiftClass = 'scale-0 duration-300';
      setTimeout(() => {
      this.shiftClass = 'scale-100 duration-100';
      }, 300);
    }
  }

}

</script>

<style>

</style>