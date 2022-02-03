<template>
  <section class='flex flex-col h-screen justify-center bg-teal-500 bg-gradient-to-br from-teal-400 to-sky-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-sky-100  h-64 shadow-xl flex flex-col px-10 pt-8 relative space-y-3'>
      <div>
        <button @click="isCollapsed = !isCollapsed" class="w-12 h-6 rounded-full relative transition-all duration-700"  :class="[isCollapsed ? 'bg-sky-600 ' : 'bg-sky-300 ', '' ]" >
          <div class="w-6 h-6  rounded-full absolute  top-0 transition-all duration-700" :class="[isCollapsed ? 'left-full -translate-x-full bg-sky-700' : 'left-0 bg-sky-600', '' ]" ></div>
        </button>
      </div>
      <div class="h-24 w-full relative">
        <div class="space-x-1 space-y-1 relative overflow-hidden transition-all duration-300" :class="[!isCollapsed ? '' : 'h-0 w-0','h-24 w-full' ]" >
          <div v-for="(filter,index) in filters " :key="index" class="inline-block" @click="filters.splice(index, 1);"> 
            <div class="h-7 w-24 bg-sky-700 rounded-full flex text-white font-bold pt-0.5">
              <h6 class="my-auto text-xs text-center w-full">
                {{filter}}
              </h6>
              <button class="shrink-0 my-auto w-3 rounded-full flex mr-2 h-3 bg-sky-600 text-white">
                <ion-icon class="m-auto text-xs" name="close-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div class=" absolute top-0 transition-all duration-500 flex flex-col justify-center" :class="[isCollapsed ? 'opacity-100' : 'opacity-0' , '', isFilterListShowed ? 'h-auto w-5/6' : 'h-7 w-24','' ]" >
            <div @click="isFilterListShowed = !isFilterListShowed" class="my-auto flex z-20 text-white font-bold pt-0.5 cursor-pointer  bg-sky-700 rounded-full h-7 w-full" >
              <h6 class="my-auto text-xs text-center w-full uppercase">
              Filters
              </h6>
              <button class=" flex mr-2 text-sky-200 text-sm">
                <h6 v-if="!isFilterListShowed" class="m-auto font-black">
                    {{filters.length}}
                </h6>
                <h6 v-else class="m-auto font-black">
                  x
                </h6>
              </button>
            </div>
            <div class="absolute bg-white shadow-md top-3 z-10 w-full transition-all duration-500 rounded-xl  overflow-hidden text-sky-900 font-bold" :class="[isFilterListShowed ? 'h-44 px-3 pt-6 ' : 'h-0' ,'' ]">
              <div v-for="(filter,index) in filters " :key="index" class="rounded-full transition-all duration-500 hover:bg-sky-200 text-sm py-1 px-3 flex justify-between">
                <h6 >
                  {{filter}}
                </h6>
                <button @click="filters.splice(index, 1);">
                  <ion-icon class="m-auto text-xs" name="close-outline"></ion-icon>
                </button>
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
      isFilterListShowed : false,
      isCollapsed : false,
      filters : [
        'Men', 'Women','Kids','Vintage','Designer'
      ]
    }
  },
  methods: {

  },
}

</script>

<style>

</style>