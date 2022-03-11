<template>
  <section class='relative flex flex-col justify-center h-screen px-2 overflow-hidden bg-sky-400'>
    <div class="absolute z-10 w-56 h-64 -translate-x-1/2 rounded-2xl bg-slate-800 left-1/2" :class="isDeleted ? ' transition-all duration-[3000ms] top-full' : '-top-72' ,'' " >
      <div class="relative w-full h-full px-4 py-8 space-y-3 opacity-50">
        <div class="w-5/6 h-4 bg-white rounded-full"></div>
        <div class="w-4/6 h-4 bg-white rounded-full"></div>
        <div class="w-4/6 h-4 bg-white rounded-full"></div>
        <div class="w-3/6 h-4 bg-white rounded-full"></div>
        <div class="w-4/6 h-4 bg-white rounded-full"></div>
        <div class="w-3/6 h-4 bg-white rounded-full"></div>
        <div class="w-5/6 h-4 bg-white rounded-full"></div>
        <div class="w-2/6 h-4 bg-white rounded-full"></div>
      </div>
    </div>
    <button @click="isDeleted = !isDeleted" class="z-40 flex gap-1 mx-auto transition-all rounded-lg w-max active:scale-90 bg-cyan-900">
      <div class="relative w-64 h-24 mx-auto rounded-l-lg bg-slate-900">
        <h6 class="absolute text-xl font-bold -translate-y-1/2 text-white/70 left-4 top-1/2">Delete Document</h6>
      </div>
      <div class="relative w-12 h-24 rounded-r-lg bg-slate-900">
      <div class="absolute w-4 h-4 -translate-y-1/2 border-2 border-white rounded-full bg-cyan-500 left-4 top-1/2" :class="[isDeleted ? animate-pulse : '' ,'' ]" ></div>
      </div>
    </button>
    <div class="absolute bottom-0 z-20 -translate-x-1/2 w-72 h-1/2 left-1/2">
      <div class="relative flex w-full h-full gap-4">
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