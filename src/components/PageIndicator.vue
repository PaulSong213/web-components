<template>
  <section class="flex flex-col justify-center h-screen px-2 overflow-hidden bg-amber-300">
    <div class="flex flex-col w-full gap-10 scale-125">
      <section class="relative flex gap-5 mx-auto w-max">
        <div v-for="indicator in 5" class="w-4 h-4 rounded-full bg-slate-700"></div>
        <div
          class="absolute w-2 h-2 transition-all duration-1000 -translate-y-1/2 bg-red-700 rounded-full top-1/2"
          :class="[bulletLeftPosition]"
        ></div>
      </section>

      <section class="flex h-12 gap-3 mx-auto">
        <div
          v-for="indicator in 5"
          class="w-6 my-auto transition-all duration-500"
          :class="[pageNumber !== indicator ? 'h-8 bg-slate-600' : 'h-12 scale-x-75 bg-slate-900', '']"
        ></div>
      </section>

      <section class="flex gap-3 mx-auto">
        <div
          v-for="indicator in 5"
          class="flex items-center w-6 h-6 text-xs font-bold transition-all duration-1000 rounded-md text-slate-300"
          :class="[pageNumber !== indicator ? 'bg-slate-600' : 'bg-red-900', '']"
        >
          <h6 class="m-auto leading-6">{{ indicator }}</h6>
        </div>
      </section>

      <section class="flex gap-32 mx-auto text-3xl text-slate-600">
        <button @click="nextPage(false)">
          <ion-icon name="caret-back-outline"></ion-icon>
        </button>
        <button @click="nextPage">
          <ion-icon name="caret-forward-outline"></ion-icon>
        </button>
      </section>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      pageNumber: 1
    }
  },
  methods: {
    nextPage(isNext = true){
      if(isNext){
        if(this.pageNumber >= 5)return this.pageNumber = 1;
        return this.pageNumber++;
      }else{
        if(this.pageNumber <= 1)return this.pageNumber = 5;
        return this.pageNumber--;
      }
    }
  },
  computed: {
    bulletLeftPosition() {
      switch (this.pageNumber) {
        case 1:
          return 'left-1'
          break;
        case 2:
          return 'left-[25%]'
          break;
        case 3:
          return 'left-[48%]'
          break;
        case 4:
          return 'left-[70%]'
          break;
        case 5:
          return 'left-[93%]'
          break;
        default:
          return 'left-1'
          break;
      }
    }
  }
}

</script>

<style>
</style>