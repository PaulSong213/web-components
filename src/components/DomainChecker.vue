<template>
  <section class="bg-amber-100 h-screen flex flex-col justify-center p-4">
    
    <div class="mx-auto w-full max-w-md">
      <div class="relative">
        <input class="w-full bg-transparent border-b text-5xl font-bold focus:border-amber-300 py-1 text-zinc-800 border-amber-200 outline-none placeholder-slate-300" type="text" v-model="query" placeholder="Enter domain">
        <p @click="query = ''" class="absolute font-black right-0 top-1/2 -translate-y-1/2 text-2xl text-gray-700  cursor-pointer select-none ">x</p>
      </div>

      <div class="h-40 w-full py-4 space-y-2">
        <div v-for="(suggestion,index) in suggestions" :key="index" class="flex justify-between">
          <h6 class="text-md font-bold tracking-wider">
            {{suggestion.name}}
          </h6>
          <div class="flex space-x-2">
            <h6 class="font-serif font-medium text-gray-800">₱19/year</h6>
            <div  v-if="!suggestion.isAdded" @click="suggestions[0]['isAdded'] = true">
              <ion-icon  class="tranform -scale-x-100 text-xl cursor-pointer" name="cart-outline"></ion-icon>
            </div>
            <ion-icon v-else class="text-xl text-green-500 cursor-pointer" name="checkmark"></ion-icon>
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
      query : "fb"
    }
  },
  computed : {
    suggestions(){
      var suggestions = [];
      if(!this.query)return suggestions;
      
      var enders = ['.com','.net','.org'];
      var query = this.query.split(".")[0];

      for(var i = 0; i < enders.length ; i++){
        var suggestion = {};
        suggestion.name = query + enders[i];
        suggestion.isAdded = false;
        suggestions[i] = suggestion;
      }
      return suggestions;

    }
  }
}
</script>

<style>

</style>