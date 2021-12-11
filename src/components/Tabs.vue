<template>
  <section class="h-screen bg-gradient-to-tr from-green-400 to-blue-500 flex flex-col justify-center">

    <div class="m-auto space-y-2 max-w-md">
      <h1 class="text-white text-center my-2 font-medium uppercase text-base">Best Summer Destination</h1>
      <nav class="bg-green-500 p-1 rounded-lg bg-opacity-20 flex space-x-1 shadow-md blur-md">
        <div v-for="(page,index) in pages" :key="index" @click="activePage = index" class=" text-sm font-bold py-3 w-36 text-center rounded-lg select-none transition-all duration-200" :class="[activePage === index ? 'bg-white text-blue-700' : 'hover:bg-blue-400 cursor-pointer text-white active:bg-blue-600','']">
          <span>{{page.name}}</span>
        </div>
      </nav>
      
      <main class="h-52 max-w-full bg-white rounded-lg  overflow-hidden">
        <div v-for="(page,index) in pages" :key="index" class="h-full w-full  relative if-empty-remove">
          <transition name="fade" class="relative">
              <img v-if="index === activePage" class=" absolute bottom-0" :src="page.imgContent">
          </transition>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      activePage : "1",
      pages : {
        "1" : {
          "name" : "Boracay Island",
          "imgContent" : "https://media.istockphoto.com/photos/boracay-island-aerial-view-western-visayas-philippines-picture-id685040322?b=1&k=20&m=685040322&s=170667a&w=0&h=n_5dBtgWJTIa-VEplUDhNKsJyYjXqDykF_6HptBTSuo="
        },
        "2" : {
          "name" : "Chocolate Hills",
          "imgContent" : "https://media.istockphoto.com/photos/chocolate-hills-under-blue-sky-in-the-philippines-picture-id120621678?b=1&k=20&m=120621678&s=170667a&w=0&h=gdXZLw6bFFTpCT4WMPn-S_Iaknq3Bqlzypsl0x5IJLM="
        },
        "3" : {
          "name" : "Rice Terraces",
          "imgContent" : "https://media.istockphoto.com/photos/terraced-rice-field-in-mu-cang-chai-vietnam-picture-id624183176?b=1&k=20&m=624183176&s=170667a&w=0&h=ufecKMmNQWAfV4H9d_kgu4Tbp3qy2zODK4_Fzfrs8KI="
        },
      }
    }
  }
}
</script>

<style>

</style>