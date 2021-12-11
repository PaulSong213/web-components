<template>
  <section class="h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 flex flex-col">

    <div class="m-auto  w-full max-w-sm">

      <div class="w-full bg-white rounded-t-2xl p-5 space-y-2 z-30 relative transition-all duration-500" :class="[inputsLength <= 0 ? 'rounded-b-2xl' : '','']">
        <transition name="fade">
          <div v-if="inputsLength > 0">
            <h5 class="text-3xl font-bold text-purple-600">Sign Up</h5>
            <h6 class="text-xs text-purple-500">By signing up you agree on our terms</h6>
          </div>
          <div v-else>
            <h5 class="text-3xl font-bold text-purple-600">Thank you for signing up!</h5>
          </div>
        </transition>
      </div>
      <section class=" h-12 relative z-10">
        <transition-group tag="div" name="slide-up" class="z-10">

        <div v-for="(input,index) in inputs" :key="index" class="w-full bg-purple-100  rounded-b-2xl  h-12 shadow-2xl border-b-2 border-purple-400 transform absolute grid grid-cols-12 overflow-hidden z-10" :class="['-bottom' + (index - (inputsLength - 1))]"  :style="{transform: 'scaleX('+(index - (inputsLength - 1) + 100)+'%)' }" >
          
          <div class="col-span-9 py-2 px-5 flex"> 
            <input class="w-full my-auto h-full ring-purple-500 outline-none border-b border-purple-500 bg-transparent text-sm placeholder-purple-500 text-purple-700 focus-border transition-all duration-300 px-1" :type="input.type" :placeholder="input.placeholder">
            <ion-icon class="text-purple-600 my-auto -ml-6 text-2xl" :name="input.icon"></ion-icon>
          </div>
          <div @click="inputs.splice(index, 1);" class="col-span-3 bg-purple-700 flex justify-center text-center cursor-pointer hover:bg-purple-800 transition-all active:bg-purple-700">
            <ion-icon class="text-4xl text-white my-auto" name="caret-up"></ion-icon>
          </div>

        </div>
        </transition-group>
      
      </section>

    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      pagePosition : 0,
      inputs : [
        {
          "type" : "password",
          "placeholder" : "Confirm your password",
          "icon" : "lock-open"
        },
        {
          "type" : "password",
          "placeholder" : "Enter your password",
          "icon" : "lock-closed"
        },
        {
          "type" : "email",
          "placeholder" : "Enter your email",
          "icon" : "mail"
        },
      ]
    }
  },
  methods:{
    getPagePos(){
      this.pagePosition++;
      let bottomPos = '-bottom-' + (this.pagePosition);
      if(this.pagePosition === 1)bottomPos = 'bottom-0';
      return bottomPos;
    }
  },
  computed : {
    inputsLength(){
      return this.inputs.length;
    }
  }
}
</script>

<style>

.focus-border:focus {
  border-bottom-width: 2px;
  border-color: blueviolet;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 1000ms ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  margin-top: -5rem;
}
</style>