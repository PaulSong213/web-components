<template>
  <section class="bg-slate-200 h-screen flex flex-col justify-center p-4">
    
    <div class="w-full max-w-md grid grid-cols-12 grid-rows-2 mx-auto gap-3">

      <div class="h-28 col-span-9 rounded-md shadow-sm shadow-slate-500/30 relative flex flex-col justify-end p-3" :style="{backgroundColor : color_60}" >
          <div class="absolute right-3 top-3 w-7 h-7 rounded-full border-4 border-sky-400 shadow-sm overflow-hidden p-1">
            <input class="w-7 h-7 relative -translate-x-5 -translate-y-5 transform scale-[3]" type="color" v-model="color_60" >
          </div>
          <h6 class="text-xl font-bold text-white mix-blend-exclusion">{{color_60}}</h6>
      </div>
      <div class="h-full bg-slate-800 col-span-3 row-span-2 rounded-md shadow-sm shadow-slate-500/30 flex flex-col justify-between p-2 space-y-2">
        
        <div class="space-y-2">
          <div class="h-12 w-12 rounded-full overflow-hidden relative border-4 border-sky-400 mx-auto">
            <img class="min-h-full min-w-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="">
            
          </div>
          <h6 class="font-black text-sky-200 text-xs text-center">Johnny Rock</h6>
        </div>
        

        <h6 class="font-black text-sky-300 w-max ml-auto text-sm mt-auto vertical-writing text-center opacity-60 uppercase">
          <span class=" tracking-wider">Color Palette</span>
          <br/>
          <span class="tracking-widest">30-60-10 rule </span>
        </h6>


      </div>
      <div class="h-28 col-span-6 rounded-md shadow-sm shadow-slate-500/30 relative p-3 flex flex-col justify-end"  :style="{backgroundColor : color_30}" >
        <div class="absolute right-3 top-3 w-7 h-7 rounded-full border-4 border-sky-400 shadow-sm overflow-hidden p-1">
          <input class="w-7 h-7 relative -translate-x-5 -translate-y-5 transform scale-[3]" type="color" v-model="color_30" >
        </div>
        <h6 class="text-xl font-bold text-white mix-blend-exclusion">{{color_30}}</h6>
      </div>
      <div class="h-28  col-span-3 rounded-md shadow-sm shadow-slate-500/30 relative p-3 flex flex-col justify-end"  :style="{backgroundColor : color_10}">
        <div class="absolute right-3 top-3 w-7 h-7 rounded-full border-4 border-sky-400 shadow-sm overflow-hidden p-1">
          <input class="w-7 h-7 relative -translate-x-5 -translate-y-5 transform scale-[3]" type="color" v-model="color_10" >
        </div>
        <h6 class="text-xl font-bold text-white mix-blend-exclusion">{{color_10}}</h6>
      </div>
      

    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      color_60 : "#334155",
      color_30 : "#43546e",
      color_10 : "#4d5e78"
    }
  }
}
</script>

<style>
.vertical-writing
{
  writing-mode: vertical-lr;
}
</style>