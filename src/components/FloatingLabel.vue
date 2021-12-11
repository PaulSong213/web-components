<template>
  <section class="flex flex-col justify-center h-screen bg-rose-500 bg-gradient-to-br from-red-500 via-rose-500 to-red-500">
    <div class="bg-white w-full max-w-md py-4 px-8 h-44 rounded-lg mx-auto flex flex-col justify-center">
      <h6 class="text-rose-500 font-bold mb-6 text-2xl">Sign up</h6>
      <div class="relative">
        
        <input v-model="username" max="20" id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="john@doe.com" autocomplete="off" maxlength="20" />

        <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-900 peer-focus:text-sm">
          Username
        </label>

        <label class="absolute right-0 -top-3.5 text-transparent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-transparent peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-900 peer-focus:text-sm ">
          {{usernameLength}}/20
        </label>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      username : ""
    }
  },
  computed : {
    usernameLength(){
      return this.username.length;
    }
  } 
}
</script>

<style>

</style>