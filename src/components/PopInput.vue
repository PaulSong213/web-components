<template>
  <section class='flex flex-col h-screen justify-center bg-teal-400 bg-gradient-to-br from-teal-300 via-sky-300 to-green-300 px-2'>
    <div class='mx-auto w-full max-w-md rounded-2xl bg-emerald-100  h-64 shadow-xl justify-between relative shadow-emerald-300/50 flex flex-col overflow-hidden'>
      <transition name="fade">
      <div class="pt-12" v-if="isLoggingIn">
        <img class="h-32 m-auto animate-bounce" src="https://ouch-cdn2.icons8.com/3nw2VXnHIOXfRv37y35rNfm-TOf4eSuwU6sVrs7sPVs/rs:fit:256:321/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzkx/L2JmNWQxY2JlLTAw/OGMtNDMwMy1iYmY5/LTA3ZGExZTMxOTY2/Mi5wbmc.png" alt="">
      </div>
      <div v-else class="flex flex-col pt-10 space-y-0">
        <div v-for="(input,index) in inputs"  :key="index" class="flex flex-col mx-auto w-3/4 text-emerald-700  cursor-text transition-all duration-500 h-16 overflow-hidden " :class="[input.isOpened ? '' : 'space-y-1','' ]">
          <label  @click="inputs[index].isOpened = true" class=" cursor-text select-none transition-all duration-500 border-b-2   leading-5 mt-auto" :for="index" :class="[input.isOpened ? 'text-sm' : 'text-md border-emerald-500 h-6 ','' ]" >
          {{input.label}}
          </label>
          <div class="overflow-hidden transition-all duration-500 relative -mt-2" :class="[input.isOpened ? 'py-2 h-12' : 'h-0','' ]" >
            <div class="absolute text-white text-xl transition-all duration-500 overflow-hidden left-1 top-1.5" :class="[input.isOpened ? 'py-2 h-10' : 'h-0','' ]">
              <ion-icon :name="input.icon"></ion-icon>
            </div>
            <input :type="input.type" :id="index" autocomplete="off" class="bg-emerald-500 text-md pl-8 w-full text-white rounded-md outline-none h-full" :class="[input.isOpened ? 'py-2' : '','' ]">
          </div>
        </div>
      </div>
      </transition>
      <div @click="isLoggingIn = true" class=" text-center  py-2 font-bold text-white  transition-all select-none text-2xl duration-300" :class="[isLoggingIn ? 'bg-amber-600' : 'bg-emerald-500 cursor-pointer hover:bg-opacity-80 active:bg-opacity-100','' ]" >
        <span v-if="!isLoggingIn">Log in</span>
        <span v-else>Please wait...</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      isLoggingIn : false,
      inputs : [
        {
          label : "Email",
          type : "email",
          isOpened : false,
          icon : "mail"
        },
        {
          label : "Password",
          type : "password",
          isOpened : false,
          icon : "lock-closed"
        },
      ]
    }
  },
  methods: {

  },
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 500ms linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

</style>