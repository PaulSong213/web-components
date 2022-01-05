<template>
  <section class='flex flex-col h-screen justify-center bg-amber-200 px-2'>
    <div  class='mx-auto w-full max-w-md rounded-sm bg-orange-500 bg-[url(https://images.unsplash.com/photo-1640102953836-5651f5d6b240)] bg-cover  h-64 shadow-xl flex justify-between shadow-orange-400/50 relative overflow-hidden'>
      <div class=" text-xl absolute top-3 left-3 z-30" :class="[isLoggingIn ? 'text-white' : 'text-orange-300','']">
        <ion-icon name="rocket"></ion-icon>
      </div>
      <div class="opacity-50 text-xl font-thin absolute top-3 right-3 z-30" :class="[!isLoggingIn ? 'text-white' : 'text-orange-300','']">
        <ion-icon name="close"></ion-icon>
      </div>
      <div class="w-[50.5%] h-[101%] bg-orange-300 bg-opacity-80 backdrop-blur-md absolute z-20 transition-all ease-linear duration-500 transform  bottom-0 px-4 pt-8 flex flex-col space-y-4" :class="[isLoggingIn ? 'left-0' : 'translate-x-full','']">
        <h6 class="text-center text-sm  font-black text-orange-800 uppercase">
          Trip to Mars
        </h6>
        <div v-for="(input,index) in currentForm.inputs" :key="index">
          <input class="w-full rounded-sm text-xs text-orange-900  outline-none bg-transparent border-b-2 border-amber-700 placeholder-amber-700" :type="input.type" :placeholder="input.label">
        </div>
        <div>
          <button class="bg-orange-700 rounded-full text-orange-200 text-xs py-2 px-8 font-bold block mt-1 mx-auto hover:bg-opacity-80 active:bg-opacity-100 transition-all">
            {{currentForm.name}}
          </button>
        </div>
      </div>
      <div  class="w-[50.5%] h-[16.1rem] absolute z-10 transition-all duration-700 transform  bottom-0 ease-out" :class="[!isLoggingIn ? 'left-0' : 'translate-x-full','']">
        <div class="flex flex-col justify-center text-orange-200 h-full">
          <h6 class="mx-auto font-black text-xl">
            {{switchForm.label}}
          </h6>
          <button @click="isLoggingIn = !isLoggingIn" class="mx-auto border border-white rounded-full bg-white text-orange-800 font-bold my-1 text-xs py-1 px-2 hover:bg-orange-200 transition-all">
            {{switchForm.name}}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      isLoggingIn : true,
    }
  },
  methods: {

  },
  computed : {
    switchForm(){
      let form = {
        name : "Log in",
        label : "Have an account?"
      }

      if(this.isLoggingIn){
        form.name = "Sign up";
        form.label = "Create account"
      }

      return form;
    },
    currentForm(){
      let form = {
        name : "Log in",
        inputs : [
          {
            type : "email",
            label : "Enter your email"
          },
          {
            type : "password",
            label : "Enter your password"
          },
          
        ]
      }

      if(!this.isLoggingIn){
        form.name = "Sign up";
        form.inputs = [
          {
            type : "email",
            label : "Enter your email"
          },
          {
            type : "password",
            label : "Enter your password"
          },
          {
            type : "password",
            label : "Confirm password"
          },
          
        ]
      }

      return form;
    },
  }
}

</script>

<style>

</style>