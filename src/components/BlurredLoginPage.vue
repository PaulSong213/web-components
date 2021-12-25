<template>
  <section class="h-screen bg-gray-200 overflow-hidden" >
  <div class="h-full flex flex-col justify-center p-4 bg-forest animate-zoom max-w-screen overflow-hidden transition-all transform duration-1000" :class="[isLoggedIn ? 'scale-125 ' : '','' ]" >

    <h1 v-if="isLoggedIn" class="absolute text-white text-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Logging in...</h1>
      
    <transition name="shrink">
    <div v-if="!isLoggedIn" class="w-full max-w-md mx-auto  rounded-md shadow-md bg-white backdrop-blur-sm bg-opacity-75 px-4 py-8 overflow-hidden h-72">

      <h1 class="text-center text-2xl font-black text-emerald-900 mb-6">Welcome Back</h1>
      
      <div v-for="(input,index) in inputs" :key="index" class="relative my-6 max-w-xs mx-auto">
        
        <input v-model="username" max="20" id="email" name="email" :type="input.type" class="peer h-10 w-full border-b-2 border-gray-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-700 bg-transparent" placeholder="john@doe.com" autocomplete="off" maxlength="20" />

        <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-800 peer-focus:text-sm">
          {{input.name}}
        </label>

      </div>

      <div class="w-full max-w-xs mx-auto">
        <button @click="isLoggedIn = true"   class="w-full mx-auto bg-emerald-600 hover:bg-opacity-90 active:bg-opacity-100 text-slate-200 p-2 transition-all">
          Log in
        </button>
      </div>

    </div>
    </transition>

  </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      isLoggedIn : false,
      inputs : [
        { 
          name : "Username",
          type : "text"
        },
        { 
          name : "Password",
          type : "password"
        }
      ]
    }
  }
}
</script>

<style scoped>

  .bg-forest {
    background-image: url('https://cdna.artstation.com/p/assets/images/images/033/738/670/original/ben-spensley-vv2.gif?1610450377');
  }

  .shrink-enter-active,
  .shrink-leave-active {
    transition: all 400ms linear;
  }

  .shrink-enter-from,
  .shrink-leave-to {
    height: 0;
    opacity: 0;
  }

</style>