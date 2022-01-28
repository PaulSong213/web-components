<template>
  <section class='flex flex-col h-screen justify-center bg-rose-400 bg-gradient-to-br from-amber-300 via-amber-200 to-amber-300 px-2'>
    <div class='mx-auto w-full max-w-md rounded-md bg-black  h-64 shadow-xl flex flex-col  relative'>
      <div class="mt-14">
        <h6 class="text-rose-300 font-semibold text-3xl text-center w-full flash">Page {{selectedPage}}</h6>
      </div>
      <div class="flex justify-center my-8 relative w-max mx-auto">
        <div v-for="choice in 10" :key="choice" @click="selectPage(choice)" class="h-10  rounded-full z-20" :class="[choice % 2 != 0 ? 'border-4 border-amber-200 cursor-pointer w-10 ' : 'bg-black w-4' , ''] " >
        </div>
        <div class="absolute h-8 top-1/2 rounded-full overflow-hidden -translate-y-1/2 transform -translate-x-1/2 transition-all duration-500 ease z-10 " :class="[animationPlayState]" :style="{left: leftSelectedPosition}" >
          <img class="h-full" src="https://cdn.iconscout.com/icon/free/png-256/flash-dc-superhero-fastest-man-hero-justice-league-earth-saver-28697.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      selectedPage : 1,
      animationPlayState : ''
    }
  },
  methods: {
    selectPage(index){
      switch (index) {
        case 1:
          this.selectedPage = 1;
          break;
        case 3:
          this.selectedPage = 2;
          break;
        case 5:
          this.selectedPage = 3;
          
          break;
        case 7:
          this.selectedPage = 4;
          
          break;
        case 9:
          this.selectedPage = 5;
          
          break;
        
      }
    }
  },
  computed : {
    leftSelectedPosition(){
      let position = '7%';
      switch (this.selectedPage) {
        case 1:
          position = '7%';
          break;
        case 2:
          position = '27%';
          break;
        case 3:
          position = '47.3%';
          break;
        case 4:
          position = '67.5%';
          break;
        case 5:
          position = '87%';
          break;
      }
      return position;
    }
  },
  watch : {
    selectedPage(){
      this.animationPlayState = 'animate-shrink';
      setTimeout(()=>{
        this.animationPlayState = '';
      }, 500);
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
.flash {
  font-family: 'Rock Salt', cursive;
}

.animate-shrink {
  animation: shrink 500ms infinite;
}

@keyframes shrink {
  0% {
    height: 2rem;
  }
  50%{
    height: 10px;
  }

  100% {
    height: 2rem;
  }
}
</style>