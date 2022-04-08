<template>
  <section class="flex flex-col justify-center h-screen px-2 bg-gray-300">
    <div class="relative w-48 h-12 p-2 mx-auto scale-150 bg-white rounded-md shadow-lg">
      <div class="z-10 grid w-full h-full grid-cols-3 gap-2">
        <button
          @click="selectedIndex = 0"
          class="flex flex-col justify-center h-full gap-1 px-3"
        >
          <div class="w-full h-1 rounded-full bg-slate-400"></div>
          <div class="w-3/4 h-1 rounded-full bg-slate-400"></div>
          <div class="w-1/2 h-1 rounded-full bg-slate-400"></div>
        </button>
        <button
          @click="selectedIndex = 1"
          class="flex flex-col justify-center h-full gap-1 px-3"
        >
          <div class="w-full h-1 mx-auto rounded-full bg-slate-400"></div>
          <div class="w-3/4 h-1 mx-auto rounded-full bg-slate-400"></div>
          <div class="w-1/2 h-1 mx-auto rounded-full bg-slate-400"></div>
        </button>
        <button
          @click="selectedIndex = 2"
          class="flex flex-col justify-center h-full gap-1 px-3"
        >
          <div class="w-full h-1 ml-auto rounded-full bg-slate-400"></div>
          <div class="w-3/4 h-1 ml-auto rounded-full bg-slate-400"></div>
          <div class="w-1/2 h-1 ml-auto rounded-full bg-slate-400"></div>
        </button>
      </div>
      <div
        class="absolute top-0 flex flex-col justify-center w-1/3 h-full gap-1 pr-[1.2rem] pl-3.5 py-3.5 transition-all duration-1000"
        :class="[leftPosition]"
      >
        <div class="relative w-full h-full">
          <div
            class="absolute top-0 w-full h-1 transition-all duration-300 rounded-full bg-slate-800"
            :class="[indicatorMargin]"
          ></div>
          <div
            class="absolute w-3/4 h-1 transition-all duration-500 -translate-y-1/2 rounded-full top-1/2 bg-slate-800"
            :class="[indicatorMargin]"
          ></div>
          <div
            class="absolute bottom-0 w-1/2 h-1 transition-all duration-700 delay-100 rounded-full bg-slate-800"
            :class="[indicatorMargin]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 1,
    };
  },
  computed: {
    leftPosition() {
      switch (this.selectedIndex) {
        case 0:
          return "left-1.5";
          break;
        case 1:
          return "left-[51.5%] -translate-x-1/2";
          break;
        case 2:
          return "left-full -translate-x-full";
          break;

        default:
          return "left-0";
          break;
      }
    },
    indicatorMargin() {
      switch (this.selectedIndex) {
        case 0:
          return "left-0";
          break;
        case 1:
          return "left-1/2 -translate-x-1/2";
          break;
        case 2:
          return "left-full -translate-x-full";
          break;

        default:
          return "left-0";
          break;
      }
    },
  },
  methods: {},
};
</script>

<style></style>
