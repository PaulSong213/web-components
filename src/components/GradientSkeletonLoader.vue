<template>
  <section class='flex flex-col h-screen justify-center bg-purple-400 bg-gradient-to-b from-purple-400 to-purple-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-gray-100  h-64 shadow-xl relative grid grid-cols-2 p-5 sm:p-10 gap-3 sm:gap-5'>
      <div v-for="(card, index) in cards " :key="index" class="w-full h-full  my-auto space-y-2">
        <div class="h-32 w-full bg-gray-400 rounded-md bg-gradient-to-br overflow-hidden shadow-sm border border-gray-200" :class="[isLoading ? 'animate-pulse' : '','' , card.gradient]">
            <img class="relative min-w-full min-h-full transition-all duration-300" :class="[isLoading ? 'opacity-0' : 'opacity-100' ,'' ]" :src="card.image" alt="">
        </div>
        <div class="h-16 overflow-auto small-scroll">
          <div v-if="isLoading" class="space-y-1 opacity-90 animate-pulse">
            <div class="bg-gray-400 rounded-full w-full h-3  bg-gradient-to-br" :class="[card.gradient]" ></div>
            <div class="bg-gray-400 rounded-full h-3 w-5/6  bg-gradient-to-br" :class="[card.gradient]" ></div>
          </div>
          <div v-else class="text-xs font-semibold text-slate-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, ea obcaecati. 
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
      isLoading : true,
      cards : [
        {
          image : 'https://images.unsplash.com/photo-1644940374443-4add85d08a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
          gradient : 'from-purple-400 via-rose-400 to-orange-400'
        },
        {
          image : 'https://images.unsplash.com/photo-1644943054825-13b1e3f22d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
          gradient : 'from-cyan-400 via-emerald-400 to-green-400'
        }
      ]
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      setInterval(() => {
        this.isLoading = !this.isLoading;
      }, 4000);
    }
  },
}

</script>

<style>
.small-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  border-radius: 100%;
}

/* Track */
.small-scroll::-webkit-scrollbar-track {
  background: rgba(252, 252, 252, 0.3);

}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgb(102, 101, 101);
}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(97, 96, 96);
}

</style>