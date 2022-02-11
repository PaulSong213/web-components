<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-blue-300  h-64 shadow-xl  relative grid grid-cols-12 overflow-hidden'>
      <div class="pt-4 space-y-4 w-44 mx-auto col-span-6 h-full  flex flex-col justify-between pb-8">
        <div class="space-y-4">
          <h6 class="font-semibold text-lg text-center leading-5">
          {{title}}
          </h6>
          <div>
            <button  v-for="(method,index) in methods " :key="index" :title="method.info" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all " :class="[index === selectedIndex ? 'bg-sky-400/60 cursor-default' : 'hover:bg-sky-400 active:bg-sky-400/60', '' ]">
              <h6 >{{method.name}}</h6>
            </button>
          </div>
        </div>
        <div class="w-full  flex flex-col space-y-2 mt-8">
          <div class="flex space-x-2 justify-between pl-3">
            <div class="rounded-full border-4 border-white w-4 h-4"></div>
            <h6 class="text-slate-800 text-xs my-auto -mb-0.5 font-bold">Accessible private data</h6>
          </div>
          <div class="flex space-x-2 justify-between">
            <h6 class="text-rose-700 text-xs my-auto -mb-0.5 font-bold">Other</h6>
            <h6 class="text-slate-800 text-xs my-auto -mb-0.5 font-bold">Inaccessible private data</h6>
          </div>
        </div>
      </div>
      <div class="h-full my-auto relative flex flex-col justify-center pr-1 col-span-6">
        <div class="flex mx-auto transition-all duration-1000 justify-between opacity-40  absolute top-12  left-1/2 -translate-x-1/2 z-20" :class="[isCapsuleOpen ? 'w-80' : 'w-40','' ]" >
          <div class="h-14 rounded-l-full w-20 bg-sky-700 bg-gradient-to-b from-sky-600 via-sky-500 to-sky-600"></div>
          <div class="h-14 rounded-r-full w-20 bg-sky-700 bg-gradient-to-b from-sky-700 via-sky-500 to-sky-700"></div>
        </div>
        <div class="h-4 w-4 transform scale-125 rounded-full absolute z-10 transition-all duration-1000 delay-500" :class="[circleColor]" :style="{top : circle.top + 'rem', left : circle.left + 'rem' }" ></div>
        <div class="h-4 w-4 transform scale-125 bg-red-500 absolute top-16 left-28 z-10"></div>
        <div class="h-4 w-4  scale-125 bg-orange-500 transform rotate-45 absolute top-20 left-20 z-10"></div>
        <div class="h-2 w-6  scale-125 bg-purple-500 transform absolute top-20 left-36 z-10"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      circle : {
        top : 4,
        left : 3,
      },
      colors : [
        'bg-emerald-600',
        'bg-slate-700',
        'bg-pink-600'
      ],
      currentColorIndex : 0,
      isCapsuleOpen : false,
      title : 'OOP Encapsulation Visualizer',
      selectedIndex : -1,
      methods : [
        {
          name : 'getCircle()',
          info : 'getter method'
        },
        {
          name : 'setCircle(newColor)',
          info : 'setter method'
        }
      ]
    }
  },
  computed : {
    circleColor(){
      return this.colors[this.currentColorIndex];
    }
  },
  watch : {
    selectedIndex(index){
      if(index === 0){
        this.isCapsuleOpen = true;
        this.circle.top = 10;
        this.circle.left = 6.5;
        setTimeout(() => {
          this.isCapsuleOpen = false;
        }, 1000);
        setTimeout(() => {
          this.selectedIndex = -1;
        }, 3000);
      }else if(index === 1){
        this.isCapsuleOpen = true;
        this.circle.top = 10;
        this.circle.left = 6.5;
        setTimeout(() => {
          this.isCapsuleOpen = false;
        }, 1000);
        setTimeout(() => {
          if(this.currentColorIndex < this.colors.length - 1)this.currentColorIndex++;
          else this.currentColorIndex = 0;
        }, 1000);

        setTimeout(() => {
          this.selectedIndex = -1;
        }, 3000);
      }else{
        this.isCapsuleOpen = true;
        this.circle.top = 4;
        this.circle.left = 3;
        setTimeout(() => {
          this.isCapsuleOpen = false;
        }, 1000);
      }
    }
  }

}

</script>

<style>

</style>