<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-green-300  sm:h-64 p-2 shadow-xl  relative grid grid-cols-1 sm:grid-cols-12 overflow-hidden'>
      <div class="pt-4 pl-4 space-y-4 col-span-8 row-start-2 sm:row-start-1">
        <h6 class="font-semibold text-xl text-center leading-5">Javascript Events <br/> Visualizer</h6>
        <div class="h-40 overflow-auto small-scroll mx-auto w-max">
          <button  v-for="(display,index) in displays " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all flex text-md" :class="[index === selectedIndex ? 'bg-green-400/60 cursor-default ' : 'hover:bg-green-400 active:bg-green-400/60', '' ]">
            <h6 >{{display.name}}</h6>
            <h6>
              ="<span class="text-purple-600 italic">colorChange()</span>"
            </h6>
          </button>
        </div>
      </div>
      <section >
      <div class="h-full my-auto flex flex-col justify-center w-full mx-auto relative col-span-4">
        <div class="w-32 h-32 rounded-md mx-auto select-none transition-all duration-500 flex flex-col justify-center text-center text-white font-bold text-xs p-2" :class="[colors[colorIndex]]" id="boxModel" >
        </div>
      </div> 
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      info : '',
      colors : [
        'bg-emerald-900',
        'bg-blue-900',
        'bg-cyan-900',
        'bg-slate-900',
        'bg-purple-900',
      ],
      colorIndex : 0,
      selectedIndex : -1,
      displays : [
        {
          name : 'onclick',
          event : 'click',
          info : 'box is Clicked'
        },
        {
          name :  'onmouseover',
          event : 'mouseover',
          info : 'box is Mouseovered'
        },
        {
          name : 'onmouseout',
          event : 'mouseout',
          info : 'box is Mouseouted'
        },
        {
          name : 'onkeydown',
          event : 'keydown',
          info : ' is keydowned on keyboard'
        },
        {
          name : 'onkeyup',
          event : 'keyup',
          info : ' is keyuped on keyboard'
        }
      ]
    }
  },
  methods: {

  },
  watch : {
    selectedIndex(index){
        document.getElementById("boxModel").innerHTML = '';

      var old_element = document.getElementById("boxModel");
      var new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
      if(index < 0)return this.info = '';
      let event = this.displays[index].event;
      let doc = document;
      if(index <= 2)doc = document.getElementById("boxModel");
      doc.addEventListener(event, (e)=>{
        if(this.colorIndex < this.colors.length -1)this.colorIndex++
        else this.colorIndex = 0;
        let info = "";
        document.getElementById("boxModel").innerHTML = '';
        if(index <= 2)info = this.displays[index].info;
        else info = e.code + this.displays[index].info;
        document.getElementById("boxModel").append(info);
      });
    },
    colorIndex(index,prevIndex){
      document.getElementById("boxModel").classList.remove(this.colors[prevIndex]);
      document.getElementById("boxModel").classList.add(this.colors[index]);
    }
  }

}

</script>

<style>

.small-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
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