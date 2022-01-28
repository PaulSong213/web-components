<template>
  <section class="h-screen flex transition-all duration-1000 overflow-hidden" :class="[isDarkMode ? 'bg-blue-900' : 'bg-black','' ]" >
    <div class="w-max table m-auto transform scale-[200%]">
      <section class="flex space-x-2">
        <div @click="toggleDarkMode(!isDarkMode)" class="rounded-full p-1 text-gray-200 cursor-pointer transition-all flex ease-in-out duration-500  bg-blue-500 bg-opacity-20 w-40 h-16 relative">
          <div class="h-14 w-14 bg-white rounded-full absolute transition-all duration-1000 top-1 " :class="[!isDarkMode ? 'left-1' : 'left-[98%] -translate-x-full neon','' ]" >
          </div>
          <div class="w-0.5 bg-white absolute top-0 left-7 -translate-y-full rounded-t-full transition-all duration-1000 opacity-70" :class="[isDarkMode ? 'h-10' : 'h-0', ''  ]" >
            <div class=" rounded-full relative bg-white -mt-0.5 left-1/2 -translate-x-1/2 transition-all duration-700" :class="[isDarkMode ? 'h-2  w-2' : 'h-0 w-0', ''  ]"></div>
          </div>
        </div>
      </section>
    </div>
    <img class="absolute w-24 top-5 left-5 filter brightness-75 transition-all duration-1000" :class="[isDarkMode ? 'opacity-100 transform rotate-180 delay-150' : 'opacity-0','' ]" src="https://img.icons8.com/color/2x/nebula.png" alt="nebula">
    <img class="absolute w-20 bottom-10 right-10 filter brightness-75 transition-all duration-1000" :class="[isDarkMode ? 'opacity-100 transform rotate-180' : 'opacity-0','' ]" src="https://ouch-cdn2.icons8.com/ge89lfRW68NGc4S1n0TyjCbJlpSFSqBhMKS4PPPMQF4/rs:fit:256:172/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDg5/LzliODg3MmNhLTQ0/ZmMtNDNkZC1iMjU3/LWNlYzJiN2IzMDEw/MC5wbmc.png" alt="nebula">
    <img class="absolute w-12 bottom-10 left-10 filter brightness-75 transition-all duration-1000" :class="[isDarkMode ? 'opacity-100 transform rotate-180' : 'opacity-0','' ]" src="https://ouch-cdn2.icons8.com/kVKVp7r2c1c-eRk13aOpjWNgwD0gPF2nqYS_xiJ5Gzg/rs:fit:256:259/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODAy/L2UzNDhiOGRlLTI0/YWYtNGNmYy04MWUz/LTg4OTkzZmEzYjU4/Mi5wbmc.png" alt="earth">
    <img class="absolute w-12 top-16 right-16 filter brightness-75 transition-all duration-1000" :class="[isDarkMode ? 'opacity-100 transform rotate-180 delay-150' : 'opacity-0','' ]" src="https://ouch-cdn2.icons8.com/wHzcQ-efJeDn9QAoNSHnHRvPrSHowUd0JwgRmiAkaWg/rs:fit:256:144/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzg3/L2VkZDYxNzgxLTM3/Y2QtNDkxYi1hNmIx/LTk0NTliZGNlMTkx/Zi5wbmc.png" alt="saturn">
  </section>
</template>

<script>
export default {
  data(){
    return {
      isDarkMode : true,
      activeText : 'text-gray-50 ',
      inacativeText : 'text-gray-400 cursor-pointer hover:text-gray-100',
    }
  },
  methods : {
    toggleDarkMode(isDarkMode = true){

      this.isDarkMode = isDarkMode;
    }
  },
  computed : {
    
  }
}
</script>

<style scoped>

.neon {
  border-radius: 50%;
  background-color: #fff;
  box-shadow:
    0 0 7px 3px #fff,  /* inner white */
    0 0 12px 8px #f0f, /* middle magenta */
    0 0 30px 22px #0ff; /* outer cyan */
}


</style>