<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-emerald-400 bg-gradient-to-br from-emerald-500 to-lime-400"
  >
    <h6 class="relative w-full my-4 text-5xl font-bold text-center text-slate-700">
      <span v-if="isAnswered"> 00:0{{ counter }} </span>
    </h6>
    <button
      @click="isAnswered = !isAnswered"
      class="relative flex items-center justify-center mx-auto text-5xl text-white transition-all duration-700 rounded-full h-28"
      :class="[isAnswered ? 'bg-red-700 w-60' : 'bg-slate-900 w-28', '']"
    >
      <div
        v-if="!isAnswered"
        class="absolute rounded-full w-28 h-28 bg-slate-900 animate-ping opacity-10"
      ></div>
      <transition name="fade">
        <h6 v-if="isAnswered" class="my-auto ml-auto text-2xl font-bold text-white">
          End Call
        </h6>
      </transition>
      <span
        class="transition-all duration-700"
        :class="[
          isAnswered
            ? '-mt-4 rotate-[145deg] mr-auto ml-4'
            : 'mt-6 mx-auto animate-bounce delay-1000',
          '',
        ]"
      >
        <ion-icon class="m-auto rotate-[135deg]" name="call"></ion-icon>
      </span>
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isAnswered: false,
      counter: 0,
      counterInterval : null
    };
  },
  methods: {},
  watch :{
    isAnswered(isAnswered){
      if(!isAnswered){
        clearInterval(this.counterInterval);
        this.counter = 0;
      }else{
        setInterval(() => {
          this.counter++;
        }, 1000);
      }
    }
  }
};
</script>

<style></style>
