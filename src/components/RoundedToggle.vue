<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-purple-400 bg-gradient-to-br from-purple-400 to-orange-300"
  >
    <button
      @click="isToggled = !isToggled"
      class="h-32 w-72 rounded-full bg-white hover:scale-105 transition-all shadow-md mx-auto p-4 flex justify-between relative overflow-hidden"
    >
      <div
        class="bg-black w-24 rounded-full z-10 absolute top-1/2 -translate-y-1/2 left-4 h-24"
      ></div>
      <div
        class="bg-white w-24 rounded-full z-30 absolute top-1/2 -translate-y-1/2 right-4 h-24"
      ></div>
      <div
        class="h-36 bg-black absolute -left-3 rounded-full z-20 ease-in-out -top-3 transition-all duration-1000"
        :class="[isToggled ? 'w-96' : 'w-0', '']"
      ></div>
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isToggled: true,
    };
  },
  methods: {},
};
</script>

<style></style>
