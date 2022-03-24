<template>
  <section class='flex flex-col justify-center h-screen px-2 overflow-hidden transition-all duration-300'
  :class="[isToggled ? 'bg-emerald-400' : 'bg-sky-400 ' ,'' ]"
  >
    <button @click="isToggled = !isToggled" class="h-24 mx-auto transition-all duration-700 ease-out bg-white rounded-full w-60"
    :class="[isToggled ? 'rotate-180' : 'rotate-0','' ]"
    >
    <div class="h-12 -ml-8 transition-all duration-1000 w-60"
    :class="[isToggled ? '-rotate-180' : 'rotate-180','' ]"
    >
      <div class="w-12 h-12 transition-all duration-300 rounded-full bg-sky-400"
        :class="[isToggled ? 'bg-emerald-400' : 'bg-sky-400 ' ,'' ]"
      ></div>
    </div>
    </button>
  </section>
</template>
<script>
export default {
  data(){
    return {
      isToggled : false
    }
  },
  methods: {

  },
}

</script>

<style>

</style>