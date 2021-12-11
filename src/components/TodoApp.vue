<template>
  <section class="h-screen bg-purple-400 bg-gradient-to-br from-pink-400 via-purple-400 to-pink-400 flex flex-col justify-center ">
    
    <div class="bg-zinc-50 flex items-center justify-center w-full max-w-md mx-auto h-96 overflow-hidden rounded-xl relative px-8">
      <div class="absolute w-full h-full z-10">
        <div class="relative w-full h-full">
          <div class="absolute top-24 left-24 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div class="absolute top-24 right-24 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute top-40 left-32 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div class="h-5/6 w-full z-20 space-y-4">
        <h1 class="text-purple-500 font-black text-2xl mb-8">TODO App</h1>
        
        <transition-group name="fade-right-todo">
          <div v-for="(todo,index) in todos " :key="index" class="p-5 bg-white bg-opacity-30 hover:bg-opacity-60 rounded-lg flex items-center justify-between space-x-4 group hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-lg flex p-2 text-zinc-200 text-2xl" :class="todo.bg">
              <ion-icon class="m-auto" :name="todo.icon"></ion-icon>
            </div>
            <div class="flex-1">
              <h6 class="text-slate-700 text-sm">{{todo.task}}</h6>
            </div>
            <div>
              <div @click="removeTodos(index)" class="border border-purple-400 text-purple-800 flex w-6 h-6 cursor-pointer rounded-sm opacity-40 trasntion-all group-hover:opacity-100  group hover:bg-purple-400 hover:text-white">
                <ion-icon class="m-auto opacity-0 group-hover:opacity-100 transition-all" name="checkmark-outline"></ion-icon>
              </div>
            </div>
          </div>
        </transition-group>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      todos : {
        "1" : {
          bg : "bg-rose-400",
          task : "Cook food",
          icon : "fast-food"
        },
        "2" : {
          bg : "bg-green-400",
          task : "Drink beer with friends",
          icon : "beer"
        },
        "3" : {
          bg : "bg-indigo-400",
          task : "Study python",
          icon : "desktop"
        },
        "4" : {
          bg : "bg-red-400",
          task : "Play basketball",
          icon : "basketball"
        },
      }
    }
  },
  methods : {
    removeTodos(index){
      delete this.todos[index];
    }
  }
}
</script>
<style scoped>
  .fade-right-todo-enter-active,
  .fade-right-todo-leave-active {
    transition: all 500ms ease-in-out;
  }

  .fade-right-todo-enter-from,
  .fade-right-todo-leave-to {
      opacity: 0;
      transform: translateX(100px); 
  }
</style>