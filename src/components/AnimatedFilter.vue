<template>
  <section
    class="relative h-screen px-2 bg-purple-400 bg-gradient-to-br from-violet-400 via-pink-400 to-violet-500"
  >
    <div class="absolute top-24 left-1/2 -translate-x-1/2 space-y-2">
      <TransitionGroup name="widthList" tag="div" class="w-72 bg-white rounded-md h-max p-2 gap-1 overflow-hidden">
        <div
          class="text-xs bg-pink-300 w-max text-slate-900 font-medium px-1 py-0.5 h-max gap-1 inline-block m-1"
          v-for="(item, index) in selectedItems"
          :key="item"
        >
          <div class="flex">
            <h6 class="bg-transparent my-auto">{{ item }}</h6>
            <button
              class="my-auto text-sm text-black -mb-1 transition-all"
              @click="selectItem(item, index, false)"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
        </div>
      </TransitionGroup>
      <TransitionGroup
        name="list"
        tag="div"
        class="w-72 bg-stone-200 transition-all duration-1000 delay-500 rounded-md flex flex-col shadow-xl shadow-violet-500/50 overflow-hidden"
      >
        <button
          class="h-10 hover:bg-pink-200 bg-white active:bg-pink-300 font-medium text-slate-700 transition-all duration-500"
          v-for="(item, index) in selectionItems"
          :key="item"
          @click="selectItem(item, index)"
        >
          <h6 class="w-full text-left px-3">{{ item }}</h6>
        </button>
      </TransitionGroup>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      selectedItems: ['Python'],
      selectionItems: [
        'HTML',
        'CSS',
        'Javascript',
        'C#'
      ]
    }
  },
  methods: {
    selectItem(item, index, toSelect = true) {

      if (toSelect) {
        this.selectedItems.push(item);
        this.selectionItems.splice(index, 1);
      } else {
        this.selectionItems.push(item);
        this.selectedItems.splice(index, 1);
      }
    }
  },
}

</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.widthList-enter-active,
.widthList-leave-active {
  transition: all 1s ease;
}
.widthList-enter-from,
.widthList-leave-to {
  opacity: 0;
  transform: scaleX(0%);
  margin-left: -30px;
}
</style>