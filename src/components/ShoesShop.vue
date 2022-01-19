<template>
  <section class='flex flex-col h-screen justify-center bg-teal-500 bg-gradient-to-br from-teal-500 via-green-300 to-teal-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-gray-300  h-64 shadow-xl relative'>
      <div class="h-full w-full grid grid-cols-2">
        <div class="bg-white flex">
          <div class="text-black font-semibold relative pl-0.5 pr-1 filter mix-blend-hard-light border-r border-black border-opacity-50 overflow-hidden max-h-full">
            <marquee direction="up" class="font-bold tracking-widest text-sm whitespace-nowrap uppercase leading-none h-72" style="writing-mode: vertical-rl;">Be Comfortable. Be you</marquee>
          </div>
          <div class="w-full h-full relative overflow-hidden">
            <img class="min-w-full min-h-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" :src="shoes[currentSelectedIndex].image">
          </div>
        </div>
        <div class="bg-gradient-to-b p-1" :class="shoes[currentSelectedIndex].bgClass"> 
          <div class="flex justify-between border-b-2 border-slate-600 py-0.5 px-0.5 font-black text-xs">
            <h6 class="text-gray-700 cursor-pointer">Logo</h6>
            <ion-icon class=" cursor-pointer" name="search"></ion-icon>
            <ion-icon class=" cursor-pointer" name="apps"></ion-icon>
          </div>
          <h5 class="my-2 text-2xl font-bold w-3/4 text-slate-900">
            Lorem ipsum dolor sit 
          </h5>
          <div class="w-1/2 ml-auto mt-4 ">
            <p class="text-[8px] h-20 overflow-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam accusamus, necessitatibus fuga voluptatum fugiat aspernatur sapiente provident
            </p>
            <div class="flex border-y-2 border-slate-900 text-xs py-1 justify-between my-2 text-slate-900 hover:bg-white px-0.5 transition-all cursor-pointer select-none active:bg-transparent">
              <h6>Buy Now</h6>
              <ion-icon class="text-md" name="arrow-forward"></ion-icon>
            </div>
          </div>
          <div class="mt-auto w-max flex flex-col">
            <button v-if="currentSelectedIndex < (shoes.length - 1)" @click="currentSelectedIndex++" class="hover:bg-white flex py-1 active:bg-transparent transition-all">
              <ion-icon class="m-auto" name="arrow-up"></ion-icon>
            </button>
            <button v-if="currentSelectedIndex > 0"   @click="currentSelectedIndex--" class="hover:bg-white flex py-1 active:bg-transparent transition-all">
              <ion-icon class="m-auto" name="arrow-down"></ion-icon>
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
      currentSelectedIndex : 0,
      shoes : [
        {
          image : "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          bgClass : "from-white to-slate-400"
        },
        {
          image : "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          bgClass : "from-white to-blue-400"
        },
        {
          image : "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          bgClass : "from-white to-amber-200"
        },
        {
          image : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          bgClass : "from-white to-green-300"
        }
      ]
    }
  },
  methods: {

  },
}
</script>

<style>

</style>