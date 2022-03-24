<template>
  <section
    class="flex flex-col justify-center h-screen px-2 transition-all duration-500"
    :class="[bgClass]"
  >
    <div class="flex gap-5 mx-auto h-[10.5rem] w-max">
      <button
        @click="isDropdownOpen = !isDropdownOpen"
        class="flex items-center w-12 h-12 my-auto text-3xl text-white transition-all duration-300 rounded-md bg-slate-900/30"
        :class="[rotateClass]"
      >
        <span v-if="!isDropdownOpen" class="m-auto mt-2 w-max h-max">
          <ion-icon class="m-auto" ion-icon name="caret-up-outline"></ion-icon>
        </span>
        <span v-else class="m-auto -mb-px w-max h-max">
          <ion-icon class="m-auto" ion-icon name="close-outline"></ion-icon>
        </span>
      </button>
      <div
        class="relative transition-all duration-300 h-44"
        :class="[isDropdownOpen ? 'w-48' : 'w-0', '']"
      >
        <div
          class="absolute flex flex-col w-full gap-2 transition-all duration-700 h-max"
          :class="[selectionTopLocation]"
        >
          <button
            v-for="(item, index) in 3"
            class="w-full h-12 transition-all duration-500 bg-white rounded-md active:scale-75"
            @click="dropdownSelectedIndex = index"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isDropdownOpen: true,
      dropdownSelectedIndex: 0,
    }
  },
  methods: {

  },
  computed: {
    selectionTopLocation() {
      switch (this.dropdownSelectedIndex) {
        case 0:
          return 'top-[33%]';
          break;
        case 1:
          return 'top-[3%]';
          break;
        case 2:
          return 'top-[-30%]';
          break;
        default:
          return 'top-[33%]';
          break;
      }
    },
    rotateClass() {
      if (!this.isDropdownOpen) return 'rotate-180';
      switch (this.dropdownSelectedIndex) {
        case 1:
          return 'rotate-0';
          break;
        case 2:
          return '-rotate-180';
          break;
        default:
          return 'rotate-180';
          break;
      }
    },
    bgClass() {
      switch (this.dropdownSelectedIndex) {
        case 1:
          return 'bg-emerald-400';
          break;
        case 2:
          return 'bg-green-400';
          break;
        default:
          return 'bg-sky-400';
          break;
      }
    }
  },
  watch: {
    isDropdownOpen(isDropdownOpen) {
      if (!isDropdownOpen) this.dropdownSelectedIndex = 0;
    }
  }
}

</script>

<style>
</style>