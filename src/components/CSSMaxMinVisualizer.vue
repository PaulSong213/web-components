<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300  h-64 shadow-xl  relative grid grid-cols-2 overflow-hidden gap-5'>
      <div class="pt-4 pl-4 space-y-4">
        <h6 class="font-semibold text-xl text-center leading-5">CSS min & max <br/> Visualizer</h6>
        <div class="pr-4 h-40 overflow-auto small-scroll">
          <button  v-for="(display,index) in displays " :key="index" @click="selectedIndex = index" class="font-medium  p-1 rounded-full hover:shadow-sm w-full transition-all flex space-x-2 justify-end" >
            <label :for="index">{{display.name}}</label>
            <input v-model="display.isAdded" :id="index" class="accent-red-900 mt-1" type="checkbox">
          </button>
        </div>
      </div>
      <div class="h-full flex flex-col justify-center pl-2 pr-16 my-auto relative">
        <div class="bg-red-900 transition-all duration-500 absolute overflow-hidden" :class="[minHeight,maxHeight,height,minWidth,maxWidth,width]" ref="boxModel">
          <div class="flex text-white flex-col space-y-1 absolute left-1 top-1/2 -translate-y-1/2">
            <ion-icon name="arrow-up-outline"></ion-icon>
            <h6 class="text-sm font-bold">{{boxHeight}}</h6>
            <ion-icon name="arrow-down-outline"></ion-icon>
          </div>
          <div class="flex absolute text-white space-x-1  -bottom-1 left-1/2 -translate-x-1/2">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <h6 class="text-sm font-bold">{{boxWidth}}</h6>
            <ion-icon name="arrow-forward-outline"></ion-icon>
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
      test : 0,
      boxHeight : '0',
      boxWidth : '100%',
      displays : {
        minHeight : {
          name : 'min-height: 60px',
          class : 'min-h-[60px]',
          callbackClass : 'min-h-[0px]',
          isAdded : false
        },
        height : {
          name : 'height: 110px',
          class : 'h-[110px]',
          callbackClass : 'h-[0px]',
          isAdded : false
        },
        maxHeight : {
          name : 'max-height: 90px',
          class : 'max-h-[90px]',
          callbackClass : 'max-h-[1000px]',
          isAdded : false
        },
        minWidth : {
          name : 'min-width: 140px',
          class : 'min-w-[140px]',
          callbackClass : 'min-w-[100px]',
          isAdded : false
        },
        width : {
          name : 'width: 190px',
          class : 'w-[190px]',
          callbackClass : 'w-[100px]',
          isAdded : false
        },
        maxWidth : {
          name : 'max-width: 170px',
          class : 'max-w-[170px]',
          callbackClass : 'max-w-[1000px]',
          isAdded : false
        },
      },
    }
  },
  computed : {
    minHeight(){
      let index = ['minHeight'];
      if(this.displays[index].isAdded)return this.displays[index].class;
      return this.displays[index].callbackClass;
    },
    height(){
      let index = ['height'];
      if(this.displays[index].isAdded)return this.displays[index].class;
      return this.displays[index].callbackClass;
    },
    maxHeight(){
      let index = ['maxHeight'];
      if(this.displays[index].isAdded)return this.displays[index].class;
      return this.displays[index].callbackClass;
    },
    maxWidth(){
      let index = ['maxWidth'];
      if(this.displays[index].isAdded)return this.displays[index].class;
      return this.displays[index].callbackClass;
    },
    width(){
      let index = ['width'];
      if(this.displays[index].isAdded)return this.displays[index].class;
      return this.displays[index].callbackClass;
    },
    minWidth(){
      let index = ['minWidth'];
      if(this.displays[index].isAdded)return this.displays[index].class;
      return this.displays[index].callbackClass;
    },
    
  },
  watch : {
    height(){
      this.test++;
    },
    minHeight(){
      this.test++;
    },
    maxHeight(){
      this.test++;
    },
    width(){
      this.test++;
    },
    minWidth(){
      this.test++;
    },
    maxWidth(){
      this.test++;
    },
    test() {
      if(!this.$refs.boxModel)return;
      setTimeout(() => {
        this.boxHeight = this.$refs.boxModel.offsetHeight + 'px';
        if(!this.displays.width.isAdded && !this.displays.minWidth.isAdded){
        this.boxWidth = '100%';
        }else{
          this.boxWidth = this.$refs.boxModel.offsetWidth + 'px';
        }
      }, 500);
    }
  }
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