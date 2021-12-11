<template>
  <section @click="incrementPage" class="h-screen flex flex-col justify-end px-10 overflow-hidden">

    <div class="w-96  bg-white overflow-visible relative h-56">
      <div class="flex justify-center space-x-2 absolute h-5/6 w-600-percent transition-all duration-500" :style="{left : cardContainerLeft}">
        <div v-for="(item,index) in items" :key="index" class="w-5/6 h-full rounded-lg shadow-md relative cursor-pointer group bg-gradient-to-r flex justify-end card" :class="item.bgClass">
          <transition name="champ">
          <img  :src="itemsSourceFile + item.img" class="filter brightness-125 absolute -top-1/2 -left-12 transform  w-72 group-hover:scale-125 transition-all duration-300 select-none">
          </transition>
          <div class="pr-20 flex flex-col pt-10 transition-all duration-300">
            <h1 class="text-5xl text-white font-bold text-left select-none">{{item.name}}</h1>
            <h6 class="text-xs text-gray-200"> {{item.info}} </h6>
            <button class="text-xs mt-2 py-2 px-4 bg-white font-bold uppercase rounded-md w-max hover:text-white shadow-sm transition-all duration-200" :class="item.textColor">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      "activePage" : 1,
      itemsSourceFile : "/lol/",
      items : {
        0 : {
          "name" : "Ekko",
          "img" : "ekko.png",
          "bgClass" : "from-green-400 to-green-500",
          "info" : "The boy who Shattered Time",
          "textColor" : "text-green-500 hover:bg-green-500  active:bg-green-400"
        },
        1 : {
          "name" : "Jinx",
          "img" : "jinx.png",
          "bgClass" : "from-blue-400 to-blue-500",
          "info" : "The Loose Cannon",
          "textColor" : "text-blue-500 hover:bg-blue-500  active:bg-blue-400"
        },
        2 : {
          "name" : "Vi",
          "img" : "vi.png",
          "bgClass" : "from-pink-400 to-pink-500",
          "info" : "The Piltover Enforcer",
          "textColor" : "text-pink-500 hover:bg-pink-500  active:bg-pink-400"
        },
        3 : {
          "name" : "Ekko",
          "img" : "ekko.png",
          "bgClass" : "from-green-400 to-green-500",
          "info" : "The boy who Shattered Time",
          "textColor" : "text-green-500 hover:bg-green-500  active:bg-green-400"
        },
        4 : {
          "name" : "Jinx",
          "img" : "jinx.png",
          "bgClass" : "from-blue-400 to-blue-500",
          "info" : "The Loose Cannon",
          "textColor" : "text-blue-500 hover:bg-blue-500  active:bg-blue-400"
        },
        5 : {
          "name" : "Vi",
          "img" : "vi.png",
          "bgClass" : "from-pink-400 to-pink-500",
          "info" : "The Piltover Enforcer",
          "textColor" : "text-pink-500 hover:bg-pink-500  active:bg-pink-400"
        }
      }
    }
  },
  methods : {
    incrementPage(){
      if(this.activePage < 5)return this.activePage++;
      this.activePage = 0;
    }
  },
  computed : {
    cardContainerLeft(){
      return (this.activePage * -100) + "%";
    }
  }

}
</script>

<style scoped>

.card:hover img {
  top: -25%;
}

.card:hover div {
  padding-right: 2rem;
}

.w-600-percent {
  width:600%;
}

  .champ-enter-active {
      animation: enter .2s;
    }

    .champ-leave-active {
      animation: leave .2s;
    }

    @keyframes enter {
      0% {
        left: -30rem;
        opacity: 0;
        transform: scale(0);
      }
      80% {
        opacity: 0;
        transform: scale(1.5);
      }
      100% {
        left: -3rem;
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes leave {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(0);
      }
    }

</style>