<template>
  <div class="page-content">
    <h1 :style="{'font-size': titleFontSize}">{{ title }}</h1>
    <h2 :style="{'font-size': subTitleFontSize}">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  data () {
    return {
      title: "Enterprise Contacts",
      subtitle: "Here's a subtitle.",
    }
  },

  props: ['titleFontSize', 'subTitleFontSize']
}
</script>

<style scoped>
</style>