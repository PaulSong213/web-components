<template>
  <section class="h-screen bg-purple-900 flex flex-col justify-center">

    <div class="grid grid-cols-2 mx-auto w-full max-w-lg gap-3">

      <div v-for="(data,index) in dashboardDatas" :key="index" class="h-24 w-full bg-purple-500 bg-gradient-to-br  rounded-xl grid grid-cols-6 gap-10 py-1 px-5 shadow-2xl" :class="data.backgroundClass" >
        <div class="col-span-2 text-white text-6xl flex flex-col justify-center">
          <ion-icon class="mx-auto" :name="data.iconName"></ion-icon>
        </div>
        <div class="flex flex-col justify-end pb-2 space-y-2 text-white font-bold text-4xl col-span-4 leading-5 h-full">
          <span>{{data.value}}</span>
          <span class="text-lg">{{data.name}}</span>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      dashboardDatas : [
        {
          name : "Deliveries",
          value : 123,
          iconName : "cart-outline",
          backgroundClass : "from-blue-400 to-green-400"
        },
        {
          name : "Sales",
          value : 89,
          iconName : "bar-chart-outline",
          backgroundClass : "from-red-400 to-yellow-400"
        },
        {
          name : "Engagement",
          value : 189,
          iconName : "chatbox-outline",
          backgroundClass : "from-green-400 to-blue-400"
        },
        {
          name : "Staffs",
          value : 41,
          iconName : "person-outline",
          backgroundClass : "from-yellow-400 to-red-400"
        }
      ]
    }
  },
  mounted(){
    this.animateNumbers(0),
    this.animateNumbers(1),
    this.animateNumbers(2),
    this.animateNumbers(3)
  },
  methods : {
    animateNumbers(index){
      const finalValue = this.dashboardDatas[index].value;
      this.dashboardDatas[index].value = 0;
      var animation = setInterval(()=>{
        this.dashboardDatas[index].value += 1;
        if(this.dashboardDatas[index].value  >= finalValue){
          this.dashboardDatas[index].value = finalValue;
          clearInterval(animation);
        }
        return this.dashboardDatas[index].value;
      }, (finalValue / 10));
    }
  }
}
</script>

<style>

</style>