<template>
  <section  >
    <div
      id="nav"
      v-if="showBottomNavigation"
      class="absolute z-50 flex justify-between p-1 space-x-1 text-5xl text-white bg-green-500 bg-opacity-50 border rounded-full shadow-xl bottom-10 right-10 border-white/30"
    >
      <div
        v-if="currentIndex > 0"
        @click="moveToNextPath(false)"
        class="w-full h-12 transition-all rounded-l-full cursor-pointer hover:bg-green-500 active:bg-green-400"
      >
        <ion-icon class="pointer-events-none" name="caret-back-outline"></ion-icon>
      </div>

      <transition name="fade-ups">
        <div
          v-if="currentIndex > 0"
          class="flex flex-col my-auto text-base text-center select-none"
        >
          <span>{{ currentIndex }}</span>
          <span class="table my-auto" style="font-size: 0.5rem; line-height: 0.75rem"
            >{{ listPath.length - 1 }}
          </span>
        </div>
      </transition>
      <div
        @click="moveToNextPath(true)"
        class="w-full h-12 transition-all rounded-r-full cursor-pointer hover:bg-green-500 active:bg-green-400"
      >
        <ion-icon class="pointer-events-none" name="caret-forward-outline"></ion-icon>
      </div>
    </div>
    <Transition name="fade">
    <div
      v-if="isOtherProjectsVisible"
      class="absolute z-50 flex flex-col gap-4 py-4 space-x-1 text-xs font-bold text-center text-white bg-green-500 bg-opacity-50 border rounded-md shadow-sm select-none w-full max-w-[80vw] sm:max-w-sm  bottom-32 left-10 border-white/30"
    >
      <a v-for="(otherProject, index) in otherProjects" :key="index" :href="otherProject.link" class="text-md hover:underline underline-offset-4"> {{otherProject.title}} </a>
    </div>
    </Transition>
    <button
      v-if="showBottomNavigation"
      @click="isOtherProjectsVisible = !isOtherProjectsVisible "
      class="absolute z-50 flex justify-between px-4 py-2 space-x-1 text-xs font-bold text-center text-white bg-green-500 bg-opacity-50 border rounded-full shadow-sm select-none w-36 bottom-20 left-10 border-white/30"
    >
      <span class="m-auto">Other Projects</span>
      <span><ion-icon name="caret-up-outline"></ion-icon></span>
    </button>

    <a
      id="nav"
      v-if="showBottomNavigation"
      href="https://github.com/PaulSong213/web-components.git"
      class="absolute z-50 flex justify-between px-4 py-2 space-x-1 text-xs font-bold text-center text-white bg-green-500 bg-opacity-50 border rounded-full shadow-sm select-none w-36 bottom-10 left-10 border-white/30"
    >
      <span class="m-auto">Source Code</span>
    </a>
      <router-view @click="isOtherProjectsVisible = false" v-slot="{ Component }">
        <component  :is="Component" />
      </router-view>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      showBottomNavigation: true,
      pageTransition: "page-slide-forward",
      isOtherProjectsVisible : false,
      otherProjects : [
        {
          title : "Web dev Roadmap",
          link : "https://www.figma.com/file/qUs5tSVOJTsQfQt6IPX8kK/Web-dev-Roadmap?node-id=0%3A1"
        },
        {
          title : "Point of Sale",
          link : "https://github.com/PaulSong213/PointOfSale"
        },
        {
          title : "DataTables Example",
          link : "https://github.com/PaulSong213/datatables-example"
        },
        
      ]
    };
  },
  mounted() {
    this.willShowBottomNavigation();
  },
  methods: {
    willShowBottomNavigation() {
      if (import.meta.env.VITE_IS_MAKING_VIDEO) this.showBottomNavigation = true;
    },
    moveToNextPath(isNext = true) {
      if (isNext) {
        this.pageTransition = "page-slide-forward";
        return this.$router.push({ path: this.nextPath });
      }
      this.pageTransition = "page-slide-backward";
      this.$router.push({ path: this.prevPath });
    },
  },
  computed: {
    listPath() {
      return Object.keys(this.components);
    },
    components() {
      var components = {};
      var routes = Object.values(this.$router.options.routes);
      for (var i = 0; i < routes.length; i++) {
        components[routes[i].path] = routes[i];
      }
      return components;
    },
    currentIndex() {
      return this.listPath.indexOf(this.$route.path);
    },
    nextPath() {
      const nextIndex = this.currentIndex + 1;
      if (nextIndex >= this.listPath.length)
        return this.listPath[this.listPath.length - 1];
      return this.listPath[nextIndex];
    },
    prevPath() {
      const prevIndex = this.currentIndex - 1;
      if (prevIndex < 0) return this.listPath[0];
      return this.listPath[prevIndex];
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
