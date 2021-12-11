<template>
  <section @click="isAppLoaded = true" class="h-full py-5 px-10 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 min-h-screen">

    <main class="bg-black px-10 pt-10 rounded-md w-full min-h-full h-full max-w-2xl mx-auto">

      <div class="flex space-x-3 text-white mb-5">
        <ion-icon v-if="hasSelectedItem" @click="selectProduct(false)" name="arrow-back-outline" class="text-3xl hover:bg-blue-300 rounded-full cursor-pointer transition-all p-1 text-white"></ion-icon>

        <h1 class="font-bold text-2xl uppercase my-auto">{{selectedName}}</h1>

      </div>

      <transition name="fade-page-top">
        <div v-if="!hasSelectedItem && isAppLoaded" class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="(product,index) in products" :key="index" class="group cursor-pointer active:scale-90 transform transition-all duration-200" @click="selectProduct(true, product.image, product.name)">

            <div class="h-48 relative group-hover:scale-110 transform duration-200 p-10 overflow-hidden">
              <img class="animate-rgb  group-hover:scale-110 transform duration-200 m-auto" :src="rootPath + product.image">
            </div>

            <div class="my-5">
              <h1 class="text-white text-center font-bold group-hover:text-blue-400 transition-all">{{product.name}}</h1>
            </div>

          </div>
        </div>
        <div v-else-if="hasSelectedItem && isAppLoaded" class="rounded-md grid grid-cols-12">

          <div class="overflow-hidden relative col-span-8 h-48">
              <img class="animate-rgb h-full mx-auto" :src=" rootPath + selectedImage" alt="">
          </div>
          <div class="col-span-4 flex flex-col justify-end pb-5 space-y-4">
            <p class="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint necessitatibus accusamus dolores esse? Minus ut dolorem rem ullam quo quos numquam, reiciendis accusantium iure dolorum, voluptatem temporibus dicta nemo libero?</p>
            <button class="text-gray-900 text-sm uppercase bg-gray-200 rounded-md p-2 font-black hover:bg-black hover:text-white transition-all duration-300 border border-white active:bg-white active:text-black">Buy Now</button>
          </div>

        </div>
      </transition>

    </main>

  </section>
</template>

<script>
export default {

  data(){
    return {
      isAppLoaded : true,
      selectedImage : "",
      selectedName : "RGB Store",
      hasSelectedItem : false,
      rootPath : "/rgb/",
      products : [
        {
          name : "Keyboard",
          image : "keyboard.png"
        },
        {
          name : "Headphone",
          image : "headphone.png"
        },
        {
          name : "Mouse",
          image : "mouse.png"
        },
        {
          name : "Mousepad",
          image : "mousepad.png"
        }
        
      ]
    }
  },
  methods : {
    selectProduct(hasSelected = false, image, name){
      this.hasSelectedItem = hasSelected;
      if(!hasSelected)return this.selectedName = "RGB Store";
      this.selectedName = name;
      this.selectedImage = image;
    }
  }

}
</script>

<style>
.bg-main {
  background-color: #111111;
}

.animate-rgb {
  filter:brightness(200%);
  transition: all 1000ms ease-in-out;
  animation: rgb 1000ms ease-in-out 0ms infinite;
}

@keyframes rgb {
  from {
    filter:hue-rotate(0deg);
  }
  to {
    filter:hue-rotate(360deg);
  }
}

.fade-page-top-enter-active,
.fade-page-top-leave-active {
  transition: all 200ms linear;
}

.fade-page-top-enter-from,
.fade-page-top-leave-to {
   opacity: 0;
}

</style>