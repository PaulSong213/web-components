<template>
  <section class='flex flex-col h-screen justify-center bg-sky-500 bg-gradient-to-br from-sky-500 to-green-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-slate-200  h-64 shadow-xl  justify-between relative grid grid-cols-12'>
      <div class="col-span-3 sm:col-span-5 flex flex-col py-5 px-1 sm:p-10 space-y-2 h-60 overflow-auto">
        <button v-for="(alert,index) in alertTypes " :key="index" @click="addNewAlert(alert)" class=" hover:bg-opacity-80 active:bg-opacity-100 transition-all rounded-md mx-auto py-2 w-16 sm:w-20 text-white font-medium text-xs select-none" :class="[alert.buttonColor]" >
          {{alert.name}}
        </button>
      </div>
      <transition-group tag="div" name="list" class="col-span-9 sm:col-span-7 relative flex-col-reverse gap-2 h-60 overflow-hidden flex pt-10 pl-3">
        <div v-for="(alert,index) in activeAlerts " :key="index" @click="delete this.activeAlerts[index]"  class="h-20 w-56 rounded-md border-l-4  flex px-2 gap-2 hover:scale-105  select-none transition-all cursor-pointer relative flex-shrink-0" :class="[alert.bgColor, alert.border]" >
          <div class="h-14 w-14 rounded-lg text-5xl bg-white my-auto  flex flex-shrink-0" :class="[alert.iconColor]" >
            <ion-icon class="m-auto" :name="alert.icon"></ion-icon>
          </div>
          <div class="pt-3">
            <h5 class="text-white font-medium text-lg">{{alert.name}} Alert</h5>
            <p class="text-[9px] text-slate-100">Lorem ipsum dolor sit lorem ipsum dolor sit </p>
          </div>
          <div class="h-px rounded-full w-full absolute bottom-1 bg-slate-300 left-0 animate-width"></div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      alertIndex : 10,
      alertTypes : {
        "success":{
          name : "Success",
          buttonColor : "bg-green-700",
          icon : "checkmark-done",
          border : "border-green-700",
          iconColor : "text-green-700",
          bgColor : "bg-green-600",
        },
        "error":{
          name : "Error",
          buttonColor : "bg-red-700",
          icon : "close-outline",
          border : "border-red-700",
          iconColor : "text-red-700",
          bgColor : "bg-red-600",
        },
        "warning":{
          name : "Warning",
          buttonColor : "bg-amber-600",
          icon : "alert-outline",
          border : "border-amber-700",
          iconColor : "text-amber-700",
          bgColor : "bg-amber-600",
        },
        "info":{
          name : "Info",
          buttonColor : "bg-cyan-600",
          icon : "information-outline",
          border : "border-cyan-700",
          iconColor : "text-cyan-700",
          bgColor : "bg-cyan-600",
        },
      },
      activeAlerts : {
      }
    }
  },
  methods: {
    addNewAlert(alert){
      let index = this.alertIndex;
      this.activeAlerts[index] = alert;
      setTimeout(() => {
        if(this.activeAlerts[index])delete this.activeAlerts[index];
      }, 4000);
      this.alertIndex++;
    }
  },
}

</script>

<style>
.animate-width {
  animation: width 4000ms infinite linear;
}

@keyframes width {
  from {
    width : 100%;
  }
  to {
    width : 0%;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 300ms linear;
}

.list-leave-to {
  opacity: 0;
  height: 0;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
</style>