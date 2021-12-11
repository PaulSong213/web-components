<template>
  <section class="bg-green-500 h-screen flex flex-col justify-center">

    <button  @click="sendMessage()" class="bg-white py-3 w-36 m-auto rounded-lg text-green-600 font-medium transition-all duration-300 shadow-md hover:bg-green-50 cursor-pointer hover:shadow-lg active:bg-green-100 transform active:scale-95 select-none flex justify-center" :class="buttonStatusClass" >
      
      <transition name="fade">
        <div v-if="sendButtonStatus == 0" class="flex space-x-2">
          <h6>Submit</h6>
          <ion-icon class="mt-0.5" name="paper-plane"></ion-icon>
        </div>
        <div v-else-if="sendButtonStatus == 1" class="flex space-x-2">
          <h6>Sending</h6>
          <div class="border-2 w-5 h-5 rounded-full border-loader animate-spin">
          </div>
        </div>
        <div v-else-if="sendButtonStatus == 2" class="flex space-x-2">
          <h6>Sent</h6>
          <ion-icon class="mt-0.5 font-black" name="checkmark"></ion-icon>
        </div>
      </transition>

    </button>

  </section>
</template>

<script>
export default {
  data(){
    return {
      sendButtonStatus : 0
    }
  },
  methods : {
    sendMessage(){
      if(this.sendButtonStatus !== 0)return;
      this.sendButtonStatus = 1;
      setInterval(()=>{
        this.sendButtonStatus = 2;
      }, 1000)
    }
  },
 
}
</script>

<style>
.border-loader {
  border-top-color: #10B981;
  border-left-color: #10B981;

}
</style>