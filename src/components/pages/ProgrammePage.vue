<template>
  <div class="page-content">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ProgrammePage',
  data () {
    return {
      title: "Fleet Programme",
      subtitle: "Here's a subtitle."
    }
  }
}
</script>

<style scoped>
</style>