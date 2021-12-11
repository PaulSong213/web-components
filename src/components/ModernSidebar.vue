<template>

  <section class="bg-gradient-to-br from-green-500 via-blue-400 to-green-500 h-screen flex p-8">

    <div class="w-full h-full bg-white grid grid-cols-12 shadow-2xl rounded-xl overflow-hidden p-3">
      <nav class="col-span-3 bg-purple-500 h-full flex flex-col justify-between pt-2 rounded-xl text-white text-xs font-medium uppercase text-center">

        <section class="space-y-0.5">
        <div class="mb-2">
          <div class="w-10 h-10 mx-auto my-2 rounded-md overflow-hidden bg-white flex pop-late">
            <img src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg" alt="">
          </div>
          <h1>Dashboard</h1>
        </div>

        <div v-for="(page,index) in pages" :key="index" @click="activePage = index" class="py-2 hover:bg-white ml-1 rounded-l-xl transition-all duration-500 select-none relative" :class="[activePage === index ? 'bg-white text-purple-500' : 'hover:text-purple-500 bg-opacity-80 active:bg-purple-300 active:text-white cursor-pointer','' ]">
          <h6 class="capitalize active"> {{page.name}} </h6>
        </div>

        </section>

        <section class="w-full h-32 p-4 pop-late flex flex-col justify-center">
          <div class=" bg-white h-full rounded-xl p-2  flex flex-col justify-between">
            <div class="flex justify-center items-center">
            <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 flex">
              <h6 class="text-blue-500 font-bold m-auto">52%</h6>
            </div>
          </div>
          <div class="flex space-x-1 justify-center text-blue-500">
            <ion-icon class="text-2xl" name="rainy"></ion-icon>
          </div>
          </div>
        </section>

      </nav>
      <main class="col-span-9 bg-white h-full px-3 pt-1">
        <h1 class="text-2xl font-bold text-purple-600"> {{pages[activePage].name }} </h1>
      </main>
    </div>

  </section>

</template>

<script>

export default {
  data(){
    return {
      isAtLargeScreen : true,
      activePage : "1",
      pages : {
        "1" : {
          name : "Home"
        },
        "2" : {
          name : "Sales"
        },
        "3" : {
          name : "Progress"
        },
        "4":{
          name : "Socials"
        },
      }
    }
  },
  methods : {
    getBorderActiveStyle(key){
      const defaultBorder = '-webkit-border-radius: 1rem;-moz-border-radius:1rem;border-radius: 1rem;';
      if(!key || !this.isAtLargeScreen)return defaultBorder;
      if(key === this.currentOpenedChatRoom.id)return '-webkit-border-radius: 1rem 0 0 1rem;-moz-border-radius:1rem 0 0 1rem;border-radius: 1rem 0 0 1rem;';
      return defaultBorder;
    },
  },
}  
</script>

<style scoped>
  .pop-late {
    transition: all 300ms ease;
    animation: pop 1000ms;
  }

  @keyframes pop {
    from {
      opacity: 0;
      transform: scale(1.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>

