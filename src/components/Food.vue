<template>
  <section class='flex flex-col h-screen justify-center bg-green-400 bg-gradient-to-br from-teal-400 via-green-400 to-teal-400 px-2 overflow-hidden'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-green-300  h-64 shadow-xl flex justify-between relative '>
      <img class="h-36 absolute -right-12 top-20 z-20 animate-pop" style="animation-duration: 600ms" src="https://ouch-cdn2.icons8.com/092rXt9duYPJKjUjWmOsDTp1gNrkdmLvjJ7cTerICGA/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzkv/MDkyYTAwNWMtNTFi/Ni00ODVhLWIwY2Mt/NDYwMThjYzdiMGM3/LnBuZw.png" alt="coconut">
      <div class="h-full w-full absolute flex flex-col z-10">
        <div class="h-[75%] bg-green-300 bg-gradient-to-b from-green-300/40 via-green-300/80 to-green-400/30"></div>
        <div class="h-[25%] bg-green-300 bg-gradient-to-t from-green-300/40 via-green-300/80 to-green-400/20 border-t border-green-600/60 transform "></div>
      </div>
      <div class="w-5/6 h-40 bg-green-400 rounded-t-2xl absolute z-30 left-1/2 transform -translate-x-1/2 bottom-10 animate-grow" style="box-shadow: -22px 10px 10px -10px grey;" >
        <div class="relative w-full h-full">
          <div class="absolute top-7 left-5">
            <h1 class="text-teal-900 text-3xl font-black ">Health Matters</h1>
            <h6 class="text-xs font-medium text-teal-800 w-44">Working Together for a Healthier World.</h6>
            <button @click="reload" class="bg-green-800 rounded-md text-xs text-white py-1 px-2 mt-4 hover:bg-green-900 active:bg-green-800 transition-all">
              Shop now
            </button>
          </div>
          <img class="absolute h-24 -bottom-5 right-5 animate-pop" style="animation-duration: 500ms" src="https://ouch-cdn2.icons8.com/iVDeDVrsU0oT5qw2UQTgQV9tt70eTC33WaZiUX44yiU/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDcz/LzZjODFmZjQ1LWRk/MzEtNGViYy05MjNl/LTVmNDc2ZDNmZjAy/ZC5wbmc.png" alt="watermelon">
          <img class="h-full absolute -bottom-5 -right-16 animate-pop" style="animation-duration: 1000ms" src="https://ouch-cdn2.icons8.com/iUxB7ePBdHrM4NSaL3yA6sRRfh1JJ4HuRQbsSaF3-UU/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQy/Lzc2OTMwYjA0LTJj/NmItNDczMi1iNDll/LTVhOTU2NTE4Y2Q3/Yy5wbmc.png" alt="tree">
          <img class="absolute h-24 -bottom-5 right-20 animate-pop" style="animation-duration: 500ms" src="https://ouch-cdn2.icons8.com/kn-etlb-4P-yzhqcANvNZDad34NXPvMki5u492oE-QY/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODcv/ZmE2NTM0MzMtOGRm/OC00NDQ3LWIxMTYt/MjZlZTQ1MTRkMGY0/LnBuZw.png" alt="blueberry">
          <img class="absolute h-20 -bottom-5 right-32 animate-pop" style="animation-duration: 500ms" src="https://ouch-cdn2.icons8.com/0D4B7zDBR5RbiiwkFCROyMhqn8XO_B3Z2-pZdEZZKwc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTUz/Lzc0MGJhZmY0LTU4/ZmQtNDhjNy1hNzFl/LThiNWMwMDhiZjE3/ZS5wbmc.png" alt="pumpkin">
          <img class="absolute h-20 -bottom-6 right-44 transform rotate-45 animate-pop" style="animation-duration: 500ms" src="https://ouch-cdn2.icons8.com/CTwTbqv5DtQi6Rs2rJtcwGOlCEqtH3IKjomo7qC0uVo/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODIy/LzgwMGIxMzRmLTJk/YjQtNDMxYy1iOTRj/LWI1NTkwYzIxOTY5/ZC5wbmc.png" alt="red grape">
          <img class="absolute w-24 -top-16 opacity-60 right-0 animate-pop" style="animation-duration: 1500ms"  src="https://ouch-cdn2.icons8.com/pKY53PPFT4olUnJkEJExc6ZKGbhDWyq1ewuwlmo71Qc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTg0/LzM5Y2I5NjI1LWU1/OWEtNGM0My1hYmE1/LTZkMWQ3Y2FhMWNi/Yi5wbmc.png" alt="cloud">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {

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