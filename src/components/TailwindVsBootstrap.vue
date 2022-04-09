<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-sky-400 bg-gradient-to-br from-sky-400 to-purple-400"
  >
    <div
      class="relative grid justify-between w-full max-w-md grid-cols-2 gap-2 p-3 mx-auto rounded-sm shadow-xl h-80 bg-gray-50"
    >
      <section class="flex flex-col">
        <div>
          <h6 class="text-sm font-bold text-center text-sky-500">Tailwindcss</h6>
          <img
            class="w-6 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
            alt="Taiwindcss"
          />
        </div>
        <div class="flex h-24">
          <div class="m-auto scale-75" v-html="tailwind"></div>
        </div>
        <div class="text-[10px] flex-grow font-mono">
          <textarea
            class="h-full p-1 overflow-hidden border rounded-md border-sky-300 outline-sky-400"
            type="text"
            v-model="tailwind"
          ></textarea>
        </div>
      </section>
      <section class="flex flex-col">
        <div>
          <h6 class="text-sm font-bold text-center text-purple-500">Tailwindcss</h6>
          <img
            class="w-6 mx-auto"
            src="https://miro.medium.com/max/320/0*_rAD9NgK7l6KSlNc.png"
            alt="Bootstrap"
          />
        </div>
        <div class="flex h-24">
          <div class="m-auto scale-75" v-html="bootstrap"></div>
        </div>
        <div class="text-[10px] flex-grow font-mono">
          <textarea
            class="h-full p-1 overflow-hidden border border-purple-300 rounded-md outline-purple-400" 
            type="text"
            v-model="bootstrap"
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
      tailwind: `<button  
  class="px-4 py-2 text-gray-100 rounded-md bg-emerald-600"
>
  Tailwind
</button>`,
      bootstrap: `<button  
  class="btn btn-success"
>
  Bootstrap
</button>`,
    };
  },
  methods: {},
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"; 
</style>
