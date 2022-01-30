<template>
  <section class='flex flex-col h-screen justify-center bg-rose-400 bg-gradient-to-br from-orange-400 via-red-400 to-orange-400 px-2'>
  <div class="grid grid-cols-3 sm:px-4 gap-4  w-full relative select-none">
    <div v-for="(card,index) in cards" :key="index" @click="selectedIndex = index" class="bg-white h-64 w-full rounded-md cursor-pointer shadow-md shadow-orange-400/70 flex flex-col justify-between relative transition-all  duration-500" :class="[index === 1 ? 'transform scale-125 z-20' : 'z-10','', index === selectedIndex ? 'bg-orange-500 text-white' : 'text-orange-900','' ]">
      <img :src="card.image" alt="">
      <div class="text-center h-full px-2 text-xs sm:text-sm space-y-2 font-bold ">
        <h6>{{card.offer}}</h6>
        <h6>{{card.price}}</h6>
      </div>
      <div class="absolute right-4 bottom-0 text-2xl text-white">
        <ion-icon name="checkmark-circle"></ion-icon>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      selectedIndex : -1,
      cards : [
        {
          image : "https://ouch-cdn2.icons8.com/zHgr4U2vH4bTe9yQfTIPog78l4huIaNaNdlkFxUWx8o/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTAw/LzE1MTQyZTNmLTcz/ZTUtNDBhMy05YmQ5/LTdmNmI0MmJiN2Zj/Yi5zdmc.png",
          offer : "500 Gem",
          price : "$499"
        },
        {
          image : "https://ouch-cdn2.icons8.com/JeJmfsCd5qtl6u7amHUnfqC0Al339rQ0KhZY4cSh5_A/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODI1/LzA2ZjI4NjU5LTE5/OTgtNDUwYy04YjNh/LTNlYmFlOTQwNzkx/NC5zdmc.png",
          offer : "1000 Gem & 1 year game boost",
          price : "$999"
        },
        {
          image : "https://ouch-cdn2.icons8.com/Eyabsv7ILPZW2pAobJ6mK7Cc0-LXUCOAX6SO_2GBq6M/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODY3/LzRlMTQ0YmRkLWI4/NDUtNDdhOS1iYTY1/LThkOTgzMzgwYTIz/Yy5zdmc.png",
          offer : "799 Gem",
          price : "$699"
        },
      ]
    }
  },
  methods: {

  },
}

</script>

<style>

</style>