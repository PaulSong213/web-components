<template>
  <section class="h-screen bg-gray-800 flex flex-col justify-center">

    <div class="grid grid-cols-2 w-full max-w-sm mx-auto gap-y-5 text-white">
      
      <!-- LOCKSREEN -->
      <div class="w-full">
        <div class="h-40 w-40 m-auto bg-gray-900 rounded-xl neumorphic shadow-2xl p-4 space-y-2 z-20 overflow-hidden">
          <div>
            <h6 class="text-xl font-black">12:23 PM</h6>
          </div>
          <transition name="notif-fade">
            <div v-if="!isFingerPrinting" class="space-y-0.5 relative">
              <transition-group name="slide-left">
                <div v-for="(notif,index) in notifications" :key="notif.logo" class="bg-gray-800 bg-opacity-90 grid grid-cols-12 gap-0.5 py-0.5 px-2 rounded-md overflow-hidden text-gray-300 cursor-pointer select-none" @click="notifications.splice(index,1)">
                  <div class="my-auto col-span-2 flex">
                    <ion-icon class="my-auto" :name="notif.logo"></ion-icon>
                  </div>
                  <div class="text-xs  max-w-full col-span-10 flex whitespace-nowrap  overflow-hidden overflow-ellipsis">
                    <h6 class="my-auto" style="font-size:0.6rem">{{notif.text}}</h6>
                  </div>
                </div>
              </transition-group>
              <div class="text-center font-black text-white py-2">
                <ion-icon @click="isFingerPrinting = true" class="animate-bounce" name="chevron-up-outline"></ion-icon>
              </div>
              
            </div>
            <div v-else class="flex flex-col justify-center py-2 text-7xl text-blue-500">
              <ion-icon @click="isFingerPrinting = false" class="m-auto" name="finger-print"></ion-icon>
            </div>
          </transition>
          

        </div>
      </div>

      <!-- HOME -->
      <div class="w-full mt-10">
        <div class="h-40 w-40 m-auto bg-gray-900 rounded-xl neumorphic shadow-2xl relative overflow-hidden flex flex-col">
          <img class="absolute min-h-full min-w-full filter blur-sm z-10 select-none" src="https://media.istockphoto.com/photos/dark-night-and-stars-reflecting-in-maroon-lake-picture-id1299818587?b=1&k=20&m=1299818587&s=170667a&w=0&h=4qNkumvj73rB1ArCSVmbi9xw5yhpk_DICOeQqgtOTs8=" alt="">
          <nav class="z-20 flex justify-between w-full bg-gray-800 px-2 py-0.5 bg-opacity-50">
            <h6 class="text-xs">12:23</h6>
            <ion-icon class="text-sm" name="wifi-outline"></ion-icon>
          </nav> 
          <main class="overflow-y-auto flex flex-col z-20 small-scroll">
            <div v-if="isAtHome" class="grid grid-cols-3 p-2 w-full gap-2">
              <div @click="isAtHome = false" v-for="icon in appIcons" :key="icon" class="bg-gray-200 bg-opacity-5 rounded-md p-1 cursor-pointer transition-all duration-300 hover:bg-opacity-30 active:bg-opacity-50">
                <div class="h-8 w-8 m-auto flex">
                  <img class="w-full m-auto select-none" :src="icon" alt="">
                </div>
              </div>
            </div>
            <div v-else>
              <iframe class="w-full mx-auto" src="https://en.wikipedia.org/wiki/Main_Page" frameborder="0"></iframe>
            </div>
            <div class="py-5  opacity-0 w-full"></div>
          </main>
        </div>
      </div>
      
    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      isFingerPrinting : false,
      notifications : [
        {
          text : "Someone liked your posts.",
          logo : "logo-facebook"
        },
        {
          text : "New message",
          logo : "logo-instagram"
        },
        {
          text : "New issue",
          logo : "logo-github"
        },
      ],
      isAtHome : true,
      appIcons : [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2244px-Wikipedia-logo-v2.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png",
        "https://cdn.worldvectorlogo.com/logos/tiktok-share-icon-black-1.svg",
        "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/YouTube.png",
        "https://cdn-icons-png.flaticon.com/512/226/226777.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png",
        "https://cdn.worldvectorlogo.com/logos/tiktok-share-icon-black-1.svg",
        "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/YouTube.png",
        "https://cdn-icons-png.flaticon.com/512/226/226777.png",

      ]
    }
  }
}
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 550ms linear;
}

.slide-left-enter-from,
.slide-left-leave-to {
    opacity: 0;
    transform: translateX(30px);
}


.notif-fade-enter-active {
  transition: all 550ms linear;
}

.notif-fade-enter-from,
.notif-fade-leave-to {
    opacity: 0;
    height: 0;
}

/* width */
.small-scroll::-webkit-scrollbar {
  width: 3px;
  height: 3x;
  border-radius: 40px;
}

/* Track */
.small-scroll::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
  border-radius: 40px;

}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.5);
  border-radius: 40px;
}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.7);
}
</style>