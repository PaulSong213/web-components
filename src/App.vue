<template>
  <div class="min-h-screen bg-gray-950">
    <!-- Gallery grid -->
    <main class="p-4">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ComponentCard
          v-for="route in galleryRoutes"
          :key="route.path"
          :route="route"
        />
      </div>
    </main>
  </div>
</template>

<script>
import ComponentCard from './components/ComponentCard.vue'

export default {
  components: { ComponentCard },

  computed: {
    galleryRoutes() {
      return this.$router.options.routes.filter((r) => !r.path.startsWith('/:'))
    },
  },
}
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
