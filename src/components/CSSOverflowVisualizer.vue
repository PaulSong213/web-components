<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300 sm:h-64 shadow-xl  relative grid sm:grid-cols-12 gap-5 overflow-hidden p-5'>
      <div class="pt-4  col-span-5">
        <h6 class="font-semibold text-xl text-center leading-5">CSS Overflow <br/> Visualizer</h6>
        <div class="pl-3 pt-3 space-y-2 h-40 overflow-auto">
            <button  v-for="(overflow,index) in overflows " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:first-letter:shadow-sm w-full transition-all " :class="[index === selectedIndex ? 'bg-amber-400/60 cursor-default' : 'hover:bg-amber-400 active:bg-amber-400/60', '' ]">
            <h6 >{{overflow.name}}</h6>
          </button>
          <div>
            <label class="text-slate-900 text-xs font-bold" for="scale">Child size </label>
            <input v-model="childScale" id="scale" type="range" class="accent-red-900" >
          </div>
        </div>
      </div>
      <div class="h-full my-auto relative flex justify-center flex-col col-span-7">
        <div class="h-24 w-52 bg-red-900 mx-auto flex" :class="[selectedIndex >= 0 ? overflows[selectedIndex].class : '','' ]" >
          <div class="bg-amber-400 bg-gradient-to-br from-red-500 via-amber-400 to-red-500 h-16 w-44 m-auto transition-all duration-300" :style="{transform : 'scale(' + (childScale * 1.6 ) + '%)' }" ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      childScale : 50,
      selectedIndex : -1,
      values : [50,50,50,50,50],
      overflows : [
        {
          name : 'overflow: visible',
          class : 'overflow-visible'
        },
        {
          name : 'overflow: hidden',
          class : 'overflow-hidden'
        },
        {
          name : 'overflow: scroll',
          class : 'overflow-scroll'
        },
        {
          name : 'overflow: auto',
          class : 'overflow-auto'
        },
        
      ]
    }
  },
  watch : {
    selectedIndex(){
      this.childScale = 50;
    }
  }
}

</script>

<style>

</style>