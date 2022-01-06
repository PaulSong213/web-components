<template>
  <section class='flex flex-col h-screen justify-center bg-emerald-300 bg-gradient-to-b from-green-200 via-emerald-300 to-emerald-400 px-2'>
    <div class='mx-auto w-full max-w-xs rounded-lg bg-green-50 bg-opacity-70 backdrop-blur-sm h-96 shadow-xl flex flex-col justify-between relative shadow-emerald-400/50 overflow-hidden'> 
      <div class="grid grid-cols-3 grid-rows-4 h-[85%] p-2 grid-flow-col">
        <div  v-for="(item,index) in items" :key="index" @click="moreInfoIndex = index" @mouseleave="moreInfoIndex = -1"  class="bg-emerald-200 h-full w-full bg-opacity-0 hover:bg-opacity-100 active:bg-opacity-80 cursor-pointer transition-all rounded-md p-2 flex flex-col space-y-0.5 justify-center select-none relative group">
          <div class="shrink text-teal-400 text-5xl w-max mx-auto h-max  leading-3">
            <ion-icon :name="item.icon"></ion-icon>
          </div>
          <div class="shrink-0 w-full">
            <h6 class="text-green-800 font-semibold text-xs text-center w-full">
              {{item.name}}
            </h6>
          </div>
          <div v-if="moreInfoIndex === index" class="w-max bg-green-50 rounded-md border border-green-300 absolute left-full top-0 z-20 text-xs">
            <h6 @click="openItems = item.childs" class="bg-green-300 bg-opacity-0 hover:bg-opacity-80 cursor-pointer text-green-800 px-1 py-0.5">Open</h6>
            <h6 class="bg-green-300 bg-opacity-0 hover:bg-opacity-80 cursor-pointer text-green-800 px-1 py-0.5">Open in new tab</h6>
            <h6 class="bg-green-300 bg-opacity-0 hover:bg-opacity-80 cursor-pointer text-green-800 px-1 py-0.5">Copy Url</h6>
          </div>
        </div>
      </div>
      <div class="shrink-0 bg-white bg-opacity-20 px-2 p-1 h-[13%]">
        <div class=" bg-opacity-50  w-max p-1 rounded-lg select-none my-auto">
          <img class="h-8 my-auto" src="https://img.icons8.com/dusk/344/26e07f/windows-logo.png" alt="">
        </div>
      </div>
      <transition name="fade">
      <section v-if="openItems.length > 0" class="w-10/12 h-64 bg-green-50 absolute z-30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-md border border-green-400">
        <div class="text-green-400 flex justify-end p-1">
          <div @click="openItems = []" class="rounded-full bg-green-200 w-5 h-5 flex bg-opacity-0 hover:bg-opacity-100 cursor-pointer active:bg-opacity-80">
            <ion-icon class="m-auto" name="close"></ion-icon>
          </div>
        </div>
        <div class="h-full grid grid-cols-3 grid-rows-3 p-0.5">
          <div  v-for="(item,index) in openItems" :key="index"   class="bg-emerald-200 h-full w-full bg-opacity-0 hover:bg-opacity-100 active:bg-opacity-80 cursor-pointer transition-all rounded-md p-2 flex flex-col space-y-2 justify-center select-none relative group">
          
            <div class=" text-teal-400  w-full mx-auto h-12   rounded-md overflow-hidden">
              <img class="w-full h-14 " :src="item.image" alt="">
            </div>
            <div class="shrink-0 w-full">
              <h6 class="text-green-800 font-semibold text-[0.60rem]  text-center w-full leading-none">
                {{item.name}}
              </h6>
            </div>
          </div>
        </div>
      </section>
      </transition>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      moreInfoIndex : -1,
      openItems : [],
      items : [
        {
          name : "Projects",
          icon : "folder",
          childs : [
            {
              image : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnNpdGUlMjBkYXNoYm9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
              name : "Website Analytics"
            },
            {
              image : "https://media.istockphoto.com/photos/adaptive-and-responsive-web-design-concept-showing-sample-website-on-picture-id1301151581?b=1&k=20&m=1301151581&s=170667a&w=0&h=zYikz0ajSyA3ZR7h5vbjuLkVwe_efU50t7qCwnEObjE=",
              name : "E-commerce"
            },
            {
              image : "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
              name : "Netflix Clone"
            },
            {
              image : "https://media.istockphoto.com/photos/the-more-you-know-the-more-your-business-grows-picture-id1292991881?b=1&k=20&m=1292991881&s=170667a&w=0&h=5QfHORbgcqTFyHbRp7L83YlVF-U5Mt-AsWXX2zBtOZ8=",
              name : "Landing Page"
            },
          ]
        },
        {
          name : "Skills",
          icon : "folder",
          childs : [
            {
              image : "https://media.istockphoto.com/photos/digital-marketing-concept-online-advertisement-picture-id1284549946?b=1&k=20&m=1284549946&s=170667a&w=0&h=DaMSS8u0nwYARehKE5DoEdjTPy96UQJ_B3LMRWnhBUY=",
              name : "Web Developments"
            },
            {
              image : "https://media.istockphoto.com/photos/software-developer-freelancer-working-at-home-picture-id1174690086?b=1&k=20&m=1174690086&s=170667a&w=0&h=I3CKuEbE3cDOKh1PyM5WvGDasAkaknMdjxidBiVNgEk=",
              name : "Mobile Development"
            },
            {
              image : "https://images.unsplash.com/photo-1561469372-eb082b4f8f44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2t0b3AlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
              name : "Windows Apps"
            },
          ]
        },
        {
          name : "Contacts",
          icon : "folder",
          childs : [
            {
              image : "https://media.istockphoto.com/photos/cyber-security-smart-devices-cloud-computing-data-breach-picture-id1291541351?b=1&k=20&m=1291541351&s=170667a&w=0&h=zPw30Ej3O-PaudBHQepvZnWB1UV55ZzpVc71-RzEAl0=",
              name : "Email"
            },
            {
              image : "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
              name : "Github"
            },
            {
              image : "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
              name : "Linkedin"
            },
          ]
        },
        
      ]
    }
  },
  methods: {

  },
}

</script>

<style>

</style>