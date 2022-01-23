<template>
  <section class='flex flex-col h-screen justify-center bg-sky-300 bg-gradient-to-br from-teal-400 via-green-400 to-emerald-400 px-2'>
    <div class='mx-auto w-full max-w-sm rounded-md bg-slate-900  h-96 shadow-xl flex flex-col relative p-10 space-y-6'>
      <h6 class="text-sky-50 text-center w-full font-bold text-2xl">
        January 2022
      </h6>
      <div class="grid grid-cols-7 text-gray-500 gap-x-0 gap-y-1 text-center text-xs">
        <div class="select-none mb-2" v-for="(week,index) in weeks " :key="index" >
          {{week}}
        </div>
        <div v-for="gap in 6" :key="gap"></div>
        <div class="text-sky-100 select-none" v-for="(day,index) in 31 " :key="index" >
          <button @click="openNote(index)" class="rounded-full border transition-all h-8 w-8 flex justify-center mx-auto border-opacity-100 hover:border-opacity-100 active:bg-sky-900" :style="{borderColor : getColor(index)  }" >
            <h1 class="text-center text-xs m-auto">{{day}}</h1>
          </button>
        </div>
      </div>
    </div>
    <transition name="note-pop">
    <div v-if="addNote.isOpen" class="w-full max-w-sm h-72 bg-sky-900/50 backdrop-blur-sm absolute top-24 left-1/2 -translate-x-1/2 p-6 flex flex-col space-y-4 rounded-lg" >
      <h6 class="text-white font-black text-2xl">
        Jan {{addNote.day}} 2022 
      </h6>
      <div class="flex space-x-2">
        <textarea v-model="addNote.content" placeholder="Your note" class="h-36 rounded-md text-sky-900 font-bold p-2 outline-sky-400 w-11/12"  cols="50" rows="50"></textarea>
        <input v-model="addNote.color" type="color" class="rounded-sm">
      </div>
      <button @click="setNote" class="bg-sky-500 hover:bg-opacity-80 active:bg-opacity-100 transition-all shadow-md shadow-sky-800/50 rounded-md py-3 text-white w-max px-4 text-xs font-black uppercase">
        <span v-if="!(addNote.isUpdating)">Add note</span>
        <span v-else>Update note</span>
      </button>
    </div>
    </transition>
  </section>
</template>

<script>

export default {
  data(){
    return {
      test : "",
      addNote : {
        isOpen : false,
        content : "",
        color : "",
        day : 1,
        index : 0,
        isUpdating : false
      },
      weeks : ['Su','Mo','Tu','We','Th','Fr','Sa'],
      notes : {}
    }
  },
  methods: {
    getColor(index){
      if(this.notes[index])return this.notes[index].color;
      return 'rgba(255,255,255,0)';
    },
    openNote(index){
      this.addNote.day = index + 1;
      this.addNote.index = index;
      this.addNote.isOpen = true;
      if(this.notes[index]){
        this.addNote.content = this.notes[index].content;
        this.addNote.color = this.notes[index].color;
        this.addNote.isUpdating = true;
      }
    },
    closeNote(){
      this.addNote.isOpen = false;
      this.addNote.color = "";
      this.addNote.content = "";
      this.addNote.isUpdating = false;
    },
    setNote(){
      let content = this.addNote.content;
      let color = this.addNote.color;
      let index = this.addNote.index;
      if(!content)color = "rgba(0,0,0,0)";
      let note = {
            content : content,
            color : color
          }
      this.notes[index] = note;
      this.closeNote();    
    }
  },
}

</script>

<style scoped>
  .note-pop-enter-active,
  .note-pop-leave-active {
    transition: all 300ms ease-out;
  }

  .note-pop-enter-from,
  .note-pop-leave-to {
    opacity: 0.5;
    top: 0;
  }

</style>