<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300  h-64 shadow-xl  relative grid grid-cols-12 overflow-hidden'>
      <div class="pt-4 pl-4 space-y-4 w-44 mx-auto col-span-6">
        <h6 class="font-semibold text-md text-center leading-5">
          {{title}}
        </h6>
        <div>
          <button  v-for="(attribute,index) in attributes " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full shadow-sm w-full transition-all flex justify-end space-x-1 ">
            <label class="text-sm" :for="index"> 
              {{attribute.name}}
            </label>
            <input v-model="attributes[index].isAdded" :id="index" class="m-auto accent-slate-900" type="checkbox">
          </button>
        </div>
      </div>
      <div class="h-full my-auto relative flex flex-col justify-center pr-1 col-span-6">
        <div class="border border-slate-700 h-36 relative">
          <div class="absolute z-10 h-full w-px bg-amber-50/80 left-1/2 -translate-x-1/2"></div>
          <div class="absolute z-10 w-full h-px bg-amber-50/80 top-1/2 -translate-y-1/2"></div>
          <div class="w-14 h-14 bg-red-900 absolute z-20 transition-all duration-1000" :class="[attributes.position.isAdded ? `${leftClass} ${topClass} ${translateXClass} ${translateYClass}`  : 'top-0 left-0 translate-x-0 translate-y-0','' ]" >
            <div class="relative h-px w-full bg-amber-200/50 transition-all duration-1000" :class="[attributes.translateY.isAdded ? attributes.translateY.class + ' top-1/2' : 'top-0','' ]" ></div>
            <div class="relative h-full w-px bg-amber-200/50 transition-all duration-1000" :class="[attributes.translateX.isAdded ? attributes.translateX.class + ' left-1/2' : 'left-0','' ]" ></div>
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
      title : 'Centering an absolute <div> in CSS Visualizer',
      selectedIndex : 0,
      attributes : {
        "position":{
          name : 'position:absolute',
          isAdded : false,
          class : 'absolute'
        },
        "left":{
          name : 'left:50%',
          isAdded : false,
          class : 'left-1/2'
        },
        "top":{
          name : 'top:50%',
          isAdded : false,
          class : 'top-1/2'
        },
        "translateY":{
          name : 'transform:translateY(-50%)',
          isAdded : false,
          class : '-translate-y-1/2'
        },
        "translateX":{
          name : 'transform:translateX(-50%)',
          isAdded : false,
          class : '-translate-x-1/2'
        },
      },
    }
  },
  computed : {
    leftClass(){
      if(this.attributes.left.isAdded)return this.attributes.left.class;
      return 'left-0';
    },
    topClass(){
      if(this.attributes.top.isAdded)return this.attributes.top.class;
      return 'top-0';
    },
    translateXClass(){
      if(this.attributes.translateX.isAdded)return this.attributes.translateX.class;
      return 'translate-x-0';
    },
    translateYClass(){
      if(this.attributes.translateY.isAdded)return this.attributes.translateY.class;
      return 'translate-y-0';
    },
    
  }
}

</script>

<style>
.test {
  
}
</style>