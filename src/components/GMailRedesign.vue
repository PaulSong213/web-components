<template>
  <section class="min-h-screen flex flex-col justify-center bg-amber-200 bg-gradient-to-b from-slate-100 via-slate-200 to-amber-100">

    <div class="h-96 w-56 border-4 border-slate-900 rounded-2xl mx-auto shadow-lg px-3 py-4  bg-slate-00 space-y-5 flex flex-col relative">

      <div class="flex justify-between text-xl">
        <img class="h-5" src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" alt="Gmail Logo">
        <ion-icon name="menu"></ion-icon>
      </div>

      <div class="w-full bg-white rounded-full text-xs flex flex-col justify-end pl-5  px-0.5 relative pt-0.5">
        <ion-icon class="absolute left-1 text-gray-400 top-0.5" name="search"></ion-icon>
        <input v-model="searchQuery" class="bg-transparent outline-none text-xs" placeholder="Search" type="text" /> 
      </div>

      <div class="space-y-2 overflow-auto max-w-full small-scroll pr-0.5 pb-16">
        <div v-for="(mail,index) in resultMail" :key="index" class="bg-white rounded-md p-2 flex space-x-3 shadow-sm cursor-pointer transition-all hover:shadow-md transform active:scale-95 select-none">
          <div class="flex flex-col justify-center"> 
            <div class="w-8 h-8 overflow-hidden rounded-full flex-shrink-0">
              <img class="aspect-square" :src="mail.image" alt="">
            </div>
          </div>

          <div class="flex-grow whitespace-nowrap overflow-clip text-slate-700">
            <h1 class="text-[0.60rem] font-medium tracking-wide">{{mail.name}}</h1>
            <h6 class="text-[0.40rem] leading-[0rem]">{{mail.email}}</h6>
            <h6 class="text-[0.60rem] mt-1.5 truncate leading-none">
              {{mail.message}}
            </h6>
          </div>

          <div class="flex flex-col space-y-1">
            <h6 class="text-[0.40rem]">{{mail.time}}</h6>
            <div class="ml-auto w-3 h-3 bg-green-600 rounded-full text-white flex flex-col">
              <span class="block m-auto text-[0.50rem]">{{mail.count}}</span>
            </div>
          </div>

        </div>
      </div>

      <nav class="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full w-48 mx-auto grid grid-cols-5 shadow-md p-0.5 gap-0.5">

        <div v-for="(icon,index) in icons" :key="index"  class="flex flex-col justify-center hover:bg-gray-200 active:bg-opacity-80  rounded-md cursor-pointer transition-all text-md">
          <ion-icon class="m-auto" :name="icon.name" :class="[icon.class]" ></ion-icon>
        </div>

      </nav>

    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      searchQuery : "",
      mails : [
        {
          image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0UNyaimfymGVCzTubncCuYc25AcGf_oHzA&usqp=CAU",
          name : "Elon Musk",
          message : "Being rich is hard.",
          email : "elonmusk@gmail.com",
          time : "12:50",
          count : 4
        },
        {
          image : "data:image/jpeg;base64,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",
          name : "Jeff Bezos",
          message : "10 lessons I learned from being rich",
          email : "bezos@gmail.com",
          time : "2:50",
          count : 7
        },
        {
          image : "data:image/jpeg;base64,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",
          name : "Rastaman",
          message : "Wachuganado",
          email : "Rastaman@gmail.com",
          time : "3:04",
          count : 9
        },
        {
          image : "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg",
          name : "Mr. Beast",
          message : "Subscribe to win $1000",
          email : "Beast@gmail.com",
          time : "3:04",
          count : 1
        },
        {
          image : "https://images.english.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg",
          name : "Bill Gate",
          message : "Books I read to be rich",
          email : "billGates@gmail.com",
          time : "3:04",
          count : 7
        },
        
        
        
      ],
      icons : [
        {
          name : "flame",
          class : "text-red-500"
        },
        {
          name : "people-outline",
          class : ""
        },
        {
          name : "add-circle-outline",
          class : "text-2xl"
        },
        {
          name : "pricetag-outline",
          class : "transform -rotate-90"
        },
        {
          name : "logo-facebook",
          class : "text-violet-700"
        }
      ]
    }
  },
  computed: {
    resultMail(){
      if(this.searchQuery){
      return this.mails.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }else{
        return this.mails;
      }
    }
  }
}
</script>

<style>
.small-scroll::-webkit-scrollbar {
  width: 3px;
  height: 3x;
  border-radius: 40px;
}

/* Track */
.small-scroll::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
  border-radius: 40px;

}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.2);
  border-radius: 40px;
}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.2);
}
</style>