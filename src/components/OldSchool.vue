<template>
  <section class="min-h-screen bg-violet-500 flex flex-col justify-center relative overflow-hidden px-2">

    <div class="bg-teal-600 h-[40vw] max-h-[40vh] w-[100vw]  border-8 border-black absolute bottom-0 right-0 z-10"></div>
    <div class="bg-rose-700 h-[60vw] w-[60vw] rounded-tl-full border-8 border-black absolute bottom-0 right-0 max-h-[70vh] max-w-[70vh] z-10"></div>


    <div v-if="!isClaimed" :class="[positions[positionIndex]]" class="bg-white w-max absolute rounded-2xl border-8 border-black p-4  z-20">
      <div class="bg-red-500 rounded-full cursor-not-allowed hover:bg-black select-none  w-8 h-8 flex text-gray-300 font-bold border-black border-4 ml-auto"> <span class="m-auto">x</span> </div>

      <h1 class="text-5xl my-8 font-black text-center font-rock px-12">
        2022 <br/> will be:
      </h1>

      <div class="flex flex-row-reverse justify-between px-8">
        
        <div class="p-2">
        <div @click="isClaimed = true" class="bg-green-500 cursor-pointer text-xl hover:bg-opacity-80 active:bg-opacity-100 transition-all  select-none text-black font-black border-4 rounded-full py-2 px-4 border-black">
          Better
        </div>
        </div>

        <div class="p-2" @mouseenter="movePositionIndex()" >
          <div class="bg-rose-500 text-xl select-none text-black font-black border-4 rounded-full py-2 px-4 border-black">
          Worst
        </div>
        </div>

      </div>  
      
    </div>

    <div v-else class="flex -space-x-1  mx-auto z-20">
      <div class="h-32 w-64 border-black border-4 rounded-2xl flex px-4 bg-white">
        <p class="my-auto text-2xl font-bold text-teal-700 text-center">Here's your lucky ticket!</p>
      </div>
      <div class="h-32 w-32 border-black border-y-4 border-r-4 rounded-2xl bg-white flex overflow-hidden">
        <div class="h-full  border-teal-200 border-l-4 border-dotted"></div>
        <div class="m-auto text-8xl text-teal-400">
          <ion-icon name="diamond-outline"></ion-icon>
        </div>
      </div>
    </div>



  </section>
</template>

<script>
export default {
  data(){
    return {
      isClaimed : false,
      positionIndex : 0,
      positions : [
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        'top-10 left-5',
        'bottom-5 right-5',
        'top-10 right-5',
        'bottom-5 left-5',
      ]
    }
  },
  methods : {
    movePositionIndex(){
      if(this.positionIndex === (this.positions.length - 1 ))return this.positionIndex = 0;
      this.positionIndex++;
    }
  }
}
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Rock+3D&display=swap');

.font-rock {
  font-family: 'Rock 3D', cursive;
}


</style>