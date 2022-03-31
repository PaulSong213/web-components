<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-sky-400 bg-gradient-to-br from-sky-400 to-green-400"
  >   
    <div class="p-4 mx-auto mb-5 text-xs rounded-md sm:scale-150 w-60 bg-sky-100">
      <p class="text-[6px] text-sky-800 font-bold"
        :class="[textPosition]"
      >
      Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for
      </p>
    </div>
    <div class="relative h-20 p-2 mx-auto bg-white rounded-lg sm:scale-150 w-60">
      <div class="grid w-full h-full grid-cols-3 gap-3">
        <button
          @click="selectedIndex = 0"
          class="relative w-full h-full transition-all duration-300 rounded-lg hover:bg-sky-100"
        >
          <div class="absolute w-1 h-12 -translate-y-1/2 bg-sky-200 left-2 top-1/2"></div>
          <div class="absolute w-8 h-2 -translate-y-1/2 bg-sky-200 left-3.5 top-1/2"></div>
        </button>
        <button
          @click="selectedIndex = 1"
          class="relative w-full h-full transition-all duration-300 rounded-lg hover:bg-sky-100"
        >
          <div class="absolute w-1 h-12 -translate-x-1/2 -translate-y-1/2 bg-sky-200 left-1/2 top-1/2"></div>
          <div class="absolute w-8 h-2 -translate-x-1/2 -translate-y-1/2 bg-sky-200 left-1/2 top-1/2"></div>
        </button>
        <button
          @click="selectedIndex = 2"
          class="relative w-full h-full transition-all duration-300 rounded-lg hover:bg-sky-100"
        >
          <div class="absolute w-1 h-12 -translate-y-1/2 bg-sky-200 right-2 top-1/2"></div>
          <div class="absolute w-8 h-2 -translate-y-1/2 bg-sky-200 right-3.5 top-1/2"></div>
        </button>
      </div>
      <div class="absolute top-0 w-1/3 h-full p-4 transition-all duration-1000"
        :class="[pointerLeftPosition]"
      >
        <div class="relative w-full h-full">
          <div class="absolute w-1 h-12 transition-all duration-1000 -translate-y-1/2 bg-emerald-700 top-1/2"
          :class="[horizontalPosition]"
          ></div>
          <div class="absolute w-8 h-2 -translate-y-1/2 bg-emerald-700 top-1/2"
          :class="[verticalPosition]"
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
      selectedIndex : 0
    };
  },
  methods: {},
  computed : {
    textPosition(){
      switch (this.selectedIndex) {
        case 0:
          return 'text-left';
          break;
        case 1:
          return 'text-center';
        case 2:
          return 'text-right';
        
        default:
          return 'text-left';
          break;
      }
    },
    verticalPosition(){
      switch (this.selectedIndex) {
        case 0:
          return 'left-1.5';
          break;
        case 1:
          return '-translate-x-1/2   left-1/2 ';
        case 2:
          return 'left-[90%] -translate-x-full';
        
        default:
          return 'left-1.5'
          break;
      }
    },
    horizontalPosition(){
      switch (this.selectedIndex) {
        case 0:
          return 'left-0';
          break;
        case 1:
          return '-translate-x-1/2   left-1/2 ';
        case 2:
          return 'left-full -translate-x-full';
        
        default:
          return 'left-0'
          break;
      }
    },
    pointerLeftPosition(){
      switch (this.selectedIndex) {
        case 0:
          return 'left-0'
          break;
        case 1:
          return 'left-1/2 -translate-x-1/2'
          break;
        case 2:
          return 'left-full -translate-x-full'
          break;
        default:
          return 'left-0'
          break;
      }
    }
  }
};
</script>

<style></style>
