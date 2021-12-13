<template>
  <section @click="isAppLoaded = true" class="h-screen bg-gradient-to-br  from-blue-200 to-blue-500 flex flex-col">

    <transition name="fade">
    <div v-if="isAppLoaded" class="neumorphic w-56 h-96 m-auto rounded-2xl bg-gray-200 text-gray-500 font-semibold py-4 px-4 overflow-hidden">
        
      <transition name="slide">
        <section v-if="!isAgreed">
          <img src="/3d-person.png" alt="Business Woman">
          <h1 class="text-xl text-blue-500">
            PRIVACY POLICY
          </h1>
          <h2 class="text-xs font-normal w-4/6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quo ipsum laborum at .
          </h2>

          <button @click="isAgreed = true" class="bg-blue-500 mt-5 text-xs py-3 px-10 uppercase font-bold text-white rounded-md hover:bg-blue-600 active:bg-blue-500 transition-all">
            Agree
          </button>

        </section>
        <section v-else>
          <h1 class="text-xs text-blue-600 text-center my-4">
            WEB COMPONENTS
          </h1>
          <div class=" my-6">
            <h1 class="text-2xl text-gray-700 font-black">
              Hello user,
            </h1>
            <p class="text-xs font-normal">Please hit the like button</p>
          </div>
          <div class="neumorphic-inset w-24 h-24 mx-auto my-8 rounded-3xl flex" :class="[isAgreed ? 'pop-animation' : '','']">
            <ion-icon class="text-7xl text-blue-500 m-auto" name="heart"></ion-icon>
          </div>
        </section>
      </transition>
    </div>
    </transition>

  </section>
</template>

<script>
export default {
  data(){
    return{
      isAppLoaded : true,
      isAgreed : false
    }
  }
}
</script>

<style>
  .neumorphic {
    box-shadow: 
      12px 12px 16px 0 rgba(255, 255, 255, 0.8) inset,
      -8px -8px 12px 0 rgba(94, 55, 55, 0.3) inset;
  }
  .neumorphic-inset {
    box-shadow: 
      8px 8px 12px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 8px 0 rgba(255, 255, 255, 0.3);
  } 
  
  .slide-leave-active, 
  .slide-enter-active {
    transition: 500ms all ease;
  }
  
  .slide-enter-to,
  .slide-leave-to  {
    opacity : 0;
  }

  .pop-animation{
    transition: 1000ms all ease;
    animation-name: pops;
    animation-delay: 500ms;
    animation-duration: 1000ms;
  }

  @keyframes pops {
    0% {
      opacity: 0;
    }
    70% {
      transform: scale(120%);
    }
    100% {
      opacity: 1;
      transform: scale(100%);
    }
  }

</style>