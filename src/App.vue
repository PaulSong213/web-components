<template>
  <section>
    <div id="nav" v-if="isDevelopment" class=" absolute z-50 bg-green-500 bottom-10 right-10 rounded-full flex justify-between p-1 space-x-1 text-white text-5xl bg-opacity-50 shadow-xl">
      <div v-if="currentIndex > 0" @click="moveToNextPath(false)" class="h-12  w-full rounded-l-full hover:bg-green-500 cursor-pointer active:bg-green-400 transition-all">
        <ion-icon name="caret-back-outline"></ion-icon>
      </div>

      <transition name="fade-ups">
        <div v-if="currentIndex > 0" class="text-center text-base flex flex-col select-none my-auto">
          <span>{{currentIndex}}</span>
          <span class="table my-auto" style="font-size: 0.50rem;line-height: 0.75rem;">{{listPath.length - 1}} </span>
        </div>
      </transition>
      <div @click="moveToNextPath(true)" class="h-12  w-full rounded-r-full hover:bg-green-500 cursor-pointer active:bg-green-400 transition-all">
        <ion-icon name="caret-forward-outline"></ion-icon>
      </div>
    </div>

    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
  </section>
</template>

<script>
export default {
    data() {
        return {
          isDevelopment : false,
          pageTransition : 'page-slide-forward'    
        }
    },
    mounted(){
      this.checkIfDevelopment()
    },
    methods : {
      checkIfDevelopment(){
        this.isDevelopment = window.location.hostname === 'localhost';
      },
      moveToNextPath(isNext = true){
        if(isNext){
          this.pageTransition = 'page-slide-forward';    
          return this.$router.push({path : this.nextPath});
        }
        this.pageTransition = 'page-slide-backward';    
        this.$router.push({path : this.prevPath});
      }
    },
    computed : {
      listPath(){
        return Object.keys(this.components);
      },
      components(){
        var components = {};
        var routes = Object.values(this.$router.options.routes);
        for(var i = 0; i < routes.length; i++){
          components[routes[i].path] = routes[i];
        }
        return components;
      },
      currentIndex(){
        return this.listPath.indexOf(this.$route.path);
      },
      nextPath(){
        const nextIndex = this.currentIndex + 1;
        if(nextIndex >= this.listPath.length)return this.listPath[this.listPath.length - 1];
        return this.listPath[nextIndex];
      },
      prevPath(){
        const prevIndex = this.currentIndex - 1;
        if(prevIndex < 0)return this.listPath[0];
        return this.listPath[prevIndex];
      }
    }
  
}
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
