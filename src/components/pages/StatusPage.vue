<template>
  <div class="page-content">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <p>It doesn't update with the menu yet because it's just a picture.</p>
    <div>
      <img src="../../assets/analyticsDashDummy.png" alt="This is just a picture for now!">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusPage',
  data () {
    return {
      title: "Fleet Status",
      subtitle: "Here's a dummy dashboard!"
    }
  }
}
</script>

<style scoped>
img {
  height: 500px;
  width: auto;
}
</style>