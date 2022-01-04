<template>
  <section class='flex flex-col h-screen justify-center bg-[#F5CB86] bg-gradient-to-b from-[#e0c69b] via-[#e0c69b] to-[#ad8c6d] px-2'>
    <div class='mx-auto w-64 rounded-sm bg-yellow-900  h-96 r shadow-md relative shadow-yellow-900/30 flex flex-col -space-y-0.5'>
      <div class="bg-amber-100 py-2 px-4 flex flex-col justify-between text-amber-800 shadow-sm h-20">
        <div class="text-2xl">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div class="flex justify-between text-xs">
          <h6 class="font-bold">
            <span>₱</span>{{total}}
          </h6>
          <h6 class="underline underline-offset-2 cursor-pointer hover:font-black transition-all">
            Place Order
          </h6>
        </div>
      </div>
      <div class=" overflow-auto small-scroll scroll-smooth scroll-my-5">
        <div  v-for="(menu,index) in menus" :key="index" :id="index"  @click="selectedMenuIndex = index" class="py-2 px-4  transition-all select-none flex flex-col justify-between duration-300 overflow-hidden" :class="[menu.bgClass, selectedMenuIndex === index ? 'h-40' : 'h-24 hover:bg-opacity-90 active:bg-opacity-100 cursor-pointer','' ]" >
          <div class="flex space-x-2 transform mr-auto duration-500" :class="[selectedMenuIndex === index ? 'scale-75 -ml-4' : 'my-auto','' ] ">
            <ion-icon class="my-auto text-5xl"  :name="menu.icon"></ion-icon>
            <h6 class="my-auto text-md font-black mx-auto">
              {{menu.name}}
            </h6>
          </div>
          <div v-if="selectedMenuIndex === index" class="h-full mt-3 space-y-1">
            <div v-for="(item,index) in menu.items" :key="index" class="flex justify-between text-sm">
              <h6 class="my-auto">
                {{item.name}}
                <span class="text-xs font-bold font-sans">
                  <span>₱</span>{{item.price}}
                </span>
              </h6>
              <input class="outline-none w-8 p-0.5 rounded-md text-xs text-amber-900" v-model="item.quantity" type="number" min="0">
            </div>
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
      selectedMenuIndex : 0,
      total : 0,
      menus : [
        {
          name : "Coffee",
          icon : "cafe-outline",
          bgClass : "bg-amber-300 text-amber-800",
          items : [
            {
              name : "Cappuccino",
              price : 120,
              quantity : 0
            },
            {
              name : "Barako",
              price : 89,
              quantity : 0
            },
            {
              name : "Latte",
              price : 89,
              quantity : 0
            },
          ]
        },
        {
          name : "Desert",
          icon : "flower-outline",
          bgClass : "bg-amber-500 text-amber-900",
          items : [
            {
              name : "Cake",
              price : 59,
              quantity : 0
            },
            {
              name : "Halo-halo",
              price : 39,
              quantity : 0
            },
          ]
        },
        {
          name : "Beverage",
          icon : "beer-outline",
          bgClass : "bg-yellow-700 text-amber-500",
          items : [
            {
              name : "Beer",
              price : 89,
              quantity : 0
            },
            {
              name : "Coke",
              price : 39,
              quantity : 0
            },
          ]
        },
        {
          name : "Food",
          icon : "fast-food-outline",
          bgClass : "bg-yellow-900 text-amber-400",
          items : [
            {
              name : "Sisig",
              price : 189,
              quantity : 0
            },
            {
              name : "Liempo",
              price : 139,
              quantity : 0
            },
          ]
        },
        
      ]
    }
  },
  watch : {
    menus: {
      handler: function(menus) {
        for (let i = 0; i < menus.length; i++) {
          const menu = menus[i];
          if(!menu.items)continue;
          for (let j = 0; j < menu.items.length; j++) {
            const item = menu.items[j];
            const price = item.price;
            const quantity = item.quantity;
            this.total+=  price * quantity;
          }
        }
      },
      deep: true
    }
  }
}

</script>

<style>
.small-scroll::-webkit-scrollbar {
  width: 3px;
  height: 3x;
  border-radius: 40px;
}

/* Track */
.small-scroll::-webkit-scrollbar-track {
  background: rgba(255, 209, 4, 0.3);

}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgb(172, 141, 4,0.7);
}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(172, 141, 4,1);

}

</style>