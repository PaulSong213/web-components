<template>
 <section class="h-screen bg-fashion-gradient flex px-5">

   <div class="bg-white shadow-lg h-5/6 w-full max-w-lg m-auto rounded-md grid grid-cols-12 overflow-hidden max-h-60 z-20">

    <div class="col-span-4 relative overflow-hidden">

      <transition name="fade-right-image">
        <img v-if="isAppLoaded" src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-full min-w-full hover:scale-125 transition-all duration-200">
      </transition>

    </div>

    <div class="col-span-8 p-5"> 

      <transition name="fade-bottom">

        <section v-if="isAppLoaded">

          <div class="text-lg font-semibold flex justify-between">
            
            <h6 class="text-gray-900">80's Black Style Dress</h6>
            <h6 class="text-gray-600">$999</h6>

          </div>

          <div class="text-sm my-1">
            <h6 v-if="isSelectedSizeAvailable" class="text-gray-600">In stock</h6>
            <h6 v-else class="text-pink-600">Out of stock</h6>
          </div>

        </section>

      </transition>

      <transition name="fade-top">
        <section v-if="isAppLoaded">

          <div class="my-5 space-x-3">
            <div v-for="(size, index) in sizes" :key="index" @click="selectedIndexSize = index" class="text-sm font-bold p-1 inline-block rounded-md text-gray-600 cursor-pointer hover:bg-gray-200 active:bg-gray-300 select-none h-6 w-6 transition-all text-center" :class="[index === selectedIndexSize ? 'bg-gray-200 shadow-sm':'','']">
              {{size.name}}
            </div>
          </div>

          <div class="flex space-x-3 mb-4 text-sm font-medium">

            <transition name="fade-right-btn">
              <div v-if="isSelectedSizeAvailable" class="flex-auto flex space-x-3">
                
                <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white hover:bg-pink-900 transition-all duration-300 active:bg-black py-1">Buy now</button>
                <button class="w-1/2 flex items-center justify-center rounded-md bg-transparent text-gray-600 hover:bg-pink-900 transition-all duration-300 active:bg-pink-800 border border-gray-300 py-1 hover:text-white">
                Add to cart
                </button>

              </div>
              <div v-else class="w-full flex-auto flex">
                <button class="w-full flex items-center justify-center rounded-md bg-black text-white hover:bg-pink-900 transition-all duration-300 active:bg-black py-1 h-full">
                  Add to wishlist
                </button>
              </div> 
            </transition>

            <div>
              <transition name="fade">
                <button v-if="!isHearted" @click="isHearted = true" class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300 group" >
                  <ion-icon name="heart" class="text-xl text-pink-300 transform group-hover:scale-110"></ion-icon>
                </button>
                <button v-else @click="isHearted = false" class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-white border border-gray-300 group text-xl bg-red-900"> 
                  <ion-icon name="heart" ></ion-icon>
                </button>
              </transition>
            </div>

          </div>

          <p class="text-xs text-gray-500">
            Free shipping on your first purchase
          </p>

        </section>
      </transition>

    </div>

   </div>

   <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14" :class="loaderIndex">
      <div class="bg-gradient-to-r from-pink-500 via-pink-400 to white rounded-full p-2 animate-spin w-14 h-14" v-if="!isAppLoaded">
        <div class="bg-white rounded-full h-full w-full"></div>
      </div>
   </div>
   
 </section>
</template>

<script>
export default {

  data (){
    return {
      isAppLoaded : false,
      isHearted : false,
      sizes : [
        {
          name : 'XS',
          isAvailable : true
        },
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
  mounted (){
    this.startApp()
  },
  methods : {
    startApp(){
      setTimeout(()=>{
        this.isAppLoaded = true;
      },300);
    }
  },
  computed : {
    isSelectedSizeAvailable(){
      return this.sizes[this.selectedIndexSize].isAvailable;
    },
    loaderIndex(){
      if(!this.isAppLoaded)return 'z-30';
      return 'z-10';
    }
  }

}
</script>

<style>
.bg-fashion-gradient {
  background-color: #ee8e6b;
  background-image: linear-gradient(315deg, #ee8e6b 0%, #ef6da0 74%);

}

.fade-right-btn-enter-active{
transition: all 350ms linear;
}


.fade-right-btn-enter-from {
    opacity: 0;
    scale: scale(20);
}

.fade-right-image-enter-active,
.fade-right-image-leave-active {
  transition: all 1000ms ease-in-out;
}

.fade-right-image-enter-from,
.fade-right-image-leave-to {
    opacity: 0;
    margin-left: -70px;   
}

.fade-bottom-enter-active,
.fade-bottom-leave-active {
  transition: all 550ms linear;
}

.fade-bottom-enter-from,
.fade-bottom-leave-to {
    opacity: 0;
    margin-bottom: -30px;   
}

.fade-top-enter-active,
.fade-top-leave-active {
  transition: all 100ms linear;
}

.fade-top-enter-from,
.fade-top-leave-to {
    opacity: 0;
    margin-top: -100px;   
}

</style>