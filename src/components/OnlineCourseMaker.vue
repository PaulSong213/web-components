<template>
  <section class='flex flex-col h-screen justify-center bg-teal-400 bg-gradient-to-br from-teal-400 via-green-400 to-teal-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-xl bg-slate-100  h-64 shadow-xl flex justify-between relative shadow-green-400/50 px-5'>
      <div class="w-3/5 flex flex-col justify-center">
        <div class="w-full h-28 bg-gray-500 rounded-xl shadow-sm p-3 flex justify-between " :style="{backgroundColor : inputs.bgColor.value}">
          <div class="text-white font-bold flex flex-col justify-between h-full">
            <div>
              <h1 class="text-2xl">{{inputs.courseName.value}}</h1>
              <h3 class="text-xs font-semibold">{{inputs.section.value}}</h3>
            </div>
            <div class="font-semibold text-xs">
              {{inputs.instructor.value}}
            </div>
          </div>
          <div>
            <img v-if="inputs.bgImage.value" class="h-full transform scale-150" :src="inputs.bgImage.value" alt="">
          </div>
        </div>
      </div>
      <div class="w-2/5 pl-4 grid grid-rows-5">
        <div class="h-full row-span-3 flex flex-col justify-end py-4">
          <div v-for="(input,index) in  inputs" :key="index" class="relative">
            <transition name="fade">
            <div v-if="input.index === currentInputIndex" class="relative">
              <input v-model="input.value" id="input" :type="input.type" class="text-xs peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600" placeholder="..." autocomplete="off" />
              <label for="input" class="absolute left-0 text-xs -top-2 text-gray-600  transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-teal-900 peer-focus:text-xs">
                {{input.label}}
              </label>
            </div>
            </transition>
          </div>
          <transition name="fade">
          <div v-if="currentInputIndex >= Object.keys(inputs).length" class="text-center text-green-600">
            <ion-icon class="text-4xl" name="checkmark-done-outline"></ion-icon>
            <h6>Course created</h6>
          </div>
          </transition>
        </div>
        <div class="h-full py-1 row-span-2 text-slate-700 text-xs">
          <div  v-if="currentInputIndex < Object.keys(inputs).length" class="flex justify-between">
            <button @click="nextInput(false)" class="hover:underline underline-offset-4">
              <span v-if="currentInputIndex > 0">Back</span>
            </button>
            <button @click="nextInput()" class="border-b border-green-300 text-green-700 font-bold px-0.5 hover:text-green-800">
              <span class="mr-1">Next</span>
              <ion-icon class="-mt-1" name="arrow-forward-outline"></ion-icon>
            </button>
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
      currentInputIndex : 0,
      inputs : {
        bgColor : {
          label : "Background Color",
          value : "#89918b",
          type : "color",
          index : 0
        },
        courseName : {
          label : "Course Name",
          value : "",
          type : "text",
          index : 1
        },
        section : {
          label : "Section",
          value : "",
          type : "text",
          index : 2
        },
        instructor : {
          label : "Instructor",
          value : "",
          type : "text",
          index : 3
        },
        bgImage : {
          label : "Background Image",
          value : "",
          type : "text",
          index : 4
        },
        
      }
    }
  },
  methods: {
    nextInput(isNext = true){
      if(isNext){
        this.currentInputIndex++;
      }
      else{
        if(this.currentInputIndex <= 0) return;
        this.currentInputIndex--;
      }

    }
  },
}

</script>

<style>

</style>