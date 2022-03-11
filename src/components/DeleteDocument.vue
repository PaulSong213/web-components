<template>
  <section class='flex flex-col justify-center h-screen px-2 bg-sky-400 relative overflow-hidden'>
    <div class="w-56 h-64 rounded-2xl  bg-slate-800 absolute  z-10 left-1/2 -translate-x-1/2" :class="isDeleted ? ' transition-all duration-[3000ms] top-full' : '-top-72' ,'' " >
      <div class="relative w-full h-full px-4 py-8 space-y-3 opacity-50">
        <div class="bg-white h-4 rounded-full w-5/6"></div>
        <div class="bg-white h-4 rounded-full w-4/6"></div>
        <div class="bg-white h-4 rounded-full w-4/6"></div>
        <div class="bg-white h-4 rounded-full w-3/6"></div>
        <div class="bg-white h-4 rounded-full w-4/6"></div>
        <div class="bg-white h-4 rounded-full w-3/6"></div>
        <div class="bg-white h-4 rounded-full w-5/6"></div>
        <div class="bg-white h-4 rounded-full w-2/6"></div>
      </div>
    </div>
    <button @click="isDeleted = !isDeleted" class="flex w-max mx-auto active:scale-90 transition-all bg-cyan-900 gap-1 z-40 rounded-lg">
      <div class="bg-slate-900 w-64 h-24 mx-auto rounded-l-lg relative">
        <h6 class="text-white/70 font-bold absolute left-4 text-xl top-1/2 -translate-y-1/2">Delete Document</h6>
      </div>
      <div class="h-24 bg-slate-900 rounded-r-lg w-12 relative">
      <div class="w-4 h-4 rounded-full border-2 border-white bg-cyan-500 absolute left-4 top-1/2 -translate-y-1/2" :class="[isDeleted ? animate-pulse : '' ,'' ]" ></div>
      </div>
    </button>
    <div class=" w-72 h-1/2 absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
      <div class="relative w-full h-full flex gap-4">
        <div v-for="a in 10" class="w-4 h-full bg-sky-400"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      isDeleted : false
    }
  },
  methods: {

  },
  watch : {
    isDeleted(isDeleted){
      if(isDeleted){
        setTimeout(() => {
          this.isDeleted = false;
        }, 3000);
      }
    }
  }
}

</script>

<style>

</style>