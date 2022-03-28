<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-emerald-400 bg-gradient-to-br from-sky-400 to-emerald-400"
  >
    <div class="grid h-16 grid-cols-5 px-2 mx-auto bg-white rounded-lg sm:scale-150 w-72">
      <button
        v-for="(icon, index) in icons"
        :key="index"
        class="relative flex items-center h-12 text-2xl transition-all duration-700 rounded-lg hover:bg-sky-50"
        @click="selectedIndex = index"
      >
        <span class="absolute z-10 transition-all duration-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-slate-500"
          :class="[selectedIndex !== index ? 'scale-100' : 'scale-0','' ]"
        >
          <ion-icon class="-mb-1 pointer-events-none" :name="`${icon.name}-outline`"></ion-icon>
        </span>
        <span
          class="absolute z-20 transition-all -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-sky-900"
          :class="[selectedIndex === index ? 'scale-125 duration-700' : 'scale-100 duration-100 opacity-0','' ]"
        >
          <ion-icon class="-mb-1 pointer-events-none" :name="icon.name"></ion-icon>
        </span>
      </button>
      <div class="relative h-4 col-span-5">
        <h6 class="absolute w-1/5 text-xs font-bold text-center transition-all duration-500 scale-75 text-sky-800"
          :class="titlePosition"
        >
          {{title}}
        </h6>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      selectedIndex : 0,
      icons : [
        {
          name :'calculator',
          title : 'Calculator'
        },
        {
          name :'calendar-number',
          title : 'Calendar'
        },
        {
          name :'chatbox',
          title : 'Chats'
        },
        {
          name :'desktop',
          title : 'Servers'
        },
        {
          name :'finger-print',
          title : 'Records'
        },
      ]
    }
  },
  methods: {

  },
  computed : {
    title(){
      return this.icons[this.selectedIndex].title;
    },
    titlePosition(){
      switch (this.selectedIndex) {
        case 0:
          return 'left-[0%]';
          break;
        case 1:
          return 'left-[20%]';
          break;
        case 2:
          return 'left-[40%]';
          break;
        case 3:
          return 'left-[60%]';
          break;
        case 4:
          return 'left-[80%]';
          break;
        default:
          return 'left-[0%]';
          break;
      }
    }
  }
}

</script>

<style>
</style>