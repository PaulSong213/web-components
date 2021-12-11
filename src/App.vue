<template>
  <section>

    <div id="nav" class=" absolute z-50 w-10 bg-green-500 bottom-10 right-10 rounded-full flex justify-between p-1 flex-col space-y-1 text-white text-3xl bg-opacity-50 shadow-xl">
      <div @click="moveToNextPath(false)" class="h-8 w-full rounded-t-full hover:bg-green-500 cursor-pointer active:bg-green-400">
        <ion-icon name="caret-up-outline"></ion-icon>
      </div>

      <transition name="fade-ups">
        <div v-if="currentIndex > 0" class="text-center text-xs flex justify-center select-none">
          <span>{{currentIndex}}</span>
          <span class="table my-auto" style="font-size: 0.50rem;line-height: 0.75rem;">/ {{listPath.length - 1}} </span>
        </div>
      </transition>
      <div @click="moveToNextPath(true)" class="h-8 w-full rounded-b-full hover:bg-green-500 cursor-pointer active:bg-green-400">
        <ion-icon name="caret-down-outline"></ion-icon>
      </div>
    </div>

    <router-view class="z-10" v-slot="{ Component }">
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
.page-slide-forward-enter-active {
  transition: all 0.3s ease-out;
  overflow-y:hidden;
  max-height: 100vh;
}

.page-slide-forward-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  overflow-y:hidden;
  max-height: 100vh;
}

.page-slide-forward-enter-from,
.page-slide-forward-leave-to {
  transform: translateY(50%);
  opacity: 0.7;
}

.page-slide-backward-enter-active {
  transition: all 0.3s ease-out;
  overflow-y:hidden;
  max-height: 100vh;
}

.page-slide-backward-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  overflow-y:hidden;
  max-height: 100vh;
}

.page-slide-backward-enter-from,
.page-slide-backward-leave-to {
  transform: translateY(-50%);
  opacity: 0.7;
}

</style>
