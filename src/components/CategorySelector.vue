<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-slate-900 bg-gradient-to-br from-slate-800 to-slate-900"
  >
    <div
      class="relative flex justify-between w-full max-w-xs mx-auto overflow-hidden rounded-md shadow-sm bg-gray-50 h-96"
    >
      <nav
        class="absolute top-0 left-0 z-20 w-full overflow-hidden transition-all duration-1000"
        :class="[!isSelecting ? 'h-12' : 'h-full', '']"
      >
        <div class="relative w-full h-full">
          <button
            v-for="(category, index) in categories"
            :key="index"
            @click="selectCategory(index)"
            class="flex flex-col justify-center w-full gap-1 text-white transition-all shadow-xl h-1/4 hover:bg-opacity-90 active:bg-opacity-100"
            :class="[category.colorClass]"
          >
            <h6 class="mx-auto text-lg font-bold tracking-wider uppercase">
              {{ category.title }}
            </h6>
            <span class="mx-auto text-3xl"
              ><ion-icon :name="category.icon"></ion-icon
            ></span>
          </button>
        </div>
        <button
          @click="isSelecting = true"
          class="absolute flex w-full h-12 mt-auto overflow-hidden transition-all"
          :class="[
            isSelecting ? 'top-full duration-700' : 'top-0 delay-200 duration-[1300ms]',
            '',
            categories[selectedCategoryIndex].colorClass,
          ]"
        >
          <h6
            class="m-auto mx-auto text-lg font-bold tracking-wider text-white uppercase"
          >
            {{ categories[selectedCategoryIndex].title }}
          </h6>
        </button>
      </nav>
      <div class="z-10 grid w-full grid-cols-2 gap-3 p-5 mt-12">
        <div v-for="item in 4" class="space-y-2">
          <div class="h-24 mx-auto rounded-md w-28 bg-opacity-80 animate-pulse"
          :class="[selectedCategoryColor]"
          ></div>
          <div class="mx-auto space-y-1 w-28 ">
            <div class="w-3/4 h-2 rounded-full bg-opacity-80 animate-pulse"
            :class="[selectedCategoryColor]"
            ></div>
            <div class="w-full h-2 rounded-full bg-opacity-80 animate-pulse"
            :class="[selectedCategoryColor]"
            ></div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isSelecting: true,
      selectedCategoryIndex: 0,
      categories: [
        {
          colorClass: "bg-green-500",
          icon: "color-filter",
          title: "filters",
        },
        {
          colorClass: "bg-emerald-500",
          icon: "disc",
          title: "Disc",
        },
        {
          colorClass: "bg-cyan-500",
          icon: "easel",
          title: "Easel",
        },
        {
          colorClass: "bg-sky-500",
          icon: "diamond",
          title: "Diamond",
        },
      ],
    };
  },
  methods : {
    selectCategory(index){
      this.selectedCategoryIndex = index;
      this.isSelecting = false;
    }
  },
  computed : {
    selectedCategoryColor(){
      return this.categories[this.selectedCategoryIndex].colorClass;
    }
  },
  watch: {
    selectedCategoryIndex() {
      this.isSelecting = false;
    },
  },
};
</script>

<style></style>
