<template>
  <section class='flex flex-col h-screen justify-center bg-sky-400 bg-gradient-to-br from-sky-400 to-teal-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-emerald-50 overflow-hidden  h-64 shadow-xl flex justify-between relative pb-7'>
      <div class="h-56 w-32 rounded-2xl border-8 border-black absolute bottom-1 left-1/2 -translate-x-1/2 flex justify-between flex-col shadow-2xl">
        <div class="mx-auto w-3 h-3 -mt-1.5 bg-black rounded-full"></div>
        <div class="w-[102%] h-6 bg-black -mb-1 flex justify-between overflow-hidden text-white">
          <div  @click="nextToy(false)" class="hover:bg-gray-700 active:bg-gray-800 transition-all cursor-pointer  h-full w-full flex rounded-bl-2xl">
            <ion-icon class="m-auto pointer-events-none" name="caret-back-outline"></ion-icon>
          </div>
          <div @click="cartCount++" class="hover:bg-gray-700 active:bg-gray-800 transition-all cursor-pointer  h-full w-full flex">
            <ion-icon class="m-auto pointer-events-none" name="cart"></ion-icon>
          </div>
          <div @click="nextToy()" class="hover:bg-gray-700 active:bg-gray-800 transition-all cursor-pointer  h-full w-full flex rounded-br-2xl">
            <ion-icon class="m-auto pointer-events-noneo" name="caret-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div class="absolute top-3 right-6 text-sky-800 text-2xl select-none">
        <div class="relative" :class="cartAnimation" >
            <div v-if="cartCount > 0" class="absolute z-20 h-4 w-4 rounded-full -right-2 -top-1 flex text-white bg-black text-xs font-bold">
            <span class="m-auto">{{cartCount}}</span>
          </div>
          <ion-icon class="m-auto pointer-events-none" name="cart"></ion-icon>
        </div>
      </div>
      <div class="h-48 w-full mt-auto  relative">
        <section class="absolute transform flex space-x-4 transition-all duration-1000" :style="{left: leftPosition}">
          <div v-for="(toy,index) in toys" :key="index" class="h-48 w-32 select-none flex flex-col justify-end  ">
            <img class="w-full mt-auto" :src="toy" alt="">
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      cartCount : 0,
      selectedIndex : 0,
      cartAnimation : '',
      toys : [
        'https://ouch-cdn2.icons8.com/E63kfMz0P_elAIdY9dIMZxS86Y0ThgmHBSvUDUA7Tqs/rs:fit:256:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODEz/L2U1NDI5OWE0LTMw/MzMtNGQzNS1hMGNm/LWY4MWZkY2NiOGI3/YS5wbmc.png',
        'https://ouch-cdn2.icons8.com/Ku1IZdUBxND6zsnQGQsW-HQ5TfUB7Lb5dqR32WEJMR0/rs:fit:256:323/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjQx/Lzg5NTQ4OTgyLWQ5/YTgtNDI2MC05ZWQ0/LWM4NDQ3ZDQ5MDNi/Yy5wbmc.png',
        'https://ouch-cdn2.icons8.com/YdyHGzSBZBXSO_XSiPaeLc4dtES6dr00yzcXdssIKRs/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzY4/LzRmNGZiMzcxLTFk/MTMtNGFjNy1hYTU5/LWJkMGYxODE2OTIw/Ny5wbmc.png',
        'https://ouch-cdn2.icons8.com/MA8NwLaI9-uY9Cf5l4dO-ycFXiz3-0WNudIMpIMH3PQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDYv/ODI4Mzg3MjYtNDA5/OS00YmZkLWFlN2Ut/MDViOTY0ZGE3MmE4/LnBuZw.png'
        
      ]
    }
  },
  methods: {
    nextToy(isNext = true){
      if(isNext){
        if(this.selectedIndex > (this.toys.length - 2)){
          this.selectedIndex = 0;
        }else{
          this.selectedIndex++;
        }
      }else if(this.selectedIndex <= 0){
        this.selectedIndex = this.toys.length - 1;
      }else{
        this.selectedIndex--;
      }
    }
  },
  computed : {
    leftPosition(){
      switch (this.selectedIndex) {
        case 0:
          return '10rem'
          break;
        case 1:
          return '1rem'
          break;
        case 2:
          return '-8rem'
          break;
        case 3:
          return '-17rem'
          break;
        default:
          return '10rem'
          break;
      }
    }
  },
  watch : {
    cartCount(){
      this.cartAnimation = 'animate-pop';
      setTimeout(() => {
        this.cartAnimation = '';
      }, 700);
    }
  }
}

</script>

<style>
.animate-pop {
  animation: pop 700ms infinite;
}

@keyframes pop {
  from {
    transform: scale(100%);
    bottom: 0rem;
  }
  to {
    transform: scale(130%);
    bottom: -0.4rem;
  }
}
</style>