<template>
  <section class='flex flex-col h-screen justify-center bg-[#5D69BE] bg-gradient-to-br from-[#5D69BE] to-[#C89FEB] '>
  
    <div class="h-96 bg-[#1A1E4D] mx-auto rounded-2xl py-8 px-2 flex justify-between flex-col shadow-2xl shadow-purple-400/50 transition-all duration-700 overflow-hidden" :class="[isExpanded ? 'w-36' : 'w-16' , ''  ]">

      <div>
        <div @click="selectedNavIndex = index" v-for="(item,index) in navItems" :key="index" class="flex space-x-2 px-2 cursor-pointer bg-opacity-0 rounded-lg bg-purple-500 transition-all hover:bg-opacity-20 active:bg-opacity-30 select-none py-1" :class="[!isExpanded ? 'justify-center' : '','' ]" >
          <div class="my-auto  relative text-white text-2xl transform transition-all" :class="[!isExpanded ? 'scale-150' : '' , '' ]" >
            <div v-if="index === selectedNavIndex" class="h-5 w-5 bg-fuchsia-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  bg-opacity-50 filter blur-sm"></div>
            <ion-icon class="-mb-0.5" :name="item.icon"></ion-icon>
          </div>
          <h6 v-if="isExpanded" class="text-white text-md my-auto" :class="[index === selectedNavIndex ? 'neonText' : '','' ]" >
            {{item.name}}
          </h6>
        </div>
      </div>

      <div @click="isExpanded = !isExpanded" class="text-white bg-purple-500 h-8 w-8 text-xl flex rounded-full cursor-pointer transform active:scale-50 transition-all duration-500" :class="[!isExpanded ? '-rotate-180' : '','' ]">
        <ion-icon class="m-auto" name="caret-forward"></ion-icon>
      </div>

    </div>

  </section>
</template>

<script>

export default {
  data(){
    return {
      isExpanded : true,
      selectedNavIndex : 1,
      navItems : [
        {
          name : "Store",
          icon : "game-controller"
        },
        {
          name : "Community",
          icon : "headset"
        },
        {
          name : "Live",
          icon : "person"
        },
        {
          name : "Events",
          icon : "calendar"
        },
      ]
    }
  },
  methods: {

  },
}

</script>

<style scoped>
.neonText {
  color: #fff;
  text-shadow:
    /* White glow */
    0 0 7px #C89FEB,
    0 0 10px #C89FEB,
    0 0 21px #C89FEB,
    /* Green glow */
    0 0 42px #C89FEB,
    0 0 82px #C89FEB,
    0 0 92px #C89FEB,
    0 0 102px #C89FEB,
    0 0 151px #C89FEB;
}

</style>