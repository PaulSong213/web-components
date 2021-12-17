<template>
  <section>
    redirecting please wait...
  </section>
</template>
<script>
export default {
  mounted(){
    this.redirectPage()
  },
  methods : {
    redirectPage(){
      if(this.$route.path === "/latest" ){
        var latestPath = Object.values(this.$router.options.routes)[1]['path'];
        return this.$router.push({ path: latestPath});
      }
      return this.$router.push({ path: "/"});

    }
  }
}
</script>

<style>

</style>