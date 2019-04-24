<template>
  <div class="page-content">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelpPage',
  data () {
    return {
      title: "Help Portal",
      subtitle: "Here's a subtitle."
    }
  }
}
</script>

<style scoped>
</style>