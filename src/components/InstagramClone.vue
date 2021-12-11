<template>
  <section class="h-screen bg-purple-500 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 flex flex-col justify-center">

    <section class="flex justify-center space-x-5 ">

      <div class="w-56 h-96 rounded-xl bg-white text-gray-800 relative overflow-hidden shadow-2xl">
          <nav class="flex font-bold py-2 px-2 border-b border-gray-100 shadow-lg">
            <ion-icon  name="chevron-back-outline"></ion-icon>
            <h1 class="mx-auto text-sm">Web Components</h1>
          </nav>

          <div class="grid grid-cols-12 my-4 px-2">
            <div class="col-span-4">
              <div class="h-12 w-12 relative rounded-full overflow-hidden m-auto"> 
                <img class="absolute min-h-full min-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover " src="https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Person">
              </div>
            </div>
            <div class="col-span-8 pr-2 flex flex-col justify-between">
              <div class="flex h-max font-bold justify-between">
                <h1 class="whitespace-nowrap w-3/4 overflow-hidden overflow-ellipsis">Web Components</h1>
                <ion-icon class="block" name="ellipsis-horizontal-outline"></ion-icon>
              </div>
              <div class="flex justify-between">
                <button class="bg-blue-insta text-white rounded-sm text-xs py-0.5 leading-4  w-10/12 mr-1">
                  Follow
                </button>
                <button class="bg-blue-insta text-white rounded-sm text-xs py-0.5px-1 leading-4 w-2/12 ml-auto">
                  <ion-icon class="mt-0.5" name="chevron-down-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
          <div class="w-full text-xs text-gray-900 my-4 px-4">
            Follow me for free cookie 🍪
          </div>

          <div class="grid grid-cols-3 border-b border-t border-gray-200 shadow-sm py-1">
            <div v-for="(info,index) in timelineInfos" :key="index" class="flex flex-col -space-y-2 text-center text-sm text-gray-600">
              <span class="font-bold">{{info.value}}</span>
              <span class="text-xs">{{info.title}}</span>
            </div>
            
          </div>

          <div class="grid grid-cols-5 my-2">
            <div v-for="(tab,index) in tabs" :key="index" class="text-gray-500 text-xl text-center">
              <ion-icon :name="tab.icon" :class="[index === 0 ? 'text-blue-500' : '','']" ></ion-icon>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-0.5">
            <div v-for="(image,index) in images" :key="index" class="relative overflow-hidden h-16">
              <img class="absolute min-h-full min-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover " :src="image">
            </div>
          </div>  

          <nav class="absolute grid grid-cols-5 w-full bottom-0 left-0 bg-white py-1">
            <div v-for="(icon,index) in navIcons" :key="index" class="text-gray-500 text-xl text-center">
              <ion-icon :name="icon" ></ion-icon>
            </div>
          </nav>
      </div>

      

    </section>

  </section>
</template>

<script>
export default {
  data(){
    return{
      timelineInfos : [
        {
          title : 'posts',
          value : 15
        },
        {
          title : 'followers',
          value : 10
        },
        {
          title : 'following',
          value : 0
        }
      ],
      tabs : [
        {
          icon : 'grid'
        },
        {
          icon : 'square-outline'
        },
        {
          icon : 'play-circle-outline'
        },
        {
          icon : 'play-outline'
        },
        {
          icon : 'clipboard-outline'
        },
      ],
      navIcons : [
        "home",
        "search-outline",
        "add-circle-outline",
        "heart-outline",
        "person-outline",

      ],
      images : [
        "https://media.istockphoto.com/photos/gamer-room-picture-id1311350206?b=1&k=20&m=1311350206&s=170667a&w=0&h=cUKGHoj91by8DJ1iSuNREjTo-i2FpffvtvNMnsq4Fmg=",
        "https://media.istockphoto.com/photos/young-man-wearing-headset-and-play-computer-video-games-online-home-picture-id1290727524?b=1&k=20&m=1290727524&s=170667a&w=0&h=8Ff68TwSesdnGUfE_GbVq5-9l-94vga7F0lAZOK8YkQ=",
        "https://media.istockphoto.com/photos/gaming-room-at-night-with-neon-light-gaming-chair-and-speakers-in-the-picture-id1312949197?b=1&k=20&m=1312949197&s=170667a&w=0&h=zpcjcQ1qfuJD1bwWT4PudGhlidWleunydFfH5Ket-08=",
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBnYW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1565172265978-aaa872e3f618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBnYW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1573053986275-840ffc7cc685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBnYW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
      ]
    }
  }
}
</script>

<style scoped>
  * {
    font-family: 'Helveca',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
  }

  .bg-blue-insta {
    background-color: #0195F6;
  }
</style>