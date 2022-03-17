<template>
  <section class='flex flex-col justify-center h-screen px-2 bg-purple-400 bg-gradient-to-br from-purple-400 to-orange-400'>
    <div class='relative flex flex-col justify-center w-full h-64 max-w-md mx-auto rounded-sm shadow-xl bg-stone-100'>
      <div class="flex flex-col gap-1 mx-auto scale-150 w-max">
        <label class="ml-1 font-mono text-xs text-purple-500" for="input">What is your favorite color?</label>
        <div class="flex gap-1">
          <div class="relative w-44">
            <input
              @focus="isInputFocused = true"
              @blur="isInputFocused = false"
              class="absolute z-20 h-8 p-1 text-sm transition-all duration-500 bg-transparent border border-purple-100 rounded-md shadow-xl outline-none w-44"
              :class="[ isInputFocused ? 'text-white' : 'text-purple-700','' ]"
              />
            <div class="absolute top-0 z-10 h-8 transition-all duration-700 bg-purple-500 rounded-md bg-gradient-to-r from-purple-500 via-purple-500 to-fuchsia-500"
            :class="[ isInputFocused ? 'w-44' : 'w-0','' ]" ></div>
          </div>
          <div class="relative">
            <button @click="isSumitted = true" class="flex items-center w-8 h-8 text-purple-500 bg-white rounded-md shadow-md">
              <ion-icon class="m-auto pointer-events-none" name="arrow-forward-outline"></ion-icon>
            </button>
            <div class="absolute top-0 flex items-center w-8 h-8 text-white transition-all duration-500 rounded-md bg-gradient-to-br from-purple-500 to-fuchsia-500" 
            :class="[ isSumitted ? 'w-8' : 'w-0','' ]"
            >
              <ion-icon class="m-auto pointer-events-none" name="arrow-forward-outline"></ion-icon>
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
      isInputFocused : false,
      isSumitted : false,
    }
  },
  methods: {

  },
}

</script>

<style>

</style>