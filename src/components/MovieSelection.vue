<template>
  <section class='flex flex-col h-screen justify-center bg-amber-900/60 px-2'>
    <div class='mx-auto w-full max-w-md rounded-md bg-amber-300  h-64 shadow-xl flex justify-between relative bg-[url(https://media.istockphoto.com/photos/3d-render-of-modern-empty-room-with-wooden-floor-and-large-white-picture-id1301739174?k=20&m=1301739174&s=612x612&w=0&h=EZtNISMs3GsAH1ovXAte6BQDGB8SQiIIugbdCmDdV-0=)] shadow-amber-900/30 overflow-hidden'>
      
      <img class="absolute z-10 bottom-0 w-56 left-1/2 transform -translate-x-1/2" src="https://admincms.carlhansen.com/globalassets/products/dining-tables/ch327/ch327-eg-olie-190x95-cm.png?aspect=16:9&device=desktop&size=medium&display=standard" alt="table">

      <img class="absolute z-40 w-32 -left-10  bottom-2 select-none" src="https://images.squarespace-cdn.com/content/v1/5833bd87579fb3cc08e86017/1591057464767-9RTLCEXU2F24HKV82L21/PlantPalm001_preview1.png" alt="plant">

      <img class="absolute z-10 w-full left-1/2 transform select-none -translate-x-1/2 bottom-[-9rem] " src="https://cdn.shopify.com/s/files/1/0351/7510/4651/products/CurvedBackSofa-EBONIZEDOAK-FLECKINDIGO2_800x.png?v=1628875328" alt="couch">

      <div class="w-full absolute bottom-20 pb-2 z-30 h-44 flex space-x-4 px-4 select-none overflow-x-auto overflow-y-hidden scroll-smooth snap-x" style=" -webkit-overflow-scrolling: touch;">
        <section class="mt-auto snap-center" v-for="(movie,index) in movies" :key="index">
        <div :id="'movie' + index"  @click="setCurrentMovie(index)" class="w-20 h-32 rounded-md shadow-md overflow-hidden cursor-pointer  transform transition-all flex" :class="[index === currentOpenedIndex ? 'w-52 h-32' : 'hover:scale-110 active:scale-100','' ]" >
          <div class="h-full w-20">
          <img class="aspect-auto min-h-full min-w-full" :src="movie.poster" alt="">
          </div>
          <div v-if="index === currentOpenedIndex" class="w-32 h-full relative overflow-hidden rounded-r-md select-none">
            <div class="bg-black bg-gradient-to-l from-gray-900/50 to-gray-800/30 w-full filter h-full backdrop-blur-sm bg-opacity-50 absolute z-20 p-2">
              <div class="text-white font-black text-sm">
                <ion-icon class="text-xl cursor-pointer" name="play-circle"></ion-icon>
                <h1>Lorem Ipsum</h1>
                <p class="text-[0.50rem] leading-none w-20  font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis a beatae? Consectetur laudantium iste perferendis.</p>
              </div>
            </div>
            <img class="absolute top-0 z-10" :src="movie.poster" >
          </div>
        </div>
        </section>

      </div>

    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      currentOpenedIndex : -1,
      movies : [
        {
          poster : "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
        },
        {
          poster : "https://i5.walmartimages.com/asr/90028175-cbfa-477c-954f-cb20d59cf8c4_1.2dabd34d8cf2503859bd128d699f059a.jpeg"
        },
        {
          poster: "https://images.moviesanywhere.com/607cde33edb94043a969a6594c536c82/474bedac-a2cc-466c-8133-aaadefece01f.jpg"
        },
        {
          poster : "https://m.media-amazon.com/images/M/MV5BMjIxODg1Nzc3NF5BMl5BanBnXkFtZTcwMjM0MjEzMw@@._V1_FMjpg_UX1000_.jpg"
        },
        {
          poster : "https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg"
        },
        {
          poster : "https://www.adweek.com/wp-content/uploads/2020/04/social-distance-movies-bad-boy-2020.jpg"
        },
        {
          poster : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054"
        }
      ]
    }
  },
  methods: {
    setCurrentMovie(index){
      this.currentOpenedIndex = index;
    }
  },
}

</script>

<style>

</style>