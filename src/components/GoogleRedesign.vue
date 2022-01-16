<template>
  <section class='flex flex-col h-screen justify-center bg-purple-500/70 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-purple-800  h-64 shadow-xl flex flex-col relative bg-gaming overflow-hidden'>
      <div class="flex justify-end space-x-3 p-3">
        <div class="text-white text-xl flex flex-col justify-center cursor-pointer">
          <ion-icon name="apps-outline"></ion-icon>
        </div>
        <div class="relative w-8 h-8 cursor-pointer">
          <div class="absolute w-9 h-9 bg-white/30 -top-0.5 -left-0.5 rounded-full z-10"></div>
          <div class="w-8 h-8 my-auto rounded-full  overflow-hidden z-20 absolute">
            <img class="aspect-auto min-w-full min-h-full" src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=30" alt="">
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-8 space-y-2">
        <img class="mx-auto w-32 animate-hue-rotate filter brightness-150"  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">
        <div class="flex relative w-56 mx-auto">
          <input class="rounded-2xl mx-auto bg-transparent border border-white text-xs outline-fuchsia-400 p-1 w-full text-white" type="text" />
          <button @click="isSearchOptionOpen = !isSearchOptionOpen" class="absolute right-0.5 top-1/2 -translate-y-1/2 bg-violet-900 text-white w-6 h-6 rounded-2xl flex p-1 text-sm z-40">
            <ion-icon class="m-auto" :name="selectedIcon"></ion-icon>
          </button>
          <section class="h-72 pb-7 top-0 -translate-y-1/2 z-30 absolute w-40 transform translate-x-full bg-violet-900 bg-opacity-70 backdrop-blur-sm shadow-2xl shadow-teal-500 transition-all duration-700 flex flex-col justify-end ease-out" :class="[isSearchOptionOpen ? 'right-8' : '-right-full','']" >
              <div class="snap-mandatory snap-y flex flex-col w-full h-52  mt-auto justify-center space-y-1 overflow-y-scroll">
                <div  v-for="(option,index) in options" :key="index" @click="selectNewSearch(option.icon,index,option)" class="snap-center h-8 flex text-white    space-x-2 px-1"  :class="[index == 2 ? 'pl-9 bg-violet-900 shadow-red-300/30 shadow-md' : 'hover:bg-teal-500/30 cursor-pointer','' ]">
                  <button v-if="index !== 2" @click="isSearchOptionOpen = !isSearchOptionOpen" class="bg-violet-900 text-white w-6 h-6 rounded-2xl flex p-1 text-sm z-40 my-auto">
                    <ion-icon class="m-auto" :name="option.icon"></ion-icon>
                  </button>
                  <h6 class="leading-none my-auto text-xs uppercase font-bold tracking-widest">{{option.name}}</h6>
                </div>
              </div>
          </section>
        </div>
      </div>
      <div class="mt-auto flex justify-between text-white/80 text-[10px] leading-none bg-pink-900 p-2 backdrop-blur-sm bg-opacity-10">
        <div class="space-x-3">
          <a class="hover:underline" href="#">About</a>
          <a class="hover:underline" href="#">Advertising</a>
        </div>
        <div class="space-x-3">
          <a class="hover:underline" href="#">Business</a>
          <a class="hover:underline" href="#">How it works?</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      isSearchOptionOpen : false,
      selectedIcon : "search",
      options : [
        
        {
          name : "Shop",
          icon : "pricetag"
        },
        {
          name : "Videos",
          icon : "play"
        },
        {
          name : "Search",
          icon : "search"
        },
        {
          name : "Image",
          icon : "image"
        },
        {
          name : "Map",
          icon : "location"
        },
      ]
    }
  },
  methods: {
    selectNewSearch(newIcon,index,midItem){
      this.options.splice(index, 1);
      this.options.splice(2, 0, midItem);
      this.selectedIcon = newIcon;
      this.isSearchOptionOpen = false;
    }
  },
}
</script>
<style scoped>
.bg-gaming {
  background:linear-gradient(0deg, rgba(153, 16, 180, 0.8), rgba(153, 16, 180, 0.8)), url(https://images.unsplash.com/photo-1627856013091-fed6e4e30025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60);
  background-size:cover;
}

.animate-hue-rotate {
  animation-name: huerotate;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
}

@keyframes huerotate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

@keyframes pop {
  from {
    transform: scale(0%);
  }
  to {
    transform: scale(100%);
  }
}

</style>