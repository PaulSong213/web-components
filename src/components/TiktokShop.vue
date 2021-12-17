<template>
  <section class="h-screen p-4 flex flex-col justify-center bg-white bg-gradient-to-br from-teal-400 via-fuchsia-400 to-rose-500">
  
  <div class="flex p-6 bg-white font-mono max-w-md mx-auto overflow-hidden">
    <div class="hidden md:block flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-rose-500">
      <img :src="images[currentImageIndex]" alt="" class="absolute z-10 inset-0 w-full h-full object-cover" />
      <div class="z-20 absolute flex justify-between top-1/2 -right-2 w-52 tranform -translate-y-1/2 text-2xl">
        <ion-icon @click="toNextImage(false)" class="text-rose-500 cursor-pointer hover:shadow-md opacity-70 hover:opacity-100 transition-all" name="chevron-back"></ion-icon>
        <ion-icon @click="toNextImage(true)" class="text-teal-500 cursor-pointer hover:shadow-md opacity-70 hover:opacity-100 transition-all" name="chevron-forward"></ion-icon>
      </div>
    </div>
    <div class="flex-auto  md:pl-6">
      <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
        <div class="md:hidden flex-none w-48 h-48 mx-auto mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-rose-500">
          <img :src="images[currentImageIndex]" alt="" class="absolute z-10 inset-0 w-full h-full object-cover" />
          <div class="z-20 absolute flex justify-between top-1/2 -right-2 w-52 tranform -translate-y-1/2 text-2xl">
            <ion-icon @click="toNextImage(false)" class="text-rose-500 cursor-pointer hover:shadow-md opacity-70 hover:opacity-100 transition-all" name="chevron-back"></ion-icon>
            <ion-icon @click="toNextImage(true)" class="text-teal-500 cursor-pointer hover:shadow-md opacity-70 hover:opacity-100 transition-all" name="chevron-forward"></ion-icon>
          </div>
        </div>
        <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
          Retro Shoe
        </h1>
        <div class="relative text-lg text-white">
          $89.00
        </div>
        <div class="relative uppercase text-teal-400 ml-3">
          In stock
        </div>
      </div>
      <div class="flex items-baseline my-6">
        <div v-for="(size,index) in sizes" :key="index" class="space-x-3 flex text-sm font-medium">

          <div v-if="index !== selectedIndexSize" @click="selectedIndexSize = index" class="bg-transparent  w-10 h-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full cursor-pointer ">
              <div class="bg-transparent text-black absolute z-10 inset-0 w-full h-full object-cover flex">
                <span class="m-auto">
                  {{size.name}}
                </span>
              </div>
            </div>
            <div v-else class="bg-black  w-10 h-10 relative z-10 before:absolute before:top-0.5 before:left-0.5 before:w-full before:h-full before:bg-teal-500">
              <div class="bg-black text-white absolute z-10 inset-0 w-full h-full object-cover flex">
                <span class="m-auto">
                  {{size.name}}
                </span>
              </div>
            </div>
        </div>
      </div>
      <div class="flex space-x-2 mb-4 text-sm font-medium">
        <div class="flex md:flex-col lg:space-x-4 text-xs lg:text-sm">
          <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 active:bg-teal-500 transition-all text-black" type="submit">
            Buy now
          </button>
          <button class="px-6 h-12 uppercase font-semibold tracking-wider border border-gray-200 text-gray-900">
            Add to bag
          </button>
        </div>
        <button class="text-2xl text-black flex justify-start flex-col pt-4">
          <ion-icon name="heart"></ion-icon>
        </button>
      </div>
      <p class="text-xs leading-6 text-gray-500">
        Free shipping on first puchase.
      </p>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      currentImageIndex : 0,
      isHearted : false,
      images : [
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1600185652960-c9d8869d015c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
      ],
      sizes : [
        {
          name : 'S',
          isAvailable : false
        },
        {
          name : 'M',
          isAvailable : false
        },
        {
          name : 'L',
          isAvailable : true
        },
        {
          name : 'XL',
          isAvailable : true
        },
      ],
      selectedIndexSize : 0
    }
  },
  methods : {
    toNextImage(toNext = true){
      if(toNext){
        if(this.currentImageIndex === 2){
          this.currentImageIndex = 0;
          return;
        }
        this.currentImageIndex++;
      }else{
        if(this.currentImageIndex === 0){
          this.currentImageIndex = 2;
          return;
        }
        this.currentImageIndex--;
      }
      
    }
  }
}
</script>

<style>
.bg-tiktok {
  background-image: url('https://www.dexerto.com/wp-content/uploads/2020/06/tiktok-logo-generic-background.jpg');
}


</style>