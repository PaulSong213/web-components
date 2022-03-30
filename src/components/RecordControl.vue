<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-slate-900 bg-gradient-to-b from-slate-900 to-slate-800"
  >
    <div class="grid grid-cols-2 gap-2 mx-auto">
      <button
        @click="isLoading = !isLoading"
        class="relative w-12 h-24 ml-auto bg-white rounded-full"
      >
        <div
          class="w-[2.5rem] rounded-full absolute left-1/2 -translate-x-1/2 transition-all duration-1000"
          :class="[
            isRecording
              ? 'top-[5%] bg-red-600 '
              : 'top-[95%] bg-slate-900  -translate-y-full',
            '',
            isLoading ? 'h-[5.5rem] ' : 'h-[2.5rem]',
            '',
            isRecording && !isLoading ? 'animate-pulse' : 'animate-none',
            '',
          ]"
        ></div>
      </button>
      <div class="flex flex-col justify-between w-24 py-2">
        <button @click="isLoading = !isLoading" class="w-full text-left ">
          <transition name="fade">
            <h6
              v-if="isLoading || !isRecording"
              class="text-2xl transition-all duration-700"
              :class="[isRecording ? 'text-white' : 'text-slate-400', '']"
            >
              Record
            </h6>
            <h6 v-else class="text-2xl tracking-widest text-white">0:0{{ timer }}</h6>
          </transition>
        </button>
        <button 
        @click="isLoading = !isLoading"
        class="w-full text-2xl tracking-widest text-left">
          <h6
            class="transition-all duration-700"
            :class="[!isRecording ? 'text-white' : 'text-slate-400', '']"
          >
            Stop
          </h6>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isRecording: false,
      isLoading: false,
      timer: 0,
      timerInterval : null
    };
  },
  methods: {},
  watch: {
    isLoading(isLoading) {
      setTimeout(() => {
        this.isLoading = false;
        if (isLoading) this.isRecording = !this.isRecording;
      }, 1000);
    },
    isRecording(isRecording){
      if(!isRecording){
        clearInterval(this.timerInterval);
        this.timer = 0;
        return;
      }
      this.timerInterval = setInterval(() => {
        this.timer++;
      }, 1000);
    }
  },
};
</script>

<style></style>
