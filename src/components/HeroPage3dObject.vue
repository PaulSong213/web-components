<template>
  <section class='flex flex-col h-screen justify-center bg-teal-400 bg-gradient-to-br from-green-400 via-teal-400 to-green-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-black h-64 shadow-xl  relative '>
      <div class="h-64 absolute left-1/2 -translate-x-1/2 z-10">
        <img class="h-full" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Morphing_3D_graph.gif">
      </div>
      <div class="w-full h-full z-20 absolute grid grid-cols-2">
        <div class="bg-white bg-opacity-30 backdrop-blur-sm text space-y-3 px-5 text-white relative pt-12">
          <div class="text-2xl mb-3 hover:scale-150 transform hover:text-cyan-400 absolute top-6 transition-all duration-700 hover:rotate-90">
            <ion-icon class="pointer-events-none" name="aperture"></ion-icon>
          </div>
          <h1 class="text-3xl uppercase  font-black leading-10 tracking-wider">
            Printing <br> made <br> easy
          </h1>
          <button class="border border-white px-2 py-1 text-xs transition-all hover:text-black hover:bg-gradient-to-r from-cyan-300 to-grean-300" >
            Order Now
          </button>
        </div>
        <div class="relative h-full">
          <div class="ml-auto flex space-x-2 text-white text-[10px] tracking-widest  uppercase justify-end p-4">
            <h6 v-for="link in links" :key="link" class="cursor-pointer underline decoration-transparent transition-all hover:decoration-cyan-400 underline-offset-2"> 
              {{link}}
            </h6>
          </div>
          <div class="flex flex-col transition-all text-xs space-y-1 absolute right-4 top-1/2 -translate-y-1/2 h-max">
            <button class="text-white hover:scale-150 duration-500 transform hover:text-cyan-500">
              <ion-icon class="pointer-events-none" name="logo-instagram"></ion-icon>
            </button>
            <button class="text-white hover:scale-150 duration-500 transform hover:text-cyan-500">
              <ion-icon class="pointer-events-none" name="logo-twitter"></ion-icon>
            </button>
            <button class="text-white hover:scale-150 duration-500 transform hover:text-cyan-500">
              <ion-icon class="pointer-events-none" name="logo-facebook"></ion-icon>
            </button>
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
      links : [
        'Products',
        'About'
      ]
    }
  },
  methods: {

  },
}

</script>

<style>

</style>