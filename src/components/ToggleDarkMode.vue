<template>
  <section class="h-screen flex transition-all duration-200" :class="[!isDarkMode ? 'bg-blue-300' : 'bg-blue-900' , '']">
    
    <div class="w-max table m-auto" style="transform : scale(200%)">

      <section class="flex space-x-2">

        <h6 @click="toggleDarkMode(true)" class="font-medium my-auto leading-3 text-base select-none" :class="[isDarkMode ? activeText : inacativeText, '']">
          Dark
        </h6>

        <div @click="toggleDarkMode(!isDarkMode)" class="rounded-full p-0.5 h-max text-gray-200 cursor-pointer transition-all flex ease-in-out duration-500 overflow-hidden relative bg-red-300 w-12" :class="modeColor">

          <transition name="fade-left">
            <ion-icon v-if="isDarkMode" class="leading-3 table my-auto absolute transform" name="moon"></ion-icon>
          </transition>

          <div class="w-12 h-4" :class="[isDarkMode ? 'pl-5' : 'pr-5', '']">

            <transition name="fade-away">
              <div v-if="isDarkMode" class="relative w-full opacity-50">
                <ion-icon name="star" class="text-stlar-sm text-white absolute top-0 left-3"></ion-icon>
                <ion-icon name="star" class="text-star-sm text-white absolute top-3 left-2"></ion-icon>
                <ion-icon name="star" class="text-star-lg text-white absolute top-1 left-2"></ion-icon>
                <ion-icon name="star" class="text-star-sm text-white absolute top-2 left-4"></ion-icon>
              </div>

              <div v-else class="relative w-full opacity-50">
                <ion-icon name="cloudy" class="absolute top-1/2 left-2 text-sm"></ion-icon>
              </div>
              
            </transition>

            <transition name="fade-right">
              <ion-icon v-if="!isDarkMode" class="leading-3 table my-auto transform absolute right-0" name="ellipse">
              </ion-icon>
            </transition>

          </div>
          
        </div>

        <h6 @click="toggleDarkMode(false)" class="font-medium my-auto leading-3 text-base select-none" :class="[!isDarkMode ? activeText : inacativeText, '']">
          Light
        </h6>



      </section>

    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      isDarkMode : true,
      activeText : 'text-gray-50 ',
      inacativeText : 'text-gray-400 cursor-pointer hover:text-gray-100',
    }
  },
  methods : {
    toggleDarkMode(isDarkMode = true){

      this.isDarkMode = isDarkMode;
    }
  },
  computed : {
    modeColor(){
      if(!this.isDarkMode)return 'bg-blue-400';
      return 'bg-blue-700';
    }
  }
}
</script>

<style>
.text-star-sm {
  font-size: 2px;
}

.text-star-lg {
  font-size: 2px;
}

.fade-left-enter-active,
.fade-left-leave-active {
  transition: all 350ms linear;
}

.fade-left-enter-from,
.fade-left-leave-to {
    opacity: 0;
    margin-left: 30px;   
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 350ms linear;
}

.fade-right-enter-from,
.fade-right-leave-to {
    opacity: 0;
    margin-left: -30px;   
}

.fade-away-enter-active,
.fade-away-leave-active {
  transition: all 150ms ease-in-out;
}

.fade-away-enter-from,
.fade-away-leave-to {
    opacity: 0;
    transform: scale(0);
}

</style>