<template>
  <section class='flex flex-col h-screen justify-center bg-teal-400 bg-gradient-to-br from-teal-400 via-green-400 to-blue-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-black  h-64 shadow-xl  relative  px-3'>
      <h1 class="text-white text-center mb-5 mt-6 tracking-widest text-sm font-sans">What's your personality?</h1>
      <div class="grid grid-cols-3 h-36 gap-3 w-full">
        <div class="bg-slate-300 h-full w-full rounded-sm bg-[url(https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60)] bg-cover bg-bottom cursor-pointer select-none active:scale-90 transition-all duration-500">
          <div class="flex flex-col justify-center bg-black h-full w-full bg-opacity-60 backdrop-blur-[2px] relative group hover:backdrop-blur-0">
            <h6 class="text-center text-white tracking-wider text-2xl uppercase font-bold">Introvert</h6>
            <div class="w-6 h-6 bg-rose-400 absolute top-2 left-5 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-2 h-2 bg-rose-500 absolute top-6 left-12 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-2 h-2 bg-rose-500 absolute bottom-6 left-12 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-2 h-2 bg-rose-500 absolute bottom-12 right-12 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-10 h-4 bg-fuchsia-600 absolute bottom-2 right-2 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-4 h-4 bg-fuchsia-600 absolute top-4 right-2 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-6 h-4 bg-pink-600 absolute bottom-2 left-2 group-hover:scale-50 transition-all duration-500"></div>
          </div>
        </div>
        <div class="bg-slate-300 h-full w-full rounded-sm bg-[url(https://images.unsplash.com/photo-1510252240410-0f5aae4c2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60)] bg-cover bg-bottom cursor-pointer select-none active:scale-90 transition-all duration-500">
          <div class="flex flex-col justify-center bg-black h-full w-full bg-opacity-60 backdrop-blur-[2px] relative group hover:backdrop-blur-0">
            <h6 class="text-center text-white tracking-wider text-2xl uppercase font-bold">Extrovert</h6>
            <div class="w-6 h-6 bg-amber-400 absolute top-2 left-5 group-hover:scale-50 transition-all duration-500 rounded-full"></div>
            <div class="w-2 h-2 bg-yellow-500 absolute top-6 left-12 group-hover:scale-50 transition-all duration-500 rounded-full"></div>
            <div class="w-2 h-2 bg-green-500 absolute bottom-6 left-12 group-hover:scale-50 transition-all duration-500 rounded-full"></div>
            <div class="w-2 h-2 bg-amber-500 absolute bottom-12 right-12 group-hover:scale-50 transition-all duration-500 rounded-full"></div>
            <div class="w-10 h-4 bg-yellow-500 absolute bottom-2 right-2 group-hover:scale-50 transition-all duration-500 rounded-full"></div>
            <div class="w-4 h-4 bg-green-600 absolute top-4 right-2 group-hover:scale-50 transition-all duration-500 rounded-full"></div>
            <div class="w-6 h-4 bg-yellow-600 absolute bottom-2 left-2 group-hover:scale-50 transition-all duration-500 rounded-full"></div>
          </div>
        </div>
        <div class="bg-slate-300 h-full w-full rounded-sm bg-[url(https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60)] bg-cover bg-top cursor-pointer select-none active:scale-90 transition-all duration-500">
          <div class="flex flex-col justify-center bg-black h-full w-full bg-opacity-60 backdrop-blur-[2px] relative group hover:backdrop-blur-0">
            <h6 class="text-center text-white tracking-wider text-2xl uppercase font-bold">Ambivert</h6>
            <div class="w-6 h-6 bg-teal-400 absolute top-2 left-5 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-2 h-2 bg-green-500 absolute top-6 left-12 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-2 h-2 bg-emerald-500 absolute bottom-6 left-12 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-2 h-2 bg-teal-500 absolute bottom-12 right-12 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-10 h-4 bg-green-600 absolute bottom-2 right-2 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-4 h-4 bg-teal-600 absolute top-4 right-2 group-hover:scale-50 transition-all duration-500"></div>
            <div class="w-6 h-4 bg-teal-600 absolute bottom-2 left-2 group-hover:scale-50 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {

    }
  },
  methods: {

  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
* {
  font-family: 'Anton', sans-serif;
}
</style>