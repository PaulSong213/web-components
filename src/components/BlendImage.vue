<template>
  <section class="flex flex-col justify-center h-screen bg-amber-200 p-4">
    <div class="flex flex-col justify-center items-center h-60 relative  rounded-xl overflow-hidden">
      <div class="relative w-full h-full rounded-xl bg-texture bg-cover bg-center bg-blend-color-burn overflow-hidden" :class="[currentPersonality.color]" :style="{ 'background-image': 'url(' + currentPersonality.bgImage + ')'}">
        <h1 class="px-8 pt-16 w-4/6 h-full text-6xl font-black uppercase text-white transform  mix-blend-normal filter bg-opacity-50 opacity-90">Be <br/>{{currentPersonality.name}}</h1>
      </div>
      <h6 class="absolute left-0 px-8 top-2 text-white text-5xl opacity-30 font-black">0{{(currentIndex + 1)}}</h6>
      <img class="absolute mix-blend-hard-light right-0 h-full top-0" :src="currentPersonality.bgImage">
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      currentIndex : 0,
      personalities : [
        {
          name : "strong",
          bgImage : "https://images.unsplash.com/flagged/photo-1576579206905-df3aa87352b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXJkZWQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
          color : "bg-amber-700 "
        },
        {
          name : "confident",
          bgImage : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          color : "bg-purple-800 "
        },
        {
          name : "curios",
          bgImage : "https://images.unsplash.com/photo-1552590752-a3b19b152ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwd2l0aCUyMGV5ZWdsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          color : "bg-green-600 "
        },
        {
          name : "you",
          bgImage : "https://images.unsplash.com/photo-1603987248955-9c142c5ae89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
          color : "bg-blue-900 "
        },
      ]
    }
  },
  mounted(){
    // this.startGIF()
  },
  computed : {
    currentPersonality(){
      return this.personalities[this.currentIndex];
    },
  },
  methods : {
    startGIF(){
      setInterval(()=>{
        if(this.currentIndex === this.personalities.length){
          this.currentIndex = 0;
          return;
        }
        this.currentIndex++;
      },2000);
    }
  }
}
</script>
