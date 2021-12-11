<template>
  <section class="h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 py-10 px-10">

    <main class="bg-white h-full flex flex-col justify-center rounded-xl">
      <div class="w-full max-w-md bg-black m-auto rounded-lg text-gray-600 grid grid-cols-5 px-2 pb-2 pt-4 gap-10 relative">
        <div v-for="(logo,index) in logos" :key="index" @click="activePage = index" class="flex cursor-pointer   py-2 transition-all duration-300 rounded-md z-20" :class="[index == activePage ? 'text-black' : 'hover:text-pink-400 active:scale-90 transform','']">
          <ion-icon v-if="activePage == index" class="text-4xl m-auto" :name="logo.src"></ion-icon>
          <ion-icon v-else class="text-4xl m-auto" :name="logo.src + '-outline'"></ion-icon>
        </div>
        <div class="absolute p-2 top-1 z-10"> 
          <div class="h-6 flex text-center w-14 text-blue-800 font-bold text-xs bg-white rounded-full top-0 -mt-6 mb-2 relative transition-all duration-1000" :style="{left : focusLeftPosition + '%' }">
            <span class="m-auto">
              {{this.logos[activePage].name}}
            </span>
          </div>
          <div class="bg-blue-500 h-12 w-14 rounded-lg transition-all duration-500 relative" :style="{left : focusLeftPosition + '%' }"></div>
        </div>
      </div>
    </main>

  </section>
</template>

<script>
export default {
  data(){
    return {
      activePage : 1,
      logos : {
        0 : {
          name : "Home",
          src : "home"
        },
        1 : {
          name : "Discover",
          src : "search"
        },
        2 : {
          name : "Upload",
          src : "add"
        },
        3 : {
          name : "Inbox",
          src : "chatbox"
        },
        4 : {
          name : "Profile",
          src : "person"
        },
        
        
      }
    }
  },
  computed : {
    focusLeftPosition(){
      return this.activePage * 165 + (this.activePage * 3);
    }
  }
}
</script>
