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
        var latestPath = Object.values(this.$router.options.routes)[1]['path'];
        return this.$router.push({ path: latestPath});
    }
  }
}
</script>

<style>

</style>