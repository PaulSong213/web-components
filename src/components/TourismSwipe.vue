<template>
  <section class='flex flex-col h-screen justify-center bg-slate-400/70'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-green-300  h-64 shadow-xl shadow-slate-500/50 flex justify-between relative overflow-hidden'>
      <div class="flex h-64 overflow-x-auto overflow-y-hidden w-full snap-x snap-mandatory small-scroll relative scroll-smooth select-none" ref="placeContainer">
        <div v-for="(place,index) in places" :key="index" class="bg-red-500  min-w-full h-full snap-center relative select-none "  >
          <img class="min-w-full min-h-full absolute inset-0 z-10" :src="place.image" :alt="place-image">
          <h6 class="absolute text-white z-30 font-black uppercase top-1/2 -translate-y-1/2 text-4xl w-full text-center tracking-widest">{{place.name}}</h6>
        </div>
      </div>
      <div v-if="currentSelectIndex < places.length" @click="scrollContainer(true)" class="absolute z-40 text-2xl py-2 flex flex-col justify-center text-white/60 bg-black bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-40 top-1/2 transition-all -translate-y-1/2 right-0 cursor-pointer select-none ">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
      <div v-if="currentSelectIndex > 0" @click="scrollContainer(false)" class="absolute z-40 text-2xl py-2 flex flex-col justify-center text-white/60 bg-black bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-40 top-1/2 transition-all -translate-y-1/2 left-0 cursor-pointer select-none ">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
      <img class="absolute z-20 top-16 filter brightness-90 select-none " src="https://cdn.shopify.com/s/files/1/0517/2494/3555/products/L45500-Camel-pcx-03_1024x1024@2x.png?v=1637358268" alt="">
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      currentSelectIndex : 0,
      places : [
        {
          image : "https://static2.thetravelimages.com/wordpress/wp-content/uploads/2020/08/Untitled-design-31.jpg",
          name : "Chocolate Hills"
        },
        {
          image : "https://en.blog.kkday.com/wp-content/uploads/ph_boracay_island_1497294326.jpg",
          name : "Boracay"
        },
        {
          image : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mayon_Volcano_with_cloudy_hat.jpg/1200px-Mayon_Volcano_with_cloudy_hat.jpg",
          name : "Mayon Volcano"
        },
        {
          image : "https://outoftownblog.com/wp-content/uploads/2021/03/Casa-Manila-is-a-museum-in-Intramuros-depicting-colonial-lifestyle-during-Spanish-colonization-of-the-Philippines-photo-via-Depositphotos.jpg",
          name : "Intramuros"
        },
        {
          image : "https://www.journeyera.com/wp-content/uploads/2016/11/what-to-do-in-coron-04908.jpg",
          name : "Kayangan Lake"
        },
        
        
      ]
    }
  },
  methods: {
    scrollContainer(toForward = true){
      let scrollValue = 300
      if(!toForward)scrollValue = -300;
      this.$refs.placeContainer.scrollLeft = this.$refs.placeContainer.scrollLeft + scrollValue;
      if(toForward)return this.currentSelectIndex++;
      this.currentSelectIndex--;
    }
  },
}

</script>

<style scoped>
.small-scroll::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  border-radius: 40px;
}

/* Track */
.small-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
  border-radius: 40px;


}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0,0.3);
  border-radius: 40px;

}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0,0.5);
  border-radius: 40px;

}

</style>