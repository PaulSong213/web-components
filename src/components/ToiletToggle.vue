<template>
  <section class='flex flex-col h-screen justify-center bg-sky-400 bg-gradient-to-br from-sky-400 via-teal-400 to-emerald-400  px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-sky-700  h-64 shadow-xl flex justify-center relative flex-col shadow-sky-700/50'>
      <div @click="isOccupied = !isOccupied" class="h-24 w-64 mx-auto relative cursor-pointer transform scale-150">
        <div class="bg-[#96CDEF] filter  h-20 left-1 absolute transition-all duration-1000 top-1/2 -translate-y-1/2 z-10 flex px-2 space-x-1 overflow-hidden" :class="[isOccupied ? 'w-40 brightness-110' : 'w-14' , '' ]">
          <div class="w-10 my-auto shrink-0">
            <img class="w-full" style="transform: scaleX(-1);" src="https://img.icons8.com/external-victoruler-solid-victoruler/344/4a90e2/external-toilet-furniture-and-home-decor-vol1-victoruler-solid-victoruler.png" alt="">
          </div>
          <div class="w-20 my-auto text-green-700 font-black justify-center  text-md uppercase">
            <h6>Unoccupied</h6>
          </div>
        </div>
        <div class="h-24 transition-all duration-1000 absolute z-10 left-20" :class="[isOccupied ? 'left-40' : 'left-14' , '' ]" >
          <img class="h-full relative" src="https://ouch-cdn2.icons8.com/KMKbm9ijy_BDambB7kOCSA6d6PlS2INb75qXnzAVO5w/rs:fit:256:319/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzQ3/L2MxNzIzN2UyLTYw/YjQtNGYyZS1iNmRk/LWYzMDRlZTE5M2Jm/MC5zdmc.png" alt="">
        </div>
        <div class="absolute left-32 px-2 flex flex-col text-yellow-300 font-black justify-center h-24 text-xl uppercase">
          <h6 class="">occupied</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      isOccupied : true
    }
  },
  methods: {

  },
}

</script>

<style>

</style>