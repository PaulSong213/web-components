<template>
  <section class="h-screen bg-purple-500 flex flex-col justify-center p-4">
    <div class="w-full mx-auto max-w-sm  p-6 rounded-md bg-gray-900 space-x-1 grid grid-cols-12 text-xl gap-1 relative overflow-hidden">
      <div class="col-span-1 text-left z-20" :class="[isPasswordShowed ? 'text-gray-600' : 'text-gray-400','']">
        <ion-icon class="my-auto align-middle"  name="lock-closed"></ion-icon>
      </div>
      <div class="col-span-10 pr-10 z-20">
        <input v-if="!isPasswordShowed" v-model="passwordValue" class="bg-transparent text-sm w-full leading-6 align-middle border-b-2 pl-1 outline-none active-border-blue-500 transition-all duration-500"  id="password" placeholder="Enter your password" :class="[isPasswordShowed ? 'text-black' : 'text-white','']" type="password">
        <input v-else v-model="passwordValue"  class="bg-transparent text-sm w-full leading-6 align-middle border-b-2 pl-1 outline-none active-border-blue-500 transition-all duration-500 placeholder-gray-700"  id="password" placeholder="Enter your password " :class="[isPasswordShowed ? 'text-black' : 'text-white','']" type="text" >
      </div>
      <div class="text-center col-span-1 text-xl">
        <div @click="isPasswordShowed = !isPasswordShowed" class="text-black bg-white rounded-full w-7 h-7 cursor-pointer transition-all z-20 relative transform hover:scale-125">
          <ion-icon v-if="!isPasswordShowed" class="my-auto align-middle -mt-1 leading-none z-30" name="eye"></ion-icon>
          <ion-icon v-else class="my-auto align-middle -mt-1 leading-none z-30" name="eye-off"></ion-icon>
        </div>
        <div class="absolute bg-white rounded-full z-10 transition-all  -mt-5 -mr-5 duration-1000" :class="[isPasswordShowed ? 'backdrop-toggle-open' : 'backdrop-toggle-close','']"></div>
      </div>
      
    </div>
  </section>  
</template>

<script>
export default {
  data(){
    return {
      isPasswordShowed : false,
      passwordValue : ''
    }
  },
}
</script>

<style scoped>

#password {
border-color: rgba(107, 114, 128, 1);
}
#password:focus {
  border-color: rgba(59, 130, 246, 1);
  border-bottom-width: 3px;
}

.backdrop-toggle-open {
  height: 200%;
  width: 200%;
  transform: translate(-50%,-50%);
}

.backdrop-toggle-close {
  height: 1rem;
  width: 1rem;
  transform: translate(0,0);
}



</style>