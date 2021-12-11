<template>
  <section class="h-screen bg-blue-500 flex flex-col justify-center">
    
    <div @click="isPinned = !isPinned" class="w-44 h-16 rounded-full mx-auto relative px-1 cursor-pointer transition-all duration-300 group hover:shadow-2xl" :class="[isPinned ? 'bg-blue-700 ' : 'bg-blue-400 ','' ]">
      <div class="h-20 w-20 rounded-full absolute top-1/2  -translate-y-1/2 text-5xl flex shadow-2xl transform transition-all duration-500" :class="[isPinned ? 'text-blue-700 bg-white -rotate-12 left-2' : 'text-white bg-blue-700 left-98-percent -translate-x-full','' ]">
        <ion-icon class="m-auto" name="bookmark"></ion-icon>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      isPinned : false
    }
  }
}
</script>

<style>
.left-98-percent {
  left: 98%;
}
</style>