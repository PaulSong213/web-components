<template>
  <section class='flex flex-col h-screen justify-center bg-sky-400 px-2 bg-gradient-to-br from-cyan-500 via-sky-400 space-y-14 to-cyan-500'>
    <section class="absolute z-30 top-16 left-1/2 -translate-x-1/2" >
        <div class="h-40 w-40 mx-auto relative transform scale-150 z-10" >
        <div class="absolute bottom-1 botttom-pola left-1/2 -translate-x-1/2 flex flex-col rounded-sm z-10">
        </div>
        <div class="w-24 h-2 bg-slate-900 absolute bottom-7 left-1/2 -translate-x-1/2 z-30"></div>
        <div class="absolute bottom-9 top-pola left-1/2 -translate-x-1/2 flex flex-col rounded-sm z-30">
        </div>
        <div class="w-24 left-1/2 -translate-x-1/2 h-2 absolute bottom-5 bg-cyan-900 rounded-t-sm z-30"></div>
        <div class="w-24 left-1/2 -translate-x-1/2 h-2 absolute bottom-3 bg-cyan-900 rounded-b-sm z-10"></div>
        <div class="bg-cyan-200 bg-gradient-to-b from-cyan-200 via-cyan-200 to-cyan-300 rounded-t-md h-24 w-[130px] absolute left-1/2 -translate-x-1/2 bottom-10 shadow-sm z-30">
          <div class="relative h-full w-full">
            <div class="w-16 h-16 bg-slate-900 rounded-full absolute left-1/2 shadow-xl -translate-x-1/2 top-1/2 -translate-y-1/2 z-30"></div>
            <div class="w-12 h-12 border border-slate-700 rounded-full absolute left-1/2 shadow-xl -translate-x-1/2 top-1/2 -translate-y-1/2 z-30"></div>
            <div class="w-3 h-3 bg-slate-700/80 rounded-full absolute left-1/2 shadow-xl -translate-x-1/2 top-1/2 -translate-y-1/2 z-30"></div>
            <div class="bg-slate-900 w-4 h-4 top-2 right-2 absolute flex">
              <div class="bg-red-500/70 w-2 h-2 m-auto rounded-full"></div>
            </div>
            <div class="bg-cyan-400 border-2 border-cyan-500 animate-pulse top-4 -translate-y-1/2 right-4 translate-x-1/2 m-auto rounded-full absolute  transition-all duration-500" :class="[isCameraClicked ? 'w-6 h-6 opacity-40' : 'w-0 h-0 opacity-0' ,'' ]" ></div>
            <div class="bg-slate-900 w-5  h-2 top-2  left-2 absolute flex"> </div>
            <button @click="isCameraClicked = true" class="bg-slate-900 w-14 rounded-t-sm left-1/2 -translate-x-1/2 h-2 absolute  transition-all duration-500  transform z-30" :class="[isCameraClicked ? 'scale-y-0 -top-2' : 'scale-y-100 -top-2' , '' ]" > </button>
        </div>
        </div>
        <h1 class="text-black/60 font-black uppercase absolute -translate-y-full -translate-x-full left-24 -bottom-10 w-full text-xs">Some of my shots</h1>
        <div v-for="(shot,index) in shots" :key="index" class="absolute w-20 h-24  bg-white p-2 shadow-md z-20  translate-y-full transition-all duration-1000" :class="[shottedIndexes.includes(index) ? 'top-24 scale-y-100' : '-top-1/2 scale-y-50','', isAvailableToPlace.includes(index) ? shot.place : 'left-1/2 -translate-x-1/2','' ]">
          <div class="relative w-full h-full">
            <img class="absolute object-cover min-w-full min-h-full" :src="shot.image">
          </div>
        </div>
        </div>
    </section>
  </section>
</template>
<script>

export default {
  data(){
    return {
      isCameraClicked : false,
      nextShotIndex : 0,
      shottedIndexes : [],
      isAvailableToPlace : [],
      shots : [
        {
          image : "https://images.unsplash.com/photo-1643967377110-c17a5ddf14f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
          place : "-left-16"
        },
        {
          image : "https://images.unsplash.com/photo-1643961058882-f6c5c6a7b46c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
          place : "left-36"
        },
        {
          image : "https://images.unsplash.com/photo-1643785011662-3f1407410f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
          place : "left-1/2 -translate-x-1/2"
        },
        
      ]
    }
  },
  methods: {

  },
  watch : {
    isCameraClicked(isClicked){
      if(isClicked){
        setTimeout(() => {
          this.isCameraClicked = false;
        }, 500);
        if(this.nextShotIndex < this.shots.length){
          this.shottedIndexes[this.shottedIndexes.length] = this.nextShotIndex;
          setTimeout(() => {
            this.isAvailableToPlace[this.isAvailableToPlace.length] = this.nextShotIndex;
            this.nextShotIndex++;
          }, 1000);
        }else{
          this.nextShotIndex = 0;
          this.isAvailableToPlace = [];
          this.shottedIndexes = [];
        }
      }
    }
  }
}

</script>

<style>
.botttom-pola {
	border-top: 33px solid rgb(15,23,42);
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	height: 0;
	width: 160px;
}
.top-pola {
	border-bottom: 8px solid rgb(130, 208, 204);
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	height: 0;
	width: 160px;
}

</style>