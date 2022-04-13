<template>
  <section
    class="flex flex-col justify-center h-screen px-2 bg-sky-400 bg-gradient-to-br from-sky-400 to-purple-400"
  >
    <div
      class="relative justify-between w-full max-w-md p-3 mx-auto rounded-sm shadow-xl h-max bg-gray-50"
    >
      <section class="flex flex-col">
        <div>
          <div class="flex gap-2 justify-center text-xs text-gray-600">
            <h6 class="my-auto text-sm font-bold text-center text-purple-500">
              Bootstrap
            </h6>
            <span class="my-auto">with</span>
            <h6 class="my-auto text-sm font-bold text-center text-sky-500">CSS</h6>
          </div>
          <div class="flex justify-center gap-10 pt-2">
            <img
              class="h-6"
              src="https://miro.medium.com/max/320/0*_rAD9NgK7l6KSlNc.png"
              alt="Bootstrap"
            />
            <span class="text-2xl my-auto text-sky-600"
              ><ion-icon name="logo-css3"></ion-icon
            ></span>
          </div>
        </div>
        <div class="flex h-32">
          <div class="m-auto" v-html="htmlText"></div>
        </div>
        <div class="text-xs flex-grow font-mono w-full h-64 overflow-auto border-2 p3-1 border-sky-400  rounded-md">
          <textarea
            class=" w-full p-1 overflow-hidden  rounded-md  h-[1500px]"
            type="text"
            v-model="htmlText"
          ></textarea>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      htmlText: `<html lang="en">
  <head>
     <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
     <style>
        .btn-primary {
           background-color: #098ab5;
        }
        .btn-costumized {
           background-color : #b0e8eb;
        }
     </style>
  </head>
  <body>
    <button class="btn btn-primary">
      Hello World!
    </button>
    <button class="btn btn-costumized">
      Costumized Button
    </button>
  </body>
</html>`,
    };
  },
  methods: {},
};
</script>
<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"; 
</style>

