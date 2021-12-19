<template>
  <section class="min-h-screen bg-indigo-400 bg-gradient-to-br from-indigo-400 to-purple-400 flex flex-col justify-center px-2">
    <div class="bg-white rounded-lg mx-auto h-60 w-full max-w-md flex flex-col">

      <div @click="isSwitchedOn = !isSwitchedOn" class="select-none w-40 h-max border-4 m-auto rounded-full cursor-pointer hover:shadow-md shadow-sm relative px-1" :class="[isSwitchedOn ? 'border-indigo-400' : 'border-green-500' , 'first-letter:' ]" >

        <div class="h-16 w-16 rounded-full absolute top-1/2 transform -translate-y-1/2 transition-all " :class="[isSwitchedOn ? 'left-0 bg-indigo-500 ' : 'left-full -translate-x-full bg-green-500','']">
        </div>

        <transition name="fade">
        <div v-if="!isSwitchedOn" class="h-16 w-20 relative">
          <img class="absolute bottom-5" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/440/000000/external-mountains-landscape-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
          <img class="absolute bottom-5" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/440/000000/external-mountains-landscape-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
          <img class="absolute bottom-0 left-4 transform scale-150" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-trees-agriculture-icongeek26-flat-icongeek26.png"/>
          <img class="absolute bottom-0 left-2 transform scale-150" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-trees-agriculture-icongeek26-flat-icongeek26.png"/>
          <img class="absolute bottom-0" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-trees-agriculture-icongeek26-flat-icongeek26.png"/>
          <img class="absolute bottom-0 left-4" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-trees-agriculture-icongeek26-flat-icongeek26.png"/>
          <img class="absolute bottom-0 left-8" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-trees-agriculture-icongeek26-flat-icongeek26.png"/>
        </div>
        <div v-else class="h-16 w-20 relative ml-auto">
          <img class="absolute bottom-0" src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/116/000000/external-building-landscape-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/>
        </div>
        </transition>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      isSwitchedOn : false
    }
  }
}
</script>

<style>

</style>