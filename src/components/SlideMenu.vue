<template>
  <section class='flex flex-col h-screen justify-center bg-green-400 bg-gradient-to-br from-green-400 to-teal-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-slate-700  h-64 shadow-xl flex justify-center flex-col relative space-y-1'>
      <div v-for="(menu,index) in menus" :key="index"  @mouseenter="onHoverIndex = index" @mouseleave="onHoverIndex = -1" class="mx-auto flex space-x-0.5 cursor-pointer hover:shadow-md active:scale-90 transform transition-all duration-100 select-none relative pr-14">
        <div class="w-14 h-14 flex text-white text-4xl z-20 " :class="[menu.bgClass]">
          <ion-icon class="m-auto pointer-events-none" :name="menu.icon"></ion-icon>
        </div>
        <div class="h-14 text-center flex flex-col justify-center px-2  text-white font-bold text-xs tracking-wider absolute z-10  transition-all duration-300 overflow-hidden" :class="[onHoverIndex === index ? 'left-14 w-32' : 'left-0 w-0 rotate-6','', menu.bgClass ]">
          <h6>{{menu.name}}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      onHoverIndex : -1,
      menus : [
        {
          icon : 'flask',
          name : 'Scientific Document',
          bgClass : 'bg-blue-500'
        },
        {
          icon : 'earth',
          name : 'Geographical Document',
          bgClass : 'bg-green-600'
        },
        {
          icon : 'library',
          name : 'Encyclopedia',
          bgClass : 'bg-orange-500'
        },
        {
          icon : 'planet',
          name : 'Planetary Science',
          bgClass : 'bg-purple-500'
        },
        
      ]
    }
  },
  methods: {

  },
}

</script>

<style>

</style>