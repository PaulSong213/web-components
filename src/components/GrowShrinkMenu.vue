<template>
  <section class="h-screen flex flex-col justify-center " :style="{backgroundColor : icons[activeIconIndex].backdropColor}">

    <div class="mx-auto flex space-x-1">
      <div v-for="(icon,index) in icons" :key="index">
        <div @click="activeIconIndex = index"  class="rounded-full  h-12 flex text-2xl  transition-all ease-in-out duration-300" :style="{backgroundColor : isActiveColor(index,icon.color)}"  :class="[activeIconIndex === index ? `w-24 text-3xl text-gray-100` : 'text-zinc-500 hover:text-zinc-700 cursor-pointer hover:shadow-sm active:scale-90 transform w-12 bg-white ','' ]" >
          <ion-icon class="m-auto" :name="icon.name"></ion-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      activeIconIndex : 0,
      icons : [
        {
          name : "walk",
          color : "rgb(16 185 129)",
          backdropColor : "rgb(5 150 105)"
        },
        {
          name : "bicycle",
          color : "rgb(14 165 233)",
          backdropColor : "rgb(2 132 199)"
        },
        {
          name : "car-sport",
          color : "rgb(6 182 212)",
          backdropColor : "rgb(8 145 178)"
        },
        {
          name : "bus",
          color : "rgb(14 165 233)",
          backdropColor : "rgb(2 132 199)"
        },
        {
          name : "subway",
          color : "rgb(59 130 246)",
          backdropColor : "rgb(37 99 235)"
        },
        {
          name : "airplane",
          color : "rgb(99 102 241)",
          backdropColor : "rgb(79 70 229)"
        },
        {
          name : "rocket",
          color : "rgb(217 70 239)",
          backdropColor : "rgb(192 38 211)"
        },
        
      ]
    }
  },
  computed : {
    activeColor(){
      const color = this.icons[this.activeIconIndex].color;
      return 'bg-' + color + '-600';
    }
  },
  methods : {
    isActiveColor(index,color){
      if(index === this.activeIconIndex)return color;
      return 'rgb(255,255,255)'
    }
  }
}
</script>

<style>

</style>