<template>
  <section class='flex flex-col h-screen justify-center bg-cyan-500 px-2 bg-gradient-to-br from-cyan-500 via-emerald-400 to-cyan-500'>
    
    <div @click="onDelivery = true" class="w-96 h-32 bg-slate-900 rounded-full mx-auto relative overflow-hidden transform scale-75 sm:scale-100" :class="[onDelivery ? 'cursor-default' : 'cursor-pointer' ,'' ]">
      <div class="absolute top-1/2 z-30 w-24 -translate-y-1/2 transition-all duration-[5000ms] ease-out" :class="[!onDelivery ? 'left-8' : 'left-96' , '' ]">
        <img src="https://img.icons8.com/color/2x/truck-top-view.png" alt="">
      </div>
      <div class="absolute text-white text-3xl font-black top-1/2 -translate-y-1/2  flex space-x-32 transition-all duration-[5000ms] ease-in-out" :class="[!onDelivery ? 'left-36' : 'left-[-84rem]' , '' ]">
        <h6 class="opacity-80 w-60">
          Complete Order
        </h6>
        <div class="my-auto flex space-x-2">
          <div v-for="brick in 20" :key="brick" class="w-10 h-3 bg-white/60"></div>
        </div>
        <h6 class="opacity-80 w-60">
          <span>
            On Delivery
          </span>
          <span class="text-green-400 text-3xl">
            <ion-icon name="checkmark-done-outline"></ion-icon>
          </span>
        </h6>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      onDelivery : false,
    }
  },
  methods: {

  },
}

</script>

<style>

</style>