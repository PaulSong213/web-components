<template>
  <section class="flex flex-col justify-center h-screen px-2 bg-amber-200">
    <div class="relative flex flex-col w-full h-64 max-w-xs px-20 mx-auto">
      <button
        v-for="(list, index) in checkLists"
        :key="index"
        @click="checkLists[index].isChecked = !checkLists[index].isChecked"
        class="h-10 flex gap-4 relative w-max"
      >
        <div class="w-3 h-full flex">
          <transition name="note">
            <div v-if="!list.isChecked" class="w-3 bg-red-700 h-1 my-auto"></div>
            <div v-else class="text-red-700 text-xl my-auto">
              <ion-icon class="-mb-1" name="checkmark-outline"></ion-icon>
            </div>
          </transition>
        </div>
        <div
          class="h-1 bg-red-700 font-medium absolute transition-all duration-700 top-1/2 -translate-y-1/2 opacity-50"
          :class="[!list.isChecked ? 'w-0 left-0' : 'w-[80%] left-8', '']"
        ></div>
        <h6
          class="my-auto transition-all duration-500"
          :class="[!list.isChecked ? 'opacity-100' : 'opacity-80', '']"
        >{{ list.content }}</h6>
      </button>
    </div>
  </section>
</template>
<script>

export default {
  data() {
    return {
      checkLists: [
        {
          content: 'Personal Portfolio',
          isChecked: false,
        },
        {
          content: 'Clinic System',
          isChecked: false,
        },
        {
          content: 'Chat System',
          isChecked: false,
        },
        {
          content: 'Algorith Visualizer',
          isChecked: false,
        },
        
      ]
    }
  },
  methods: {

  },
}

</script>

<style scoped>
.note-enter-active,
.note-leave-active {
  transition: all 300ms linear;
}

.note-enter-from,
.note-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>