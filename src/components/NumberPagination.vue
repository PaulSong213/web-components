<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-slate-900 bg-gradient-to-b from-slate-900 to-slate-800 relative"
  >
    <div class="flex w-max mx-auto scale-75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button @click="currentPage--" class="h-24 w-24 bg-cyan-900 shadow-lg rounded-sm hover:bg-opacity-80 active:bg-opacity-100">
        <span class="m-auto text-5xl text-white">
          <ion-icon name="caret-back-sharp"></ion-icon>
        </span>
      </button>
      <div class="h-24 w-24 hover:w-[18rem] transition-all duration-1000 relative overflow-hidden">
        <div class="absolute h-24 w-max transition-all duration-700 flex max-w-full"
        :style="{left : paginationLeft + 'rem' }"
        >
          <button v-for="page in 100" :key="page" class="h-24 w-24 bg-cyan-800 rounded-sm hover:bg-opacity-80 active:bg-opacity-100 shrink-0 transition-all duration-300"
          @click="currentPage = page"
          :class="[ page === currentPage ? 'opacity-100' : 'opacity-50' ,''  ]"
          >
            <h6 class="m-auto text-4xl text-white">
              {{page}}
            </h6>
          </button>
        </div>
      </div>
      <button @click="currentPage++" class="h-24 w-24 bg-cyan-900 shadow-lg rounded-sm hover:bg-opacity-80 active:bg-opacity-100">
        <span class="m-auto text-5xl text-white">
          <ion-icon name="caret-forward-sharp"></ion-icon>
        </span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentPage : 1,
    };
  },
  methods: {},
  computed : {
    paginationLeft(){
      let left = 0;
      left = (this.currentPage - 1) *  -6;
      return `${left}`;
    }
  }
};
</script>

<style></style>
