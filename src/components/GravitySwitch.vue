<template>
  <section class='flex flex-col h-screen justify-center bg-[url(https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHNwYWNlJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60)] px-2 bg-cover'>
    <div class='mx-auto w-full max-w-md rounded-xl  h-96 shadow-xl flex  relative bg-opacity-10  bg-purple-400 bg-gradient-to-tr from-blue-500 to-purple-400 flex-col pt-14'>
      <div @click="isOpen = !isOpen" class="h-20 w-48 origin-left transition-all duration-1000 transform rotate mx-auto rounded-full border-4 border-white cursor-pointer relative" :class="[isOpen ? 'rotate-90' : 'rotate-0' , '' ]" >
          <img class="h-16 absolute top-1/2 -translate-y-1/2  transition-all duration-1000 delay-700" src="https://ouch-cdn2.icons8.com/kVKVp7r2c1c-eRk13aOpjWNgwD0gPF2nqYS_xiJ5Gzg/rs:fit:256:259/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODAy/L2UzNDhiOGRlLTI0/YWYtNGNmYy04MWUz/LTg4OTkzZmEzYjU4/Mi5wbmc.png" alt="" :class="[isOpen ? '-rotate-90 left-[95%] -translate-x-full' : 'rotate-0 left-2' , '' ]">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      isOpen : true,
    }
  },
  methods: {

  },
}

</script>

<style>

</style>