<template>
  <section class='flex flex-col h-screen justify-center bg-purple-400 px-2'>
    <div @click="isChoosing = !isChoosing" class="w-40 h-16 bg-slate-700 rounded-full mx-auto relative shadow-md shadow-slate-700/50 bg-opacity-80 select-none" :class="[share.bgClass, socials.length > 0 ? 'cursor-pointer': '','']">
      <div  class="w-20 h-20  rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 shadow-sm shadow-slate-800/50 flex text-6xl text-white transition-all duration-1000 z-20" :class="[isShared ? 'translate-x-full' : '','', share.bgClass  ]" >
        <ion-icon class="m-auto pointer-events-none" :name="share.icon"></ion-icon>
        <transition name="fade-top">
          <div v-if="isChoosing && socials.length > 0" class="w-28 h-12 bg-slate-600 absolute rounded-full transform -translate-y-full -top-2 left-1/2 -translate-x-1/2 text-2xl overflow-hidden flex justify-between -space-x-0.5">
            <div  v-for="(social,index) in socials" :key="index"  @click="shareSocial(index)" class="h-full  flex w-full hover:bg-opacity-80" :class="[social.bgClass]" >
              <ion-icon class="m-auto pointer-events-none" :name="social.icon"></ion-icon>
            </div>
          </div>
        </transition>
      </div>
      <div  class="absolute w-max transform -translate-y-1/2  px-5 text-md overflow-hidden flex justify-between left-0  text-white top-1/2  font-black transition-all duration-1000 z-10" :class="[!isShared ? 'left-full -translate-x-full' : '','']"  >
        {{share.likes}}
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      share : {
        likes : "",
        icon : "share-social",
        bgClass : "bg-slate-600"
      },
      isChoosing : false,
      isShared : false,
      socials : [
        {
          icon : "logo-facebook",
          bgClass : "bg-blue-600",
          likes : "22.3k"
        },
        {
          icon : "logo-twitter",
          bgClass : "bg-blue-400",
          likes : "133.4k"
        },
        {
          icon : "logo-tiktok",
          bgClass : "bg-slate-900",
          likes : "222.3k"
        },
        
      ]
    }
  },
  methods: {
    shareSocial(index){
      this.share.likes = this.socials[index].likes;
      this.share.icon = this.socials[index].icon;
      this.share.bgClass = this.socials[index].bgClass;
      this.isShared = !this.isShared;
      this.socials.splice(index, 1);
    }
  },
}

</script>

<style>
.fade-top-enter-active,
.fade-top-leave-active {
  transition: all 300ms linear;
}

.fade-top-enter-from,
.fade-top-leave-to {
    opacity: 0;
    margin-top: 10px;   
    
}

</style>