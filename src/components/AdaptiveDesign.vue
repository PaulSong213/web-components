<template>
  <section class="h-screen flex justify-center flex-col " :class="[`bg-${selectedVariantName}-700 bg-gradient-to-r from-${selectedVariantName}-900 via-${selectedVariantName}-900 to-${selectedVariantName}-800`, selectedVariantName === 'blue' || selectedVariantName === 'gray'  ? 'bg-slate-700' : ''  ]" >

    <div class="h-60 w-full max-w-md mx-auto bg-gradient-to-r shadow-xl grid grid-cols-12 overflow-hidden rounded-md border border-slate-700" :class="[`bg-${selectedVariantName}-800 from-${selectedVariantName}-800  to-${selectedVariantName}-700` ]" >
      <nav class="col-span-12 h-12 text-white flex justify-between">
        <div class="flex px-5">
          <h1 class="m-auto text-xs font-bold">Simple</h1>
        </div>
        <div class=" h-10 w-12 flex rounded-bl-xl" :class="[`bg-${selectedVariantName}-500`]">
          <ion-icon class="m-auto" name="menu"></ion-icon>
        </div>
      </nav>
      <div class="h-48 col-span-5 text-white flex justify-center flex-col pl-4 pb-10 font-black">
        <h6 class="text-xs leading-5 ml-1">Plain Shirt</h6>
        <h1 class="text-5xl uppercase ">{{selectedVariantName}}</h1>
        <div class="mt-4 pl-1 flex space-x-1">
          <div v-for="(variant,index) in variants" :key="index" @click="currentSelectedIndex = index" class="h-3 w-3 rounded-full border border-white cursor-pointer" :class="['bg-'+variant.name+'-500 ']"></div>
        </div>
      </div>
      <div class="h-48 col-span-7 relative">
        <img  class="h-full filter  z-20 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 " :class="[selectedVariantHue]" src="https://cdn.shopify.com/s/files/1/0101/1145/1195/products/winner-plain-round-neck-shirt-djaqua_059399e1-4773-4f1f-975b-135bdeb8db13.png?v=1580777949" alt="gg">
        <div class="h-5/6 w-11/12 absolute bottom-0 right-0 rounded-tl-2xl z-10 " :class="[`bg-${selectedVariantName}-400 `]" ></div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      currentSelectedIndex : 0,
      variants : [
        {
          name : 'green',
          hueRotate : "-hue-rotate-90 brightness-110"
        },
        {
          name : 'purple',
          hueRotate : "hue-rotate-60"
        },
        
        {
          name : 'lime',
          hueRotate : "-hue-rotate-90 brightness-125"
        },
        {
          name : 'gray',
          hueRotate : "grayscale brightness-125"
        },
        {
          name : 'blue',
          hueRotate : ""
        },
        
      ]
    }
  },
  computed : {
    selectedVariantName(){
      return this.variants[this.currentSelectedIndex].name;
    },
    selectedVariantHue(){
      return this.variants[this.currentSelectedIndex].hueRotate;
    }
  }
}
</script>

<style>

</style>