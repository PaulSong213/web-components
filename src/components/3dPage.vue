<template>
  <section class='flex flex-col h-screen justify-center bg-amber-400 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-400 px-2 overflow-hidden'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-green-300  h-64 shadow-xl flex justify-between relative '>
      <div class="h-full w-full absolute flex flex-col z-10">
        <div class="h-[75%] bg-slate-300 bg-gradient-to-b from-slate-300/40 via-slate-300/80 to-slate-400/30"></div>
        <div class="h-[25%] bg-slate-300 bg-gradient-to-t from-slate-300/40 via-slate-300/80 to-slate-800/20 border-t border-green-600/60 transform "></div>
      </div>
      <div class="w-5/6 h-56 bg-amber-400 rounded-t-2xl absolute z-30 left-1/2 transform -translate-x-1/2 bottom-10 animate-grow" style="box-shadow: -22px 10px 10px -10px grey;" >
        <div class="relative w-full h-full p-4">
          <div class="absolute grid grid-cols-12 h-full w-full">
            <div class="col-span-2 h-full w-full space-y-2">
              <button v-for="(page,index) in ads" :key="index"  @click="selectedIndex = index" class="bg-white bg-opacity-50  font-bold py-1 px-2 text-xs w-full  transition-all select-none" :class="[selectedIndex === index ? 'cursor-default bg-amber-900 text-white' : 'cursor-pointer gover:bg-opacity-70 active:bg-opacity-100 text-amber-900',''  ]" >
                Ads {{index + 1}}                
              </button>
            </div>
            <div class="col-span-10 pr-8 pl-2">
              <img :src="ads[selectedIndex]" alt="">
            </div>
          </div>
          <img class="h-24 absolute bottom-0 right-0 animate-pop" style="animation-duration: 1000ms" src="https://ouch-cdn2.icons8.com/qa4RtUmLNnT_mBjq9t4hq3brtZeY7f9128SnOyQzh8E/rs:fit:256:1742/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzcz/LzBhYTgwNWFlLTk1/YTMtNGY1Mi04OWYx/LTU0YWM5MGI2ZmRi/NC5zdmc.png" alt="street light">
          <img class="h-28 absolute -bottom-8 -right-16 animate-pop" style="animation-duration: 1000ms" src="https://ouch-cdn2.icons8.com/iUxB7ePBdHrM4NSaL3yA6sRRfh1JJ4HuRQbsSaF3-UU/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQy/Lzc2OTMwYjA0LTJj/NmItNDczMi1iNDll/LTVhOTU2NTE4Y2Q3/Yy5wbmc.png" alt="building">
          <img class="h-16 absolute -bottom-8 left-20 animate-pop" style="animation-duration: 1000ms" src="https://ouch-cdn2.icons8.com/JJVy-O4aM2dQDia0uuxUf7emQpkxdkrHNVeY9JC5pHs/rs:fit:256:265/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTk0/LzFhZWFlNTE0LTY0/MTUtNDcxYi04ZmUy/LTY1MjIxNzM2OTU4/YS5wbmc.png" alt="office worker">
          <img class="h-16 absolute -bottom-8 right-8 animate-pop" style="animation-duration: 1000ms" src="https://ouch-cdn2.icons8.com/k4sXLA434JuK3_O8uFPvou5-WQJzcHgpmrRw3WKYT6g/rs:fit:256:226/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzA5/LzlmZjgzMTFmLWJh/OTMtNGVhMy1hYzRl/LTYwOTMwZjA0NzM4/YS5wbmc.png" alt="pet">
          <img class="h-36 absolute -bottom-12 -left-32 animate-pop" style="animation-duration: 1000ms" src="https://ouch-cdn2.icons8.com/WecnXbjYzf3OKuj5NzS1_MI1PJ9teZRTqW1CgqiJTI4/rs:fit:256:192/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjY1/L2VhZGM5ZGYyLWI2/OGUtNDkyZi05NmQ1/LTVhZmIzYTQ1OTBh/OS5wbmc.png" alt="tree">
          <img class="absolute w-24 -top-16 opacity-100 -right-16 animate-pop" style="animation-duration: 1500ms"  src="https://ouch-cdn2.icons8.com/pKY53PPFT4olUnJkEJExc6ZKGbhDWyq1ewuwlmo71Qc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg0/LzM5Y2I5NjI1LWU1/OWEtNGM0My1hYmE1/LTZkMWQ3Y2FhMWNi/Yi5wbmc.png" alt="cloud">
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
      ads : [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuZuK7AYjokXUlgXDSkt_8Bi-7D99k9J6gQ&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsA4J9w6exL8Rscyn97EXJ5P9NWKcnfyKmA&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR2QUZ4_2A1zO9DHxjLbgAWnPs8Y8lwDezA&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZvWFWrgJSLwYJojmrrKdPHYeTh_QFVtlag&usqp=CAU"
      ]
    }
  },
  methods: {
    reload(){
      location.reload()
    }
  },
}
</script>
<style scoped>
.animate-pop {
  animation-name: pop;
}
.animate-grow{
  animation: grow 300ms ;
}
@keyframes pop {
  from {
    transform: scale(0%);
  }
  to {
    transform: scale(100%);
  }
}
@keyframes grow {
  from {
    height: 0;
  }
  
}
</style>