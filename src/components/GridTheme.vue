<template>
  <section class="h-screen bg-purple-900  bg-gradient-to-br from-orange-400 via-pink-400 to-purple-300 flex flex-col justify-center p-4">

    <div class="bg-black w-full max-w-xl rounded-sm mx-auto p-5 text-white h-full  max-h-96 overflow-hidden flex ">
      <div class="grid grid-cols-12 w-full overflow-hidden">
        <div class="row-start-2 md:row-start-1 col-span-12 md:col-span-8 border-l border-t border-b border-zinc-200 flex justify-start flex-row-reverse">

          <div v-for="(team,index) in teams" :key="index" class="border border-l border-zinc-200 h-full flex overflow-hidden transition-all">
            <div @click="currentOpenedIndex = index" class="p-0.5 md:p-2 font-black text-xs flex flex-col justify-between h-full transition-all select-none" :class="[index !== currentOpenedIndex ? 'hover:bg-amber-200 hover:text-black  active:bg-amber-300 w-14 cursor-pointer' : '','' ]">
              <h6>0{{(index + 1)}}</h6>
              <h6 v-if="index !== currentOpenedIndex" class="vertical-writing tracking-widest">{{team.name}}</h6>
            </div>
            
            <transition name="shrink">
              <div v-if="index === currentOpenedIndex" class="pr-8 flex flex-col justify-center transition-all w-40 ">
                <div class="w-16 md:w-24 h-16 md:h-24 border-4 border-zinc-200 rounded-full overflow-hidden mx-auto">
                  <img class="min-h-full min-w-full object-cover aspect-square" :src="team.image" alt="">
                </div>
                <h6 class="my-4 text-center font-black text-yellow-300 md:whitespace-nowrap">{{team.position}}</h6>
              </div>
            </transition>

          </div>

        </div>
        <div class="col-span-12 md:col-span-4 py-4 pl-4 pr-0.5 border border-zinc-200 flex flex-col justify-between pt-16">
          <h6 class="text-4xl font-black tracking-widest font-shadow text-yellow-300 uppercase">{{teams[currentOpenedIndex].name}}</h6>
          <p class="text-xs h-14 overflow-clip">{{teams[currentOpenedIndex].description}}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      currentOpenedIndex : 0,
      teams : [
        {
          name : "Paul",
          position : "Team Lead",
          image : "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum illum laborum, quaerat perspiciatis sed voluptas excepturi facilis natus libero ipsam qui fuga reiciendis, tempore"
        },
        {
          name : "John",
          position : "Software Enginner",
          image : "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        },
        {
          name : "Jane",
          position : "Graphics Designer",
          image : "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eumLorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        },
        {
          name : "Doe",
          position : "Cloud Developer",
          image : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eumLorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum"
        }
      ]
    }
  }
}
</script>

<style scoped>
.vertical-writing
{
  writing-mode: vertical-lr;
}

.shrink-enter-active,
.shrink-leave-active {
  transition: all 300ms linear;
  display: relative;
}

.shrink-enter-from,
.shrink-leave-to {
  opacity: 0.5;
  width: 0;
}
</style>