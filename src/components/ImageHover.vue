<template>
  <section class="h-screen bg-pink-300 bg-gradient-to-br from-pink-300  to-amber-300 flex flex-col justify-center px-2">

    <div class="w-full max-w-md bg-white h-60 rounded-md mx-auto shadow-2xl p-4 overflow-hidden  relative">

      <div class="transform   relative font-black uppercase text-right cursor-default h-full  overflow-y-auto overflow-x-hidden small-scroll pr-2">
        <div v-for="(team,index) in teams" :key="index" @mouseenter="currentIndex = index" class="transition-all hover:pr-10 w-1/2  ml-auto group relative" >
          <h6  class="text-4xl font-bold font-sans group-hover:underline group-hover:decoration-orange-400 group-hover:decoration-8"  >{{team.name}}</h6>
          <h6  class="text-base group-hover:text-xs group-hover:my-2 font-bold font-sans"  >{{team.position}}</h6>
        </div>
      </div>
      <div class="bg-red-300 w-40 h-48 absolute left-5 top-5 overflow-hidden">
        <img :src="teams[currentIndex].image" class="min-h-full min-w-full aspect-square" alt="">
      </div>

    </div>

  </section>
</template>

<script>
export default {
  data() {
    return{
      currentIndex : 0,
      teams : [
        {
          name : "Paul",
          position : "Team Lead",
          image : "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum illum laborum, quaerat perspiciatis sed voluptas excepturi facilis natus libero ipsam qui fuga reiciendis, tempore"
        },
        {
          name : "John",
          position : "Software Enginner",
          image : "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        },
        {
          name : "Jane",
          position : "Graphics Designer",
          image : "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eumLorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        },
        {
          name : "Doe",
          position : "Cloud Developer",
          image : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eumLorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        },
        {
          name : "Paul",
          position : "Team Lead",
          image : "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum illum laborum, quaerat perspiciatis sed voluptas excepturi facilis natus libero ipsam qui fuga reiciendis, tempore"
        },
        {
          name : "John",
          position : "Software Enginner",
          image : "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        },
        {
          name : "Jane",
          position : "Graphics Designer",
          image : "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eumLorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        },
        {
          name : "Doe",
          position : "Cloud Developer",
          image : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eumLorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        }
      ]
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
  background: rgba(0,0,0,0.1);
  border-radius: 40px;

}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.5);
  border-radius: 40px;
}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.7);
}

</style>