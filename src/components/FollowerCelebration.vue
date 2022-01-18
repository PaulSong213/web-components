<template>
  <section class='flex flex-col h-screen justify-center bg-rose-500 bg-gradient-to-br from-teal-200  to-rose-400 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-black  h-64 shadow-xl flex justify-between relative'>
      <div class="text-7xl text-white font-black flex flex-col justify-center h-full w-full">
        <div class="mx-auto w-full flex flex-col h-full relative py-5 px-10">
          <div class="text-teal-300 mt-3">
            <h1 class="text-xl">Thank you</h1>
          </div>
          <div class="text-teal-300  mt-auto  text-right">
            <h1 class="text-xl">for 100 followers</h1>
          </div>
          <div class="w-max absolute bottom-28 left-32">
              <h1 class="space-x-12">
                <span>T</span>
                <span>K</span>
              </h1>
          </div>
          <div class=" w-max absolute bottom-14 left-56">
              <h1 class="space-x-12">
                <span>T</span>
                <span>K</span>
              </h1>
          </div>
          <img class="absolute h-48 top-0 left-1/2 -translate-x-1/2 animate-pendelum shadow-xl shadow-red-300/20 rounded-full" src="/pendelum.png">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods: {

  },
}

</script>

<style scoped>
.animate-pendelum {
  transform: rotate(-20deg);
  animation-name: rotate;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transform-origin: 50% 0%;
  animation-timing-function: ease-in-out;
}

@keyframes rotate {
  0% {
    transform: rotate(-13deg);
  }
  100% {
    transform: rotate(30deg);
  }
}
</style>