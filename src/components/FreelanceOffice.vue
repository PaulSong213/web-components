<template>
  <section class='flex flex-col h-screen justify-center bg-teal-400 bg-gradient-to-tl from-slate-500  to-slate-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-gray-300  h-64 shadow-xl flex justify-between relative'>
      <div @click="selectedForm = 1" class="bg-cyan-800 h-full   transition-all duration-700 flex-grow flex flex-col justify-around group" :class="[selectedForm === 1 ? 'w-8/12' : 'hover:w-3/12 cursor-pointer hover:bg-opacity-90 w-0','' ]" > 
        <h1 class="text-cyan-300 font-black text-center mt-5 uppercase tracking-widest transform transition-all duration-1000"  :class="[selectedForm === 0 ? 'group-hover:scale-125' : '','',selectedForm === 2 ? '-rotate-90 -mr-10 mt-20' : 'mt-5',''  ]" >Corporate</h1> 
        <div class="flex w-full m-auto h-full">
          <div class="h-full flex">
            <img class="my-auto" :class="[selectedForm === 1 ? 'w-32 mr-auto' : 'm-auto','' ]" src="https://ouch-cdn2.icons8.com/dcBku86uZhZFyJbWfxHwKCFEqvVGNbXIEFs-QnyBo8A/rs:fit:256:192/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODUv/OTQ1OWM0N2MtMGUz/ZC00YzllLWFhY2Qt/MDA4ZTkyY2YxMTMy/LnN2Zw.png" alt="">
          </div>
          <div class="flex-grow overflow-hidden transition-all duration-700 space-y-2 overflow-y-auto small-scroll" :class="[selectedForm !== 1 ? 'w-0 h-0 opacity-0' : 'w-full h-52 py-3 p-4 ' , '' ]" >
            <div v-for="(input,index) in inputs.corporate" :key="index">
              <label class="text-white text-xs font-bold" :for="index">{{input.label}}</label>
              <input :id="index" class="bg-transparent outline-none border-white border rounded-md text-white text-sm py-1 px-2 w-full" :type="input.type">
            </div>
            <div>
              <button class="bg-white mt-3 text-xs text-cyan-900 font-black uppercase w-full rounded-md p-2 hover:bg-opacity-90">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div @click="selectedForm = 2" class="bg-cyan-500 h-full   transition-all duration-700 flex-grow flex flex-col group" :class="[selectedForm === 2 ? 'w-8/12' : 'hover:w-3/12 cursor-pointer hover:bg-opacity-90 w-0','' ]" > 
        <h1 class="text-cyan-900 font-black text-center uppercase tracking-widest transform transition-all duration-1000" :class="[selectedForm === 0 ? 'group-hover:scale-125' : '','',selectedForm === 1 ? 'rotate-90 -ml-10 mt-20' : 'mt-5',''  ]" >Freelance</h1> 
        <div class="flex w-full m-auto h-full">
          <div class="h-full flex">
            <img class="my-auto" :class="[selectedForm === 2 ? 'w-32 mr-auto' : 'm-auto','' ]" src="https://ouch-cdn2.icons8.com/KDXEMHU2SizLqCOd2Ohcu-lTtsaTTynQ_9p4h0lmVUE/rs:fit:256:144/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDgz/LzZjOWIwMDhlLWVl/MmMtNDhkYS05NmY5/LWRjNDI3YjAxMDYy/NC5zdmc.png" alt="">
          </div>
          <div class="flex-grow overflow-hidden transition-all duration-700  space-y-2 overflow-y-auto small-scroll" :class="[selectedForm !== 2 ? 'w-0 h-0 opacity-0' : 'w-full h-52 py-3 p-4' , '' ]" >
            <div v-for="(input,index) in inputs.freelance" :key="index">
              <label class="text-cyan-900 text-xs font-bold" :for="index">{{input.label}}</label>
              <input :id="index" class="bg-transparent outline-none border-cyan-900 border rounded-md text-cyan-900 text-sm py-1 px-2 w-full" :type="input.type">
            </div>
            <div>
              <button class="bg-cyan-900 mt-3 text-xs text-cyan-100 font-black uppercase w-full rounded-md p-2 hover:bg-opacity-90">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      selectedForm : 0,
      inputs : {
        corporate : [
          {
            type : 'text',
            label : 'Preferred site location'
          },
          {
            type : 'text',
            label : 'Your current employer'
          },
          {
            type : 'date',
            label : 'Start date'
          },
          
        ],
        freelance : [
          {
            type : 'text',
            label : 'Site/s you find client'
          },
          {
            type : 'number',
            label : 'Rate per hour'
          },
          {
            type : 'url',
            label : 'Portfolio Link'
          },
          
        ]
      }
    }
  },
  methods: {

  },
}

</script>

<style>
.small-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4x;
  border-radius: 100%;
}

/* Track */
.small-scroll::-webkit-scrollbar-track {
  background: rgba(252, 252, 252, 0.3);

}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgb(255, 255, 255);
}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(172, 172, 172);

}

</style>