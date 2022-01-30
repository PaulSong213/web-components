<template>
  <section class='flex flex-col h-screen justify-center bg-amber-300 overflow-hidden bg-gradient-to-br from-amber-300 via-amber-200 to-amber-300 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-yellow-900 h-64 shadow-xl relative divide-y-2 divide-yellow-300/30 p-5'>
      <div v-for="(chocolate,index) in chocolates" :key="index" class=" text-xl py-2 text-yellow-200 select-none relative group hover:bg-red-900 transition-colors duration-500">
        <h6 class="font-oswald">{{chocolate.name}}</h6>
        <div  :id="index" class="h-32 w-32 overflow-hidden absolute transform -top-28 rounded-tr-3xl rounded-bl-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 test">
          <img class="min-w-full min-h-full aspect-square" :src="chocolate.image" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      chocolates : [
        {
          name : 'White Chocolate',
          image : "https://images.unsplash.com/photo-1548907040-4baa42d10919"
        },
        {
          name : "Dark Chocolate",
          image : "https://images.unsplash.com/photo-1587132164684-cfd0b8214d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdoaXRlJTIwY2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
          name : "Bittersweet Chocolate",
          image : "https://images.unsplash.com/photo-1483125796430-526962b9830b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJpdHRlcnN3ZWV0JTIwY2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
          name : "Cocoa Powder",
          image : "https://images.unsplash.com/photo-1523035274455-b2e5c6d5c2e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29jb2ElMjBwb3dkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
          name : "Ruby Chocolate",
          image : "https://images.unsplash.com/photo-1521567784523-aaf2bbe9b8c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlZCUyMGNob2NvbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
        }
      ]
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      
        window.addEventListener('mousemove', (e) => {
          for(var i = 0; i < this.chocolates.length; i ++){
            var box = document.getElementById(i);
            var left = (e.pageX - 20 )+"px";
            box.style.left = left;
          }
        });
    }
  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sonsie+One&display=swap');

.font-oswald {
  font-family: 'Sonsie One', cursive;
}

</style>