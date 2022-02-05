<template>
  <section class='flex flex-col h-screen justify-center bg-teal-400 bg-gradient-to-br from-emerald-400 via-teal-400 to-emerald-400  px-2'>
    <div class="h-20 w-72 bg-white rounded-b-3xl rounded-t-sm mx-auto flex flex-col p-3 shadow-md space-y-2 transform scale-150">
      <div class="flex-grow grid grid-cols-5">
        <div v-for="(icon,index) in 5" :key="index" @click="selectedIndex = index" class=" text-2xl text-emerald-500/70 transition-all hover:bg-green-200 active:bg-green-500 rounded-md cursor-pointer duration-500  h-10 flex relative overflow-hidden select-none">
          <div class="m-auto w-full absolute transition-all duration-1000" :class="[index === selectedIndex ? '-top-full' : 'top-0','' ]" >
            <div class="flex h-10">
              <ion-icon class="m-auto pointer-events-none" name="business"></ion-icon>
            </div>
            <div class="flex h-10 relative">
              <h6 class="text-xs font-black m-auto text-green-500">Test</h6>
              <div class="h-1 w-1 bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-green-400 absolute"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-1 w-32 bg-gray-300 mx-auto rounded-full"></div>
    </div>
  </section>
</template>
<script>

export default {
  data(){
    return {
      selectedIndex : -1
    }
  },
  methods: {

  },
}

</script>

<style>

</style>