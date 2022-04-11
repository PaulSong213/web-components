<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-sky-400 bg-gradient-to-br from-sky-400 to-purple-400"
  >
    <div
      class="relative justify-between w-full max-w-md p-3 mx-auto rounded-sm shadow-xl h-80 bg-gray-50"
    >
      <section class="flex flex-col">
        <div>
          <div class="flex gap-2 justify-center text-xs text-gray-600">
            <h6 class="my-auto text-sm font-bold text-center text-sky-500">
              Tailwindcss
            </h6>
            <span class="my-auto">with</span>
            <h6 class="my-auto text-sm font-bold text-center text-purple-500">
              Bootstrap
            </h6>
          </div>
          <div class="flex justify-center gap-16">
            <img
              class="w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              alt="Taiwindcss"
            />
            <img
              class="w-6"
              src="https://miro.medium.com/max/320/0*_rAD9NgK7l6KSlNc.png"
              alt="Bootstrap"
            />
          </div>
        </div>
        <div class="flex h-32">
          <div class="m-auto" v-html="htmlText"></div>
        </div>
        <div class="text-xs flex-grow font-mono w-full h-28">
          <textarea
            class="h-full w-full p-1 overflow-hidden border rounded-md border-sky-300 outline-sky-400"
            type="text"
            v-model="htmlText"
          ></textarea>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      htmlText: `<div  
  class="bg-amber-300 p-8"
>
  <h6 class="bg-yellow-900 text-white">Content</h6>
</div>`,
    };
  },
  methods: {},
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>
