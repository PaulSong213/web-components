<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-fuchsia-400 bg-gradient-to-br from-fuchsia-400 to-orange-400"
  >
    <button
      @click="isPinned = !isPinned"
      class="relative h-20 mx-auto transition-all duration-700 bg-white border-2 rounded-full sm:scale-150 w-52 border-slate-100/30"
        :class="[!isPinned ? 'bg-white' : 'bg-purple-600', '']"
    >
      <div
        class="absolute flex w-24 h-24 transition-all duration-1000 -translate-y-1/2 bg-purple-500 border-2 rounded-full shadow-2xl top-1/2 shadow-purple-400/50 border-white/30"
        :class="[isPinned ? 'left-[103%] -translate-x-full' : 'left-[-3%]', '']"
      >
      <span class="m-auto text-6xl text-white transition-all duration-700"
        :class="[isPinned ? 'rotate-0' : 'rotate-45', '',
        isPinDone ? 'translate-y-3' : '' , ''
        ]"
      >
      <ion-icon name="pin"></ion-icon>
      </span>
      </div>
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isPinned: false,
      isPinDone : false
    };
  },
  watch: {
    isPinned(isPinned){
      if(!isPinned)return this.isPinDone = false;
      setTimeout(() => {
        this.isPinDone = true;
      }, 1000);
    }
  },
};
</script>

<style></style>
