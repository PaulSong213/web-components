<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300  h-64 shadow-xl  relative grid grid-cols-12 overflow-hidden gap-3'>
      <div class="pt-4 pl-4 space-y-4 col-span-5">
        <h6 class="font-semibold text-md text-center leading-5">CSS Pseudo Elements Visualizer</h6>
        <div class="px-4 h-44 overflow-auto small-scroll">
          <button  v-for="(display,index) in displays " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full shadow-sm w-full transition-all " :class="[index === selectedIndex ? 'bg-amber-400/60 cursor-default' : 'hover:bg-amber-400 active:bg-amber-400/60', '' ]">
            <h6 >{{display.name}}</h6>
          </button>
        </div>
      </div>
      <div class="h-full flex flex-col pb-12 justify-center my-auto relative col-span-7">
        <div class="flex space-x-1">
          <div v-for="(block,index) in blocks " :key="index" class="h-4  transform transition-all duration-1000 w-6 border-4" :class="[block.color, displays[selectedIndex]['selectedBlockIndexes'][index] ? '-translate-y-8 border-rose-900' : 'mb-0 border-transparent' , '' ]" >
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
      selectedIndex : 0,
      displays : [
        {
          name : ':first-child',
          selectedBlockIndexes : [ true , false , false , false , false , false , false , false , false ]
        },
        {
          name : ':first-of-type',
          selectedBlockIndexes : [ true , false , false , true , false , false , true , false , true ]
        },
        {
          name : ':last-child',
          selectedBlockIndexes : [ false , false , false , false , false , false , false , false , true ]
        },
        {
          name : ':last-of-type',
          selectedBlockIndexes : [ false , false , true , false , false , true , false , true , true ]
        },
        {
          name : ':nth-child(3)',
          selectedBlockIndexes : [ false , false , true , false , false , false , false , false , false ]
        },
        {
          name : ':nth-last-child(3)',
          selectedBlockIndexes : [ false , false , false , false , false , false , true , false , false ]
        },
        {
          name : ':nth-of-type(2)',
          selectedBlockIndexes : [ false , true , false , false , true , false , true , false , false ]
        },
        {
          name : ':nth-of-type(3)',
          selectedBlockIndexes : [ true , false , false , true , false , false , false , false , false ]
        },
        {
          name : ':only-of-type',
          selectedBlockIndexes : [ false , false , false , false , false , false , false , false , true ]
        },
      ],
      blocks : [
        {
          color : 'bg-green-700',
          isSelected : false,
        },
        {
          color : 'bg-green-700',
          isSelected : false,
        },
        {
          color : 'bg-green-700',
          isSelected : false,
        },
        {
          color : 'bg-cyan-700',
          isSelected : false,
        },
        {
          color : 'bg-cyan-700',
          isSelected : false,
        },
        {
          color : 'bg-cyan-700',
          isSelected : false,
        },
        {
          color : 'bg-purple-900',
          isSelected : false,
        },
        {
          color : 'bg-purple-900',
          isSelected : false,
        },
        {
          color : 'bg-pink-700',
          isSelected : false,
        },
      ]
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