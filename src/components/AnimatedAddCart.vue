<template>
  <section class='flex flex-col justify-center h-screen px-2 bg-emerald-400 bg-gradient-to-br from-emerald-400 to-sky-400'>
    <div class='relative flex justify-between w-full h-64 max-w-md mx-auto rounded-sm shadow-xl bg-slate-200'>
      <div class="w-1/2 h-[90%] border-r-8 border-b-8 rounded-br-[2rem] ronded-2xl border-black flex flex-col overflow-hidden bg-white shadow-lg">
        <div class="w-full py-2 mt-auto border-t-2 border-slate-400">
          <div class="relative h-10 ml-auto mr-4 overflow-hidden w-28">
            <button @click="isAdded = true" class="flex w-20 h-7 absolute top-1/2 -translate-y-1/2  text-[9px] font-bold border-2 rounded-full border-slate-900 hover:bg-slate-900 text-slate-800 hover:text-white active:bg-opacity-80 transition-all "
            :class="[!isAdded ? 'left-1/2 -translate-x-1/2' : 'left-[200%] -rotate-45 duration-[3000ms] delay-[650ms]','' ]"
            >
              <span class="m-auto">ADD TO CART</span>
            </button>
            <div class="absolute flex h-full transition-all duration-[3000ms]"
            :class="[isAdded?  'left-full -translate-x-full rotate-6' : '-left-[150%]' , '' ]"
            >
              <h6 class="mt-3 text-green-600 transition-all duration-1000 -rotate-6"
              :class="[isAdded?  'mr-2' : 'mr-10' , '' ]"
              >
              Added!
              </h6>
              <span class="m-auto text-3xl text-green-700">
              <ion-icon name="cart-outline"></ion-icon>
              </span>
            </div>

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
      isAdded : false
    }
  },
  watch: {
    isAdded(isAdded){
      if(isAdded){
        setTimeout(() => {
          this.isAdded = false;
        }, 4000);
      }
    }
  },
}

</script>

<style>

</style>