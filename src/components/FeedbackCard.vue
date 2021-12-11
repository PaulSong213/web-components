<template>
  <section class="h-screen bg-white overflow-hidden">

    <div class="flex w-full space-x-4 my-auto h-full px-4" id="slider">

      <div v-for="(feedback, index) in feedbacks" :key="index" class="bg-white border border-gray-200 shadow-lg rounded-md my-auto h-max slider-card overflow-hidden">

        <div class="p-4">
          <span class="block text-8xl -mb-12" :class="feedback.qouteColor">“</span>
          <p class="text-gray-800 font-medium">{{feedback.message}}</p>
        </div>

        <div class="flex justify-between p-4 bg-gradient-to-l" :class="feedback.backgoundClass">
          <div class="flex space-x-4">
            <div class="w-12 h-12 overflow-hidden rounded-full relative border-2 border-white">
              <img class="transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-full min-w-full" :src="feedback.image">
            </div>
            <div class="text-gray-200 text-sm font-medium">
              <h6>
                {{feedback.senderName}}
              </h6>
              <h6>
                {{feedback.senderTitle}}
              </h6>
            </div>
          </div>
          <div class="table my-auto">
            <ion-icon class="text-gray-200 text-4xl table my-auto cursor-pointer" name="logo-twitter"></ion-icon>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
import Feedbacks from '/src/assets/Feedbacks.json';
export default {
  
  data (){
    return {
      feedbacks : {}
    }
  },
  mounted(){
    this.feedbacks = Feedbacks;
  }
}
</script>

<style>

#slider {
  animation: slide 20s linear;
}

.slider-card:nth-child(odd) {
  transform: rotate(1deg);
}
.slider-card:nth-child(even) {
  transform: rotate(-1deg);
}

@keyframes slide {
  from {margin-left: 0%;}
  to {margin-left: -200%;}
}
.slider-card {
  min-width: 30rem;
  max-width: 30rem;
}

.h-max{
 height:max-content;
}

</style>