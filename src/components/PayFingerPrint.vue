<template>
  <section class='flex flex-col justify-center h-screen px-2 bg-fuchsia-400 bg-gradient-to-br from-fuchsia-400 to-indigo-400'>
    <button @click="moveTransaction" class="h-24 bg-black rounded-full mx-auto flex hover:bg-opacity-80 active:bg-opacity-100 transition-all duration-1000 relative"
    :class="[transactionIndex === 0  ? 'w-48' : 'w-24' ,'' ]"
    >
      <span class="text-white text-4xl font-mono tracking-widest uppercase font-bold m-auto transition-all duration-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      :class="[transactionIndex === 0  ? 'scale-100' : 'scale-0 ' ,'' ]"
      >Pay</span>
      <span class="text-white text-4xl font-mono tracking-widest uppercase font-bold m-auto transition-all duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 delay-200"
      :class="[transactionIndex === 1  ? 'scale-125 opacity-100' : 'scale-25 opacity-0' ,'' ]"
      >
      <ion-icon name="finger-print-sharp"></ion-icon>
      </span>
      <span class="text-white text-4xl font-mono tracking-widest uppercase font-bold m-auto transition-all duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 delay-200"
      :class="[transactionIndex === 2  ? 'scale-125 opacity-100' : 'scale-0 opacity-0' ,'' ]"
      >
      <ion-icon name="checkmark-done-sharp"></ion-icon>
      </span>
    </button>
  </section>
</template>

<script>

export default {
  data(){
    return {
      transactionIndex : 0
    }
  },
  methods: {
    moveTransaction(){
      if(this.transactionIndex !== 0 )return;
      this.transactionIndex = 1;
      setTimeout(() => {
        this.transactionIndex = 2;
        setTimeout(() => {
          this.transactionIndex = 0;
        }, 2000);
      }, 3000);
    }
  },
}

</script>

<style>

</style>