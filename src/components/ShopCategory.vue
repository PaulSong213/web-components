<template>
  <section @click="isAppLoaded = true" class="p-10 bg-gradient-to-br from-purple-700 via-pink-400 to-purple-700 h-screen flex flex-col justify-center">
    <transition name="fade">
    <div v-if="isAppLoaded" class="grid grid-cols-2 md:grid-cols-12 md:grid-rows-6 gap-2 max-w-lg md:max-w-screen-md mx-auto bg-white p-5 rounded-lg shadow-2xl max-h-full">
      <div class="relative h-full w-full bg-purple-400 shadow-lg rounded-md overflow-hidden md:col-span-4 md:row-span-4 cursor-pointer group">

        <h4 class="category-shop-bg">
          <span class="table mx-auto text-xl font-black">dog products</span>
          <span class="category-shop-btn">show now</span>
        </h4>
        <img src="@/assets/img/categories/dog.jpg" class="relative left-2/4 top-2/4 m-auto min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 select-none z-10">
      </div>
      <div class="relative h-full w-full bg-purple-400 shadow-lg rounded-md overflow-hidden md:col-span-4 md:row-span-2 cursor-pointer group">


        <h4 class="category-shop-bg">
          <span class="table mx-auto text-xl font-black">turtle products</span>
          <span class="category-shop-btn">show now</span>
        </h4>
        <img src="@/assets/img/categories/hamster.jpg" class="relative left-2/4 top-2/4 m-auto min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 select-none">
      </div>

      <div class="relative h-full w-full bg-purple-400 shadow-lg rounded-md overflow-hidden md:col-span-4 md:row-span-2 cursor-pointer group">

        <h4 class="category-shop-bg">
          <span class="table mx-auto text-xl font-black">rabbit products</span>
          <span class="category-shop-btn">show now</span>
        </h4>
        <img src="@/assets/img/categories/rabbit.jpg" class="relative left-2/4 top-2/4 m-auto min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2">
      </div>

      <div class="relative h-full w-full bg-purple-400 shadow-lg rounded-md overflow-hidden md:col-span-4 md:row-span-2 cursor-pointer group">

        <h4 class="category-shop-bg">
          <span class="table mx-auto text-xl font-black">cat products</span>
          <span class="category-shop-btn">show now</span>
        </h4>
        <img src="@/assets/img/categories/cat.jpg" class="relative left-2/4 top-2/4 m-auto min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 select-none">
      </div>

      <div class="relative h-full w-full bg-purple-400 shadow-lg rounded-md overflow-hidden md:col-span-4 md:row-span-4 cursor-pointer group">

        <h4 class="category-shop-bg">
          <span class="table mx-auto text-xl font-black">bird products</span>
          <span class="category-shop-btn">shop now</span>
        </h4>
        <img src="@/assets/img/categories/bird.jpg" class="relative left-2/4 top-2/4 m-auto min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 select-none">
      </div>
      <div class="relative h-full w-full bg-purple-400 shadow-lg rounded-md overflow-hidden md:col-span-8 md:row-span-2 cursor-pointer group">


        <h4 class="category-shop-bg">
          <span class="table mx-auto text-xl font-black">fish products</span>
          <span class="category-shop-btn">shop now</span>
        </h4>
        <img src="@/assets/img/categories/fish.jpg" class="relative left-2/4 top-2/4 m-auto min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 select-none">
      </div>
    </div>
    </transition>
  </section>
</template>

<script>
export default {
  data(){
    return {
      isAppLoaded : true,
    }
  },
}
</script>

<style>

</style>