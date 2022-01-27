<template>
  <section class='flex flex-col h-screen justify-center bg-purple-400 bg-gradient-to-tr from-blue-500 to-purple-400 px-2'>
    <div class="bg-black rounded-xl mx-auto flex space-x-8 text-5xl w-max pt-4 pb-2 px-8 relative">
      <div v-for="(icon,index) in icons " :key="index" @click="selectedIndex = index" class="cursor-pointer z-10 transition-all duration-1000" :class="selectedIndex === index ? 'text-white' : 'text-gray-500' "  >
        <ion-icon :name="icon"></ion-icon>
      </div>
      <div class="absolute h-2 w-12 bg-white rounded-full -top-1 transition-all duration-1000 transform -translate-x-1/2" :style="{left : lightPosition}" >
        <div class="trapezoid"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      selectedIndex : 0,
      icons : [
        'bus-outline',
        'boat-outline',
        'car-sport-outline',
        'rocket-outline',
        'train-outline',

      ]
    }
  },
  methods: {

  },
  computed : {
    lightPosition(){
      let position = 5.5;
      switch (this.selectedIndex) {
        case 0:
          position = 5.5;
          break;
        case 1:
          position = 23.5;
          break;
        case 2:
          position = 42.5;
          break;
        case 3:
          position = 61.5;
          break;
        case 4:
          position = 79.5;
          break;
      
        default:
          break;
      }
      return position + '%';
    }
  }
}

</script>

<style>
.trapezoid {
	border-bottom: 65px solid rgba(255,255,255,0.2);
  
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	height: 0;
	width: 6rem;
  margin-left: -1.5rem;
  margin-top: 0.5rem;
}
</style>