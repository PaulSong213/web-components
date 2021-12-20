<template>
  <section class="bg-fuchsia-200 bg-gradient-to-br from-pink-200 via-fuchsia-200 to-amber-200 min-h-screen px-2 flex flex-col justify-center">

    <div class="w-full max-w-md mx-auto rounded-md overflow-hidden">
      <div v-for="(scheadule,index) in scheadules" :key="index" :class="['bg-'+scheadule.color+'-500']" >  
        <div @click="openedScheaduleIndex = index" class="px-4 flex justify-between h-16 text-2xl text-white font-medium  transition-all" :class="['bg-'+scheadule.color+'-500' , openedScheaduleIndex !== index ? 'cursor-pointer hover:bg-' +scheadule.color + '-600' : '','' ]">
          <div class="my-auto block">
            <ion-icon v-if="openedScheaduleIndex !== index"  :name="scheadule.icon"></ion-icon>
          </div>
          <h6 class="my-auto tracking-wider">{{scheadule.title}}</h6>
        </div>
        <transition name="shrink">
        <div v-if="openedScheaduleIndex === index" class=" flex justify-between px-4 pb-4 h-24 overflow-y-hidden">
          <div class="w-16 h-16 rounded-xl text-5xl flex text-white" :class="[`bg-${scheadule.color}-400`]" >
            <ion-icon class="m-auto block" :name="scheadule.icon"></ion-icon>
          </div>
          <div class="border-r-8 border-green-50 h-max pr-2 text-gray-50">
            <p class="text-right text-sm font-bold" v-for="(task,index) in scheadule.tasks" :key="index" >{{task}}</p>
          </div>
          
        </div>
        </transition>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      openedScheaduleIndex : 0,
      scheadules : [
        {
          title : "8AM-9AM",
          color : "blue",
          icon : "partly-sunny",
          tasks : [
            "Cook breakfast",
            "Walk the dog",
            "Exercise"
          ]
        },
        {
          title : "9AM-11AM",
          color : "green",
          icon : "partly-sunny",
          tasks : [
            "Walk the dog",
            "Exercise",
            "Exercise",
            "Basketball"
          ]
        },
        {
          title : "1PM-3PM",
          color : "rose",
          icon : "sunny",
          tasks : [
            "Walk the dog",
            "Exercise",
            "Exercise",
            "Basketball"
          ]
        },
        {
          title : "4PM-7PM",
          color : "indigo",
          icon : "cloudy-night",
          tasks : [
            "Walk the dog",
            "Exercise",
            "Exercise",
            "Basketball"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

.small-gradient-overlay {
  background-image: url('https://tailwindcss.com/_next/static/media/overlay.b15b0eab3a786894cd9764a58f0a1488.webp');
  background-size: 100%;
}

.shrink-enter-active,
.shrink-leave-active {
  transition: all 300ms linear;
  display: relative;
}

.shrink-enter-from,
.shrink-leave-to {
  opacity: 0.5;
  height: 0;
}

</style>