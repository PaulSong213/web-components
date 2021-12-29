<template>
  <section class='flex flex-col h-screen justify-center bg-teal-300 bg-gradient-to-br from-teal-300 to-green-300'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-sky-50 h-72 shadow-xl  relative flex flex-col justify-around'>
      <h1 class="text-center text-sky-500 font-bold">Step-by-Step From Indicator</h1>
      <div  class="px-8 pb-8 h-1 flex items-center justify-center  mx-auto w-max transform scale-125">
        <div v-for="(step, index) in steps" :key="index"  class="flex items-center relative w-max ">
          <div :class="[(index + 1) > 1 ? barWidth : '','' ]" class="h-1">
              <transition name="slide-bar">
                <div v-if="(index) < currentStep && (index + 1) > 1" class="bg-sky-300 h-full" :class="barWidth"></div>
              </transition>
              <transition name="slide">
              <div v-if="(index + 1) !== 1 && (index + 1) > currentStep" class="bg-gray-200 h-full" :class="barWidth"></div>
              </transition>
          </div>
          <transition name="pop">
          <div class="border border-sky-500 h-6 w-6 rounded-full shadow flex items-center justify-center z-20 p-1 relative" :class="[ (index) + 1 <= currentStep ? 'bg-sky-400 text-white' : 'text-sky-500' , ]" >
              <ion-icon class="text-2xl" :name="step.icon"></ion-icon>
              <!--Text Indicator-->
                <transition name="banner-slide">
                    <div v-if="(index + 1) === currentStep" class="absolute top-8 left-1/2 -translate-x-1/2 w-24 text-center bg-white shadow-xl p-2">
                      <h3 class="text-xs text-sky-800">{{step.name}}</h3>
                    </div>
                </transition>
          </div>
          </transition>
        </div>
      </div>

      <div class="flex justify-around">

        <button @click="nextStep(false)" class="transition-all text-sky-500 underline underline-offset-2 text-xs font-semibold">Back</button>
 
        <button @click="nextStep()" class="bg-sky-600 shadow-sm hover:bg-opacity-80 active:bg-opacity-100 transition-all py-3 px-5 text-white rounded-md text-xs">Next</button>

      </div>

    </div>
  </section>
</template>


<script>
export default {
    name: "Progress",
    data() {
      return {
        steps : [
          {
            name : 'Personal Information',
            icon : 'person'
          },
          {
            name : 'Delivery Details',
            icon : 'navigate'
          },
          {
            name : 'Terms & Conditions',
            icon : 'Document'
          },
          {
            name : 'Mode of Payment',
            icon : 'Card'
          }
        ],
        currentStep : 1
      }
    },
    computed: {
      maxStep(){
        if(!this.steps)return 0;
        return this.steps.length;
      },
      barWidth(){
        if(this.maxStep >= 14)return 'w-' + 1;
        return 'w-'+ (14 - this.maxStep);
      }
    },
    methods : {
      nextStep(isNext = true){
        if(isNext && this.currentStep < (this.steps.length + 1))this.currentStep++;
        if(!isNext && this.currentStep > 1 )this.currentStep--;
      }
    }
}

</script>
<style scoped>
.slide-bar-enter-active,
.slide-bar-leave-active {
  transition: all 0.5s ease;
}

.slide-bar-enter-from,
.slide-bar-leave-to {
  opacity: 0;
  width: 0;
  margin-bottom: -0.25rem;
}

.pop-enter-active,
.pop-leave-active {
  transition: all 0.2s ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  width: 0;
}

.banner-slide-enter-active,
.banner-slide-leave-active {
  transition: all 0.4s ease;
}

.banner-slide-enter-from,
.banner-slide-leave-to {
  opacity: 0;
  height: 0;
  top: 0;
}
</style>
