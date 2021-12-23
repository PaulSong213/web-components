<template>
  <section class="h-screen bg-fuchsia-400 bg-gradient-to-br from-fuchsia-400 via-teal-300 to-teal-300 flex flex-col justify-center p-4">

    <div class="bg-white mx-auto w-full max-w-md rounded-md shadow-xl flex flex-col justify-center p-5 space-y-4">
      <div id="capture" class="w-[200px] h-[200px] mx-auto rounded-full my-10" :style="{backgroundColor : bgColor }" >
        <img :src=" icon " />
      </div>
      <div class="flex space-x-2 text-sm text-indigo-500 font-bold mx-auto">
        <label class="my-auto" for="bgColor">Background Color</label>
        <input v-model="bgColor" class="my-auto" type="color" id="bgColor" >
      </div>
      <div class="flex space-x-2 text-sm text-indigo-500 font-bold mx-auto">
        <label class="my-auto" for="bgColor">Birthday</label>
        <input class="text-indigo-900" v-model="seedDate" type="date" >
      </div>
    
    </div>

  </section>
</template>

<script>

export default {
  data(){
    return {
      seedDate : "",
      bgColor : "#ffffff",
    }
  },
 
  computed : {
    icon(){
      var seed = this.seedDate;
      if(!this.seedDate)seed = "webcomponent";
      return `https://avatars.dicebear.com/api/micah/${seed}.svg?size=400`
    }
  }
}
</script>

<style>

</style>