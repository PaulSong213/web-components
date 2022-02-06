<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300 h-80 sm:h-64 shadow-xl  relative grid sm:grid-cols-12 gap-2 overflow-hidden'>
      <div class="pt-4 space-y-4 col-span-5">
        <h6 class="font-semibold text-xl text-center leading-5">CSS Box Model <br/> Visualizer</h6>
        <div class="pl-3 pt-3 space-y-4">
          <div v-for="(model,index) in models " :key="index" class="flex space-x-1">
            <h1 class="font-bold text-sm text-slate-800 w-14 shrink-0 overflow-hidden">{{model.name}}</h1>
            <input v-model="values[index]" :class="[model.accent]" type="range" >
          </div>
        </div>
      </div>
      <div class="h-4/6 my-auto relative flex justify-center flex-col col-span-7">
        <div class="bg-purple-500 w-auto mx-auto flex">
          <div class="bg-teal-500 w-auto flex" :style="{margin : (values[0] / 5 ) + 'px' }">
            <div class="bg-orange-300 w-auto h-auto flex" :style="{margin : (values[1] /5 ) + 'px' }">
              <div class="w-24 h-8 bg-slate-500 m-2 font-bold text-white flex" :style="{margin : (values[2] /5 ) + 'px' }">
              <span class="m-auto">Content</span>
              </div>
            </div>
          </div>  
        </div>  

      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      values : [50,50,50,50,50],
      models : [
        {
          name : 'Margin',
          accent : 'accent-purple-500',
        },
        {
          name : 'Border',
          accent : 'accent-teal-500',
        },
        {
          name : 'Padding',
          accent : 'accent-orange-500',
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