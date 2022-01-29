<template>
  <section class='flex flex-col h-screen justify-center bg-blue-400 bg-gradient-to-br from-blue-400 via-sky-400 to-blue-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300  h-64 shadow-xl  relative px-10 py-5'>
      <h6 class="text-2xl font-serif mb-10 font-bold text-slate-800">
        The team
      </h6>
      <div class="grid grid-cols-3 gap-14">
        <div v-for="(team,index) in teams"  :key="index" class="">
          <div class="h-24 w-24 bg-gray-300 transform rotate-45 hover:rotate-0 hover:scale-125 transition-all duration-700 overflow-hidden group relative">
            <img class="transform -rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover scale-[1.40] hover:rotate-0 transition-all duration-700 hover:scale-110 filter sepia hover:sepia-0 hover:brightness-110" :src="team.image" :alt="team.name">
          </div>
          <h6 class="text-center mt-5 font-serif text-slate-\900">
            {{team.name}}
          </h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      teams : [
        {
          image : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          name : "Jane Foe"
        },
        {
          image : "https://images.unsplash.com/photo-1603384699007-50799748fc45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
          name : "Juan Doe"
        },
        
        {
          image : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          name : "Mark Zuck"
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