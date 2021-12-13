<template>
  <section class="h-screen bg-purple-500 flex flex-col justify-center p-4">

    <div class="max-w-lg bg-blue-50 mx-auto w-full py-24 rounded-2xl shadow-2xl flex justify-center">
      <div class="flex w-max mx-auto relative transform scale-75 sm:scale-100 m-auto">

        <div @click="count--" class="bg-blue-400 hover:bg-blue-500 active:bg-blue-400 cursor-pointer select-none transition-all bg-opacity-90 text-9xl h-24 leading-10 py-4 pl-8 w-32 flex justify-start text-white rounded-full mr-20">
          <span class="my-auto font-roboto-mono mt-4">-</span>
        </div>
        <div class="absolute bg-blue-500 bg-gradient-to-br from-blue-500 to-green-500 shadow-2xl flex text-8xl text-white rounded-3xl p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36">
          <span class="m-auto font-roboto-mono select-none animate-pop" :class="[animationClass]" >{{count}}</span>
        </div>
        <div  @click="count++" class="bg-blue-400 hover:bg-blue-500 active:bg-blue-400 cursor-pointer select-none transition-all bg-opacity-90 text-7xl h-24 leading-10 py-4 pr-8 w-32 flex justify-end text-white rounded-full">
          <span class="my-auto font-roboto-mono">+</span>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
      count : 0,
      animationClass : "animate-paused",
    }
  },
  watch : {
    count(){
      this.animationClass = "";
      setTimeout(()=>{
        this.animationClass = "animate-paused";
      }, 300);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
.font-roboto-mono{
  font-family: 'Indie Flower', cursive;
}

.animate-pop{
  animation: pop 300ms ease-out infinite;
}

@keyframes pop {
  0% {
    transform: scale(100%);
  }
  50% {
    transform: scale(150%);
  }
  100% {
    transform: scale(100%);
  }
}

.animate-paused {
  animation-play-state: paused;
}

</style>