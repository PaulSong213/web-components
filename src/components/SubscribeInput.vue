<template>
  <section class='flex flex-col h-screen justify-center bg-fuchsia-700 px-2'>
    <div class="w-56 h-12 border border-white rounded-lg mx-auto transform scale-150 text-white uppercase overflow-hidden shadow-xl shadow-purple-800/10 flex relative" :class="[currentStep === 1 ? '' : 'bg-white','' ]" >
      <transition name="fade">
      <input v-if="currentStep === 2" ref="email"  v-model="email" type="email" class="pl-2 h-full w-44 outline-none text-purple-700 absolute z-10 placeholder-slate-500 animate-shake" :class="[errorClass]" placeholder="Email" />
      </transition>
      <button v-if="currentStep <= 2" class="uppercase font-semibold flex transition-all z-20 duration-500" :class="[currentStep === 1 ? 'w-full hover:bg-purple-600  active:bg-purple-700  h-full ':'w-12 bg-purple-700 hover:bg-purple-800 active:bg-purple-700 h-full my-auto rounded-lg ml-auto','']" @click="nextStep" >
        <span v-if="currentStep === 1" class="m-auto tracking-widest">
          Get notified
        </span>
        <span v-if="currentStep === 2" class="text-2xl flex flex-col justify-center m-auto">
          <ion-icon name="arrow-forward"></ion-icon>
        </span>
      </button>
      <transition name="fade">
      <div class="h-full w-full bg-fuchsia-700 m-auto text-center flex absolute" v-if="currentStep === 3">
        <h6  class="m-auto tracking-widest">Thank you!</h6>
      </div>
      </transition>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      currentStep : 1,
      email : "",
      errorClass : "animation-pause"
    }
  },
  methods: {
    nextStep(){
      if(this.currentStep === 2){
        this.$refs.email.focus();
        if(!this.email){
          this.errorClass = "";
          setTimeout(()=>{
            this.errorClass = "animation-pause";
          }, 500);
          return;
        }
      }
      this.currentStep++;
    }
  },
}
</script>
<style scoped>
.fade-enter-active{
  transition: all 500ms ease;
}
.fade-enter-from {
  opacity: 0.5;
  transform: scale(0.1);
}

.animate-shake {
  animation-name: shake;
  animation-iteration-count: infinite;
  animation-duration: 300ms;
}

.animation-pause{
  animation-play-state: paused;
}

@keyframes shake {
  from {
    transform: scale(90%);
  }
  to {
    transform: scale(100%);
  }
}
</style>