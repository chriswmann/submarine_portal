<template>
  <div class="page-content">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <p>Not this picture I got off the company website...</p>
    <img src="../../assets/submarine-banner.jpg" alt="subs_banner">
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      title: "Submarines Portal",
      subtitle: "A fleet status page would go here."
    }
  }
}
</script>

<style scoped>
img {
  margin-top: 20px;
  width: 1000px;
  height: auto;
}
</style>