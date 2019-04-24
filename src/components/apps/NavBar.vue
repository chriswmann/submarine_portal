<template>
  <div class="navbar-container">
    <nav class="nav-grid">
      <ul>
        <router-link v-for="navItem in navItemsArray" 
        :key="navItem.id"
        tag="li"
        :to="navItem.relPath"
        exact
        :style="{ fontSize: navFontSize + 'px'}">
        <a>{{ navItem.name }}</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['navFontSize'],
  computed: {
    navItemsArray() {
      return this.$store.state.navItemsArray;
    }
  }
}

</script>

<style scoped>
.navbar-container {
  display: grid;
  grid-template-areas: 
    "spacerLeft navMenu spacerRight";
  grid-template-columns: 10% 1fr 10%;
  max-width: 100%;
  padding-top: 10px;
}
.navbar-container .nav-grid{
  grid-area: navMenu;
  text-align: center;
  font-size: 30px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
}
nav li {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  margin: 0 2%;
}
 nav li:hover {
  color: var(--nav-hover);
  cursor: pointer;
}
 nav li.router-link-active {
  border-top: 4px solid var(--nav-active);
  color: var(--nav-active);
  cursor: pointer;
}
nav li.router-link-active:hover {
  color: var(--nav-hover);
}
a, a:visited {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  height: 100%;
  width: 100%;
}
</style>