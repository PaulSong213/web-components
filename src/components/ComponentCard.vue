<template>
  <div
    ref="cardRef"
    class="relative overflow-hidden rounded-xl bg-gray-800 cursor-default"
    style="aspect-ratio: 4/3"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Scaled component preview -->
    <div
      v-if="asyncComp"
      class="absolute inset-0"
      :style="{ pointerEvents: isHovered ? 'auto' : 'none' }"
    >
      <div
        :style="{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: windowWidth + 'px',
          height: windowHeight + 'px',
          transform: `translate(-50%, -50%) scale(${scale})`,
        }"
      >
        <component :is="asyncComp" />
      </div>
    </div>

    <!-- Skeleton before intersection -->
    <div v-else class="absolute inset-0 animate-pulse bg-gray-700" />

    <!-- Interaction blocker when not hovered -->
    <div v-if="!isHovered" class="absolute inset-0 z-20" />

    <!-- View source button on hover -->
    <Transition name="fade">
      <a
        v-if="isHovered"
        :href="sourceCodeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute bottom-2 right-2 z-30 flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/30 backdrop-blur-sm border border-white/30"
        @click.stop
      >
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Source
      </a>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineAsyncComponent } from 'vue'

const props = defineProps({
  route: {
    type: Object,
    required: true,
  },
})

const cardRef = ref(null)
const cardWidth = ref(0)
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const isHovered = ref(false)
const asyncComp = ref(null)

const scale = computed(() => {
  if (!cardWidth.value || !windowWidth.value) return 0.5625
  const multiplier = windowWidth.value < 768 ? 0.75 : 2.25
  return (cardWidth.value / windowWidth.value) * multiplier
})

const sourceCodeUrl = computed(() => {
  const path = props.route.path.slice(1).replace(/\.vue$/, '')
  const pascalCase = path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
  return `https://github.com/PaulSong213/web-components/blob/master/src/components/${pascalCase}.vue`
})

let ro = null
let io = null

onMounted(() => {
  ro = new ResizeObserver(([entry]) => {
    cardWidth.value = entry.contentRect.width
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
  })
  ro.observe(cardRef.value)

  io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !asyncComp.value) {
        asyncComp.value = defineAsyncComponent(props.route.component)
        io.disconnect()
        io = null
      }
    },
    { rootMargin: '300px' }
  )
  io.observe(cardRef.value)
})

onUnmounted(() => {
  ro?.disconnect()
  io?.disconnect()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
