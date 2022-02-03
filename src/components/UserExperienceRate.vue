<template>
  <section class='flex flex-col h-screen justify-center bg-purple-400 bg-gradient-to-br from-purple-400 via-pink-300 to-purple-400 px-2'>
    <div class="bg-white w-full max-w-sm rounded-xl mx-auto shadow-md shadow-pink-400/50 p-8 space-y-8">
      <div class="flex justify-between">
        <h1 class="font-black text-lg text-fuchsia-800">
          Rate us
        </h1>
        <button class="font-bold text-slate-100 py-1 px-2 rounded-md bg-pink-500 text-xs uppercase tracking-wider hover:bg-opacity-90 active:bg-opacity-100 transition-all">
          Submit
        </button>
      </div>
      <div class="flex space-x-5">
        <div class="bg-fuchsia-700 w-14 h-14 rounded-2xl shrink-0 relative flex flex-col justify-between p-3 transform scale-125">
          <div class="flex justify-between">
            <div class="w-3 h-2  bottom-3  bg-slate-900 rounded-t-full" :style="{ transform : 'scaleY(' + mouthScale + ')' }" >
            </div>
            <div class="w-3 h-2  bottom-3  bg-slate-900 rounded-t-full" :style="{ transform : 'scaleY(' + mouthScale + ')' }" >
            </div>
          </div>
          <div class="w-8 h-3  bottom-3  bg-pink-300 rounded-b-full" :style="{ transform : 'scaleY(' + mouthScale + ')' }" >
          </div>
        </div>
        <div class="w-full pl-10 flex flex-col justify-center">
          <input v-model="review" type="range" class="accent-pink-500 cursor-pointer">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      review : 50
    }
  },
  methods: {

  },
  computed : {
    mouthScale(){
      let scale = (this.review/100);
      if(this.review < 30){
        scale =  (1.0 - scale) * -1;
      }else  if(this.review < 40){
        scale = 0.2 ;
      }
      return scale;
    }
  }
}

</script>

<style>

</style>