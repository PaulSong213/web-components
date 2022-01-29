<template>
  <section class='flex flex-col h-screen justify-center bg-purple-900 bg-gradient-to-b from-purple-800 via-fuchsia-800 to-purple-800 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm  h-64 shadow-xl  relative grid grid-cols-12 overflow-hidden transition-all duration-1000' :style="{backgroundColor : theories[selectedIndex].bgColor }" >
      <div class="col-span-7 pt-10 pl-6 pb-4 flex flex-col justify-between">
        <h6 class="text-4xl font-black uppercase tracking-wider transition-all duration-700" :class="[nameClass]" > 
          {{theories[selectedIndex].name }}
        </h6>
        <div  class="flex ">
          <div class="transition-all duration-700 overflow-hidden my-auto" @click="selectedIndex--"  :class="[selectedIndex > 0 ? 'w-8' : 'w-0' , '' ]">
            <h6    class="underline cursor-pointer my-auto text-xs text-slate-800 font-black "  >Back</h6>
          </div>
          <div @click="selectedIndex++" class="text-4xl cursor-pointer transition-all duration-700 overflow-hidden" :class="[selectedIndex !== theories.length - 1 ? 'w-8' : 'w-0' , '' ]" >
            <ion-icon class="pointer-events-none" name="arrow-forward"></ion-icon>
          </div>
        </div>
      </div>
      <div class="col-span-5 h-[90%] my-auto mr-4 relative">
        <div v-for="(theory, index) in theories" :key="index" class="w-full h-full bg-inherit shadow-md border border-slate-300/50 p-2 absolute transition-all" :style="{ backgroundColor : theory.bgColor}" :class="[selectedIndex !== index ? theory.inactiveRotate + ' z-10 rotate-6 duration-700' : 'z-20 rotate-0 duration-1000' ,'', selectedIndex > index ? 'ml-96 mt-44' : '', '' ] " >
          <img class="w-11/12 mx-auto" :src="theory.image" alt="">
          <p class="text-xs font-medium mt-2 ">
            {{theories[selectedIndex].description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  data(){
    return {
      nameClass : 'opacity-100',
      selectedIndex : 0,
      theories : [
        {
          name : "butterfly effect Theory",
          description : " small things can have non-linear impacts on a complex system",
          image : "https://ouch-cdn2.icons8.com/j4afFReatr-sHpE6k776zTk0mZMmS3-PuRi1d52uRkE/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzQ0/Lzg4YWE5MGU4LWQw/NjUtNDZlNi04MjQ5/LWEzNmM5NWVlNzEx/NS5zdmc.png",
          bgColor : "#C98474",
        },
        {
          name : "Dead internet theory",
          description : "A conspiracy theory spreading online says the whole internet is now fake.",
          image : "https://ouch-cdn2.icons8.com/QbldIAfN0czvuXWWYUgk_xgZkC3THK5pnZwVGQBFwE8/rs:fit:256:192/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzE0/L2ZhYmVkYzlkLWY1/ZTItNDBjNi1iOTVj/LTdmYzJjNTI3MTll/Yy5zdmc.png",
          bgColor : "#F2D388",
        },
        {
          name : "Einstein's Theory of relativity",
          description : "Einstein's understanding of how gravity affects the fabric of space-time.",
          image : "https://ouch-cdn2.icons8.com/gn3gYrBxGaEUTk6HsF1rfgw9S6U2EKP2x8hk8BtBMwk/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTU1/LzQ1MThiYWQ2LTM5/ZGUtNDdjMC04YmZi/LWIyYmIzODkzMzkz/Zi5zdmc.png",
          bgColor : "#A7D2CB",
        },
        {
          name : "Theory of Evolution",
          description : "Idea that all species are related and gradually change over time. ",
          image : "https://ouch-cdn2.icons8.com/Uzw3K8m228z0vG-qIZAgqslwQEUl3YEDcG_XXpHJ488/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzAz/LzFhMTI1ZmUwLTBh/MzMtNGM1MC1hMTI2/LWVmZWMyY2M2OTVh/My5zdmc.png",
          bgColor : "#ACF5B6",
        },
        {
          name : "Big Bang Theory",
          description : "Says the universe as we know it started with an infinitely hot and dense single point ",
          image : "https://ouch-cdn2.icons8.com/9d0piLltFpZkbokprA5VWRKl7jBOLybmEgKMH45EP-A/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzY2/L2I1NmQ2NzliLWEw/MGUtNDYyMy1hMDQ0/LTcyMTljZmRmMDc2/My5zdmc.png",
          bgColor : "#C5BDDC",
        },
        
      ]
    }
  },
  methods: {

  },
  watch : {
    selectedIndex(){
      this.nameClass = 'opacity-0';
      setTimeout(() => {
        this.nameClass = 'opacity-100';
      }, 300);
    }
  }
}

</script>

<style>

</style>