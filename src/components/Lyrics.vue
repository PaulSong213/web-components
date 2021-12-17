<template>
  <section @click="lyricIndex++" class="h-screen bg-slate-700 bg-gradient-to-br flex flex-col justify-center ">

    <div class="absolute w-full h-full z-10 blur-sm">
      <div class="relative w-full h-full">
        <div class="absolute top-10 right-1/2 transform translate-x-1/2 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-sm opacity-90 "  :class="[animationName]"  ></div>
        <div class="absolute top-10 right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-sm opacity-90   animation-delay-2000" :class="[animationName]" ></div>
        <div class="absolute top-24 left-10 w-24 h-24 bg-pink-300 rounded-full mix-blend-multiply filter opacity-90   animation-delay-4000" :class="[animationName]" ></div>
        <div class="absolute top-1/2 left-10 w-24 h-24 bg-cyan-300 rounded-full mix-blend-multiply filter opacity-90   animation-delay-4000" :class="[animationName]" ></div>
        <div class="absolute bottom-24 right-10 w-24 h-24 bg-teal-300 rounded-full mix-blend-multiply filter opacity-90   animation-delay-4000" :class="[animationName]" ></div>
        <div class="absolute bottom-10 right-1/2 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter opacity-90   animation-delay-2000" :class="[animationName]" ></div>
      </div>
    </div>

    <div  class="w-full text-center px-48 z-20 ">
      <h1 class="text-white text-9xl font-black tracking-widest font-fancy">{{lyrics[lyricIndex]}}</h1>
    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      lyricIndex : 0,
      animationName : "animate-shrink slow-animation blur-sm",
      lyrics : [
        "",
        "But I'm not a kid no more",
        "So I must open doors",
        "And make you feel like the lady you are",
        "My mamma raised me",
        "To be classy",
        "Not flashy",
        "I'm happy to please you",
      ]
    }
  },
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

  .slow-animation {
    animation-duration: 10000ms;
  }

  

  .font-fancy {
    font-family: 'Permanent Marker', cursive;
    background-image: url('https://static.vecteezy.com/system/resources/previews/000/580/671/non_2x/vector-colorful-gradient-background.jpg');
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    filter: brightness(120%);
  }
</style>