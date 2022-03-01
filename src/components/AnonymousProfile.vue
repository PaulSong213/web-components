<template>
  <section class="flex flex-col justify-center h-screen px-2 bg-gray-900">
    <div
      class="relative flex flex-col justify-between w-full h-64 max-w-md mx-auto overflow-hidden shadow-xl rounded-xl"
    >
      <section class="z-10 flex flex-col h-64 bg-slate-100">
        <div class="flex flex-grow w-full gap-5 p-10">
          <button
            class="relative flex w-16 h-16 mx-auto my-auto text-3xl border rounded-full shadow-sm sm:text-4xl border-slate-900 shrink-0"
            :style="{ backgroundColor: iconColor }"
          >
            <ion-icon class="m-auto filter invert mix-blend-difference" name="person"></ion-icon>
            <input v-model="iconColor" class="absolute w-full h-full opacity-0" type="color" />
          </button>
          <div class="flex flex-grow col-span-7 gap-4 my-auto">
            <h6 class="text-2xl sm:text-3xl text-slate-700">{{ randomName }}</h6>
            <button @click="generateRandomName" class="flex w-6 h-6 mt-1 hover:shadow-sm ">
              <div
                class="m-auto my-auto h-max w-max"
                :class="[isFetchingName ? 'animate-spin' : 'rotate-45', '']"
                title="Generate new name"
              >
                <ion-icon name="refresh-outline"></ion-icon>
              </div>
            </button>
          </div>
        </div>
        <button
          @click="isUpdatingProfile = true"
          class="flex w-full py-4 text-sm font-black text-center uppercase transition-all bg-black text-slate-200 hover:bg-opacity-90 active:bg-opacity-100"
        >
          <span class="m-auto">Create Anonymous Profile</span>
        </button>
      </section>
      <section class="absolute left-0 z-30 flex items-center h-full min-w-full min-h-full transition-all duration-500 bg-black" :class="[isUpdatingProfile ? ' opacity-100 scale-125' : ' opacity-0 scale-0' , '' ]">  
        <div class="m-auto text-9xl text-slate-200">
          <ion-icon class="m-auto" name="skull-outline"></ion-icon>
        </div>
      </section>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isUpdatingProfile: false,
      isFetchingName: false,
      iconColors: [
        "#000000",
        "#ffffff",
        "#10c482",
        "#9e0936",
        "#ff00fb"
      ],
      randomName: "",
      isEmailVerified: false,
      isVerificationSent: false,
      iconColor: "#000",
    }
  },
  mounted() {
    this.generateRandomName(),
      this.setRandomColor()
  },
  methods: {
    generateRandomName() {
      if (this.isFetchingName)
        return;
      this.isFetchingName = true;
      fetch("https://random-words-api.vercel.app/word")
        .then(response => response.json())
        .then(data => {
          if (data.length > 0)
            this.randomName = data[0].word;
          this.isFetchingName = false;
        });
    },
    setRandomColor() {
      const min = 0;
      const max = this.iconColors.length;
      const index = Math.floor(Math.random() * (max - min + 1) + min);
      this.iconColor = this.iconColors[index];
    }
  },
}

</script>

<style>
</style>