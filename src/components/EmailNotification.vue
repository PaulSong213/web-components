<template>
  <section class='flex flex-col h-screen justify-center bg-green-400 bg-gradient-to-br from-teal-400 via-green-400 to-teal-400 px-2'>
    <div class="mx-auto flex flex-col -space-y-36 w-56 h-64  relative">
      <img class="absolute bottom-12" src="/mail-seal.png">
      <img class="shadow-xl shadow-blue-500/30 absolute z-50 bottom-0" src="/mail-body.png">
      <div v-for="(mail,index) in mails" :key="index" @click="openedMailIndex = index" class="border border-slate-500 w-52 left-1/2 -translate-x-1/2 rounded-md absolute px-4 py-1 space-y-3 transition-all duration-1000 hover:-translate-y-20 transform overflow-hidden group" :class="[archiveIndexes.includes(index) ? 'h-0' : 'h-64 ', '', deletedIndexes.includes(index) ? 'bottom-[5000px] rotate-90' : 'bottom-0 rotate-0', mail.bgClass  ]"  :style="{marginBottom: ( (index * - 5) + (5 * 5) )  + 'px',  }" > 
        <div class="relative overflow-hidden h-0 group-hover:h-8 transition-all duration-200">
          <div class="absolute w-full opacity-0 group-hover:opacity-100 flex justify-between transition-all duration-300">
            <button @click="archiveIndexes[archiveIndexes.length] = index" class="text-sm text-white h-8 w-8 bg-white bg-opacity-50 hover:bg-opacity-100  hover:text-green-600 transition-all backdrop-blur-sm rounded-full flex">
              <ion-icon class="pointer-events-none m-auto" name="archive"></ion-icon>
            </button>
            <button @click="deletedIndexes[deletedIndexes.length] = index"  class="text-sm text-white h-8 w-8 bg-white bg-opacity-50 hover:bg-opacity-100  hover:text-red-600 transition-all backdrop-blur-sm rounded-full flex">
              <ion-icon class="pointer-events-none m-auto" name="trash"></ion-icon>
            </button>
          </div>
        </div>
        <h1 class="font-bold text-white text-base line-clamp-2">
          {{mail.subject}}
        </h1>
        <div class="flex space-x-2 font-bold text-white text-sm">
          <div class="w-8 h-8 rounded-full overflow-hidden relative border-white/50 shadow-sm shadow-white/50">
            <img class="aspect-auto min-w-full min-h-full absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2" :src="mail.senderImage">
          </div>
          <div class="my-auto flex flex-col space-y-1">
            <h6 class="leading-none">{{mail.senderName}}</h6>
            <h6 class="text-[10px] leading-none opacity-75">January 26,2021</h6>
          </div>
        </div>
        <div class="transition-all duration-500 opacity-0 group-hover:opacity-100" >
          <p class="text-xs text-white w-5/6 ml-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit obcaecati debitis odit aliquid eum. Totam ducimus numquam amet a</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  data(){
    return {
      openedMailIndex : 0,
      archiveIndexes : [],
      deletedIndexes : [],
      mails : [
        {
          subject : 'Preregitration of New Courses',
          senderName : 'John Doe',
          senderImage : 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
          bgClass : 'bg-orange-500'
        },
        {
          subject : 'Microsoft Internship',
          senderName : 'Bill Gates',
          senderImage : 'https://images.unsplash.com/photo-1580128637411-80206ae868e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlsbCUyMGdhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
          bgClass : 'bg-green-700'
        },
        {
          subject : 'Random Meetings',
          senderName : 'Michael Joe',
          senderImage : 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
          bgClass : 'bg-emerald-600'
        },
        {
          subject : 'Thanksgiving Greetings',
          senderName : 'Jane Dance',
          senderImage : 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
          bgClass : 'bg-blue-500'
        },
        {
          subject : 'Preregitration of New Courses',
          senderName : 'Mark Zuck',
          senderImage : 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
          bgClass : 'bg-purple-500'
        },
      ]
    }
  },
  methods: {

  },
}

</script>

<style>
.line-clamp-2 {
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
}
</style>