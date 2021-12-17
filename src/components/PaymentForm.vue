<template>
  <section  class="h-screen bg-pink-300 bg-gradient-to-br from-fuchsia-300 via-pink-200 to-cyan-300 relative flex flex-col justify-center">

    <div class="z-10">
      <div class="w-24 h-24 bg-pink-400 rounded-full bg-gradient-to-tl from-inherit to-fuchsia-300  top-1/2 left-1/2 transform -translate-x-1/2 absolute scale-150"></div>
      <div class="w-24 h-24 bg-pink-400 rounded-full bg-gradient-to-tl from-inherit to-fuchsia-300 top-20 left-10 absolute"></div>
      <div class="w-24 h-24 bg-pink-400 rounded-full bg-gradient-to-br from-inherit to-pink-200  top-10 right-10 absolute"></div>
      <div class="w-24 h-24 bg-cyan-400 rounded-xl bg-gradient-to-tr from-teal-200 to-cyan-300 bottom-32 right-10 absolute transform scale-75 rotate-45"></div>
      <div class="w-24 h-24 bg-pink-400 rounded-xl bg-gradient-to-bl from-pink-200 to-rose-300 bottom-32 left-10 absolute transform scale-75 rotate-45"></div>
    </div>

    <div @click="startApp()" class="z-20 w-96 mx-auto">
      <div class="rounded-xl select-none  overflow-hidden  " :class="[currentInputIndex < 0 ? 'cursor-pointer transform active:opacity-70' :'','' ]" >
        <div class="h-36 w-full bg-zinc-100 bg-opacity-80 flex justify-between p-4">

          <div class=" flex justify-between flex-col">
            
            <div class="text-2xl text-fuchsia-300 h-7 w-7 rounded-full flex">
              <ion-icon class="m-auto" name="caret-up"></ion-icon>
            </div>

            <div class="text-fuchsia-400 text-xs font-black tracking-widest">
              <h6 class="font-sans">VISA</h6>
            </div>

          </div>

          <div class=" flex justify-between flex-col ">
            
            <div class="text-fuchsia-500 text-sm font-black tracking-widest">
              <h6 class="font-serif text-right">{{card.number}}</h6>
              <h6 class="font-serif text-xs text-right text-fuchsia-400 ">{{card.expiration}}</h6>
            </div>

            <div class="text-fuchsia-400 text-xs font-black tracking-widest">
              <img class="w-12 ml-auto filter saturate-200 hue-rotate-180 opacity-50" src="https://icons-for-free.com/iconfiles/png/512/card+chip-131964753269625760.png" alt="">
            </div>

          </div>

        </div>
        <div class="h-16 w-full bg-zinc-100 bg-opacity-50 backdrop-blur-sm flex justify-between px-4 text-fuchsia-500 text-lg font-semibold">
          <h6 class="my-auto font-mono">{{card.name}}</h6>
          <ion-icon class="my-auto text-2xl transform rotate-90 opacity-70" name="wifi-outline"></ion-icon>
        </div>
      </div>

      <transition name="fade-shrink">
      <div v-if="currentInputIndex < inputs.length && currentInputIndex >=0 " class="my-5 p-5 rounded-xl flex flex-col space-x-px justify-center bg-white bg-opacity-40 filter backdrop-blur-md">
        <div v-for="(input,index) in inputs" :key="index">
          <transition name="fade">
            <div v-if="index === currentInputIndex">
              <label class="text-xs font-bold text-fuchsia-500">{{input.label}}</label>
              <input @keydown.enter="currentInputIndex++" v-model="card[input.model]" :type="input.type" class="w-full text-fuchsia-600 text-sm font-normal mt-3 bg-transparent border-b-2 border-fuchsia-400 ring-none outline-none ">
            </div>
          </transition>
        </div>
      </div>
      </transition>

    </div>
  

  </section>
</template>

<script>
export default {
  data(){
    return {
      currentInputIndex : -1,
      inputs : [
        {
          label : "Account name",
          type : "text",
          model : "name"
        },
        {
          label : "Account number",
          type : "number",
          model : "number"
        },
        {
          label : "Expiration date",
          type : "date",
          model : "expiration"
        }
      ],
      card : {
        name : "",
        number : "",
        expiration : ""
      }
    }
  },
  methods : {
    startApp(){
      if(this.currentInputIndex >= 0)return;
      this.currentInputIndex = 0;
    }
  }
}
</script>

<style scoped>
  .fade-shrink-enter-active,
  .fade-shrink-leave-active {
    transition: all 500ms linear;
  }

  .fade-shrink-enter-from,
  .fade-shrink-leave-to {
      opacity: 0;
      margin-bottom: -50px;
  }

</style>