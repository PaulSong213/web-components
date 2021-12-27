<template>
  <section class='flex flex-col h-screen justify-center bg-[url("https://c.tenor.com/fBoFE2aeLPsAAAAd/pixel-neon-rain.gif")] space-y-3'>
    <div class="mx-auto w-full max-w-xs flex justify-between">
      <div class="flex space-x-1">
        <h1 class="font-bold text-xs px-4 py-2 text-white bg-fuchsia-800  w-max rounded-full select-none">2022</h1>
        <h1 class="font-bold text-xs px-4 py-2 text-gray-700 bg-white w-max rounded-full select-none">{{months[selectedIndex].name}}</h1>
      </div>
      <div class="flex space-x-1">
        <h1 v-if="selectedIndex > 0" @click="nextMonth(false)" class="font-bold flex w-7 h-7 text-white bg-fuchsia-800 opacity-50 cursor-pointer hover:bg-opacity-75 rounded-full text-lg">
          <ion-icon class="m-auto" name="caret-back-outline"></ion-icon>
        </h1>
        <h1 v-if="selectedIndex < 11"  @click="nextMonth()" class="font-bold flex w-7 h-7 text-white bg-fuchsia-800 cursor-pointer hover:bg-opacity-75 rounded-full text-lg">
          <ion-icon class="m-auto" name="caret-forward-outline"></ion-icon>
        </h1>
      </div>
    </div>
    <div class='mx-auto  bg-white bg-opacity-30 backdrop-blur-sm shadow-violet-600/20 rounded-lg py-4 w-full max-w-xs shadow-xl flex justify-between relative h-[17rem] select-none'>
      <div class="w-full ">
        <div class="grid grid-cols-7 gap-1 w-full text-black">
          <div class="h-8 w-8 flex " v-for="(day,index) in days" :key="index" >
            <h6 class="m-auto font-semibold text-xs text-pink-500">{{day}}</h6>
          </div>
          <div class="h-8 w-8 flex col-start-4" v-for="(day,index) in months[selectedIndex].dayCount"   :key="index"  :style="{ gridColumnStart : getColStart(index, months[selectedIndex].start) }"  >
            <h6 class="m-auto text-sm"  >{{day}}</h6>
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
      selectedIndex : 0,
      days : ['S','M','T','W','T','F','S'],
      months : [
        {
          name : "January",
          start : '7',
          dayCount : 31
        },
        {
          name : "February",
          start : '3',
          dayCount : 28
        },
        {
          name : "March",
          start : '3',
          dayCount : 31
        },
        {
          name : "April",
          start : '6',
          dayCount : 30
        },
        {
          name : "May",
          start : '1',
          dayCount : 31
        },
        {
          name : "June",
          start : '4',
          dayCount : 30
        },
        {
          name : "July",
          start : '6',
          dayCount : 31
        },
        {
          name : "Augost",
          start : '2',
          dayCount : 31
        },
        {
          name : "September",
          start : '5',
          dayCount : 30
        },
        {
          name : "October",
          start : '7',
          dayCount : 31
        },
        {
          name : "November",
          start : '3',
          dayCount : 30
        },
        {
          name : "December",
          start : '5',
          dayCount : 31
        },
        
      ]
    }
  },
  methods: {
    nextMonth(isNext = true){
      if(isNext)return this.selectedIndex++;
      return this.selectedIndex--;
    },
    getColStart(index, colStart){
      if(index > 0)return 'auto';
      return colStart;
    }
  },
}

</script>

<style>

</style>