<template>
  <section class='flex flex-col h-screen justify-center bg-amber-200 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-slate-100  h-80 shadow-xl flex flex-col p-9 relative shadow-slate-500/50 overflow-hidden'>
      <div class="border-slate-800 border-l-2 pb-2 w-52 mx-auto  absolute left-1/2 -translate-x-1/2 transform transition-all duration-1000" :style="{top : notePosition + 'rem'}" >
        <div  class="flex space-x-2 -ml-2 text-slate-600 mb-4">
          <ion-icon class="text-sm mt-1" name="ellipse"></ion-icon>
          <input v-model="newNote" class="bg-transparent my-auto border-b-2 transition-all  shadow-none border-slate-500 focus:border-slate-900 outline-none text-slate-800 text-sm placeholder-slate-700" placeholder="Add new Note" type="text" id="-1" autocomplete="off" >
        </div>
        <transition-group name="list" tag="div">
        <div v-for="(note,index) in notes" :key="note" class="flex space-x-2 -ml-2 text-slate-600 pt-1 mb-4">
          <ion-icon class="text-sm" name="ellipse"></ion-icon>
          <input v-if="index === selectedIndex" :id="index" v-model="notes[index]" class="bg-transparent my-auto border-b-2 transition-all border-transparent shadow-none focus:border-slate-900 outline-none text-slate-800 text-sm" autofocus type="text"  />
          <input v-else class="bg-transparent my-auto border-b-2 transition-all border-transparent shadow-none outline-none text-slate-800 text-sm cursor-default" :value="notes[index]" type="text" readonly />
        </div>
        </transition-group>
      </div>
      <div class="border-2 border-slate-500 w-72 h-8 mx-auto flex justify-between">
        <div class="flex flex-col -space-y-1">
          <button @click="nextNote(false)" class="hover:bg-slate-300 active:bg-slate-400 rounded-md cursor-pointer transition-all w-4 h-4 text-slate-700">
            <ion-icon class="pointer-events-none" name="caret-up-outline"></ion-icon>
          </button>
          <button @click="nextNote(true)" class="hover:bg-slate-300 active:bg-slate-400 rounded-md cursor-pointer transition-all w-4 h-4 text-slate-700">
          <ion-icon class="pointer-events-none" name="caret-down-outline"></ion-icon>
          </button>
        </div>
        <div @click="addNote" class="my-auto h-5 w-5 hover:bg-slate-300 active:bg-slate-400 transition-all rounded-md text-slate-700 flex cursor-pointer">
          <ion-icon  v-if="selectedIndex === -1" class="m-auto" name="add"></ion-icon>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      selectedIndex : -1,
      newNote : '',
      notes : [
        'Buy a house',
        'Work Hard',
        'Play video games',
        'Hangout with friends'
      ]
    }
  },
  methods: {
    addNote(){
      if(!this.newNote)return;
      this.notes = [this.newNote].concat(this.notes);
      this.newNote = '';

    },
    nextNote(isNext = true){
      let maxIndex = this.notes.length - 1;
      if(isNext){
        if( this.selectedIndex < maxIndex )this.selectedIndex++;
        else this.selectedIndex = -1;
      }else{
        if( this.selectedIndex !== -1 )this.selectedIndex--;
        else this.selectedIndex = maxIndex;
      }
      setTimeout(() => {
        document.getElementById(this.selectedIndex).focus();
      }, 500);
    }
  },
  computed: {
    notePosition(){
      let basePosition = 2.5;
      let difference = this.selectedIndex - (-1);

      return basePosition - (basePosition * difference) - (difference / 10) ;
    }
  }
}

</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  height: 0;
}
</style>