<template>
  <section class='flex flex-col pt-20 space-y-20 h-full min-h-screen bg-[#6FEE1E] px-2 overflow-hidden'>
    <div class="bg-white w-5/6 sm:w-[28rem] rounded-md mx-auto py-4 px-2 gap-4  grid grid-col-2 sm:grid-cols-12">
      <div class="flex flex-col space-y-2 col-span-8 row-start-2 sm:row-start-1">
        <div class="flex space-x-4 ml-auto">
          <label class="text-purple-700 text-right font-semibold text-xs my-auto w-max" for="name">Profile Image</label>
          <input class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 mx-auto" v-on:change="setProfile" accept="image/*" type='file' ref="imgInput" />
        </div>  
        <div class="flex space-x-4 ml-auto">
          <label class="text-purple-700 text-right font-semibold text-xs my-auto" for="name">Name</label>
          <input v-model="profileName" autocomplete="off" class="p-1 outline-purple-400 border rounded-md border-gray-400 w-full" type="text" id="name">
        </div>
        <div>
          <button @click="reset" class="bg-purple-700 hover:bg-opacity-80 active:bg-opacity-100 transition-all duration-500 font-bold p-2 rounded-md text-xs text-purple-100" type="reset">Clear</button>
        </div>
      </div>
      <div class="col-span-4 text-slate-500 text-xs">
        Instruction:
        <br/>
        1. Fill up the form
        <br/>
        2. Start your own screen recorder
        <br/>
        3. Crop the video
        <br/>
        4. Erase the greenscreen
      </div>
    </div>
    <div class="w-full sm:w-[28rem] h-20 bg-white mx-auto rounded-2xl shadow-md flex justify-between px-4 transform">
      <div class="my-auto flex space-x-4">
        <div class="h-14 w-14 rounded-full bg-gray-300 my-auto relative overflow-hidden border border-slate-400">
          <img class="absolute object-cover min-w-full min-h-full" :src="profileImage" >
        </div>
        <div class="my-auto text-lg sm:text-xl font-bold w-32 sm:w-48 h-20 overflow-clip flex text-slate-800">
          <h6 class="my-auto leading-5">{{profileName}}</h6>
        </div>
      </div>
      <div class="my-auto flex space-x-2">
        <button @click="isSubrcibed = !isSubrcibed" class=" text-white p-2 text-sm rounded-md font-bold uppercase transition-all duration-500" :class="[isSubrcibed ? 'bg-slate-800' : 'bg-red-600' , '' ]">
          <h6 v-if="!isSubrcibed">Subscribe</h6>
          <h6 v-else>Subscribed</h6>
        </button>
        <button  @click="isNotified = !isNotified" class="text-2xl -mb-2  transition-all duration-500 overflow-hidden relative" :class="[isNotified ? 'text-slate-800' : 'text-slate-500' , '', isSubrcibed ? 'w-8' : 'w-0',''  ]">
          <div v-if="isNotified" class="text-sm absolute rotate-[60deg] top-1.5 right-1">
            <ion-icon name="wifi"></ion-icon>
          </div>
          <div v-if="isNotified" class="text-sm absolute rotate-[-60deg] top-1.5 left-1">
            <ion-icon name="wifi"></ion-icon>
          </div>
          <ion-icon class="pointer-events-none" name="notifications"></ion-icon>
        </button>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  data(){
    return {
      profileImage : '',
      profileName : '',
      isSubrcibed : false,
      isNotified : false
    }
  },
  methods: {
    reset(){
      this.profileName = '';
      this.profileImage = '';
      this.$refs.imgInput.value = "";
      this.isSubrcibed = false;
    },
    setProfile(){
      const file = this.$refs.imgInput.files[0];
      if (file) {
        this.profileImage = URL.createObjectURL(file)
      }
    }
  },
  watch : {
    isSubrcibed(){
      this.isNotified = false
    }
  }
}

</script>

<style>

</style>