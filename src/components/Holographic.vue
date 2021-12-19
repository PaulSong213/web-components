<template>
  <section class="h-screen flex flex-col justify-center bg-rose-200 bg-gradient-to-br from-pink-200 via-violet-100 to-rose-300">

    <div class="w-full max-w-md h-60 bg-black mx-auto rounded-sm grid grid-cols-12 shadow-xl shadow-purple-400 overflow-hidden relative text-white pl-4">

      <div class="col-span-5 z-10 flex flex-col justify-between p-2 h-60">
        <h6 class="text-sm font-bold underline underline-offset-4 decoration-pink-400 decoration-4 ">Faster Internet</h6>

        <button class="border border-pink-500 py-2 px-4 text-xs w-max text-pink-100 font-medium tracking-widest  hover:bg-pink-400 hover:text-black transition-all active:bg-opacity-80 mb-3">
          View Plans
        </button>

      </div>

      <div class="col-span-7 bg-holographic z-10 flex h-60 justify-end bg-pink-300">

        <div class="text-black font-semibold relative pl-0.5 pr-1 filter mix-blend-hard-light border-l border-black border-opacity-50 overflow-hidden max-h-full">
          <marquee direction="up" class="font-bold tracking-widest text-xs whitespace-nowrap uppercase leading-none" style="writing-mode: vertical-rl;"> Redefined to be faster than ever.</marquee>
        </div>



      </div>

      <h1 class="absolute block top-14  left-5 text-8xl font-black filter mix-blend-normal text-transparent  z-20 stroke-2 tracking-widest " style="-webkit-text-stroke: 3px rgba(255,255,255,1);">
        PLDC
      </h1>

    </div>

  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-holographic {
  background: url('https://i.pinimg.com/originals/80/33/50/803350af1bcc9d19bd91d860f2a304e4.gif') no-repeat;
  background-size: cover;
}
</style>