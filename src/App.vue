<template>
  <div class="app">
    <div class="content"
      :style="{'grid-template-columns': gridColumnSpacing}">
      <img class="rr-logo" src="./assets/rebrand-svg-logo.svg" alt="Rolls-Royce">
      <div class="nav-bar">
        <NavBar
        :navFontSize="navFontSize"/>
      </div>
      <div class="page-content"
      :style="{width: this.contentWidth + 'px'}">
        <router-view
        :titleFontSize="titleFontSize"
        :subTitleFontSize="subTitleFontSize"/>
      </div>
      <div class="selector"
      :style="{width: this.selectorWidth + 'px'}"
      @mouseenter="showBoatSelector">
        <BoatSelector class="boatSelector"
        :style="{opacity: selectorOpacity}"
        :navFontSize="navFontSize"
        :selectorWidth="selectorWidth"
        :hideBoatSelector="hideBoatSelector"/>
      </div>
      <div class="footer">
        <footer>
          <div>This is the footer</div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      gridColumnSpacing: '"' + this.selectorWidth + '" "' + 
                         this.contentWidth + '" "' + 
                         this.spacerWidth + '"',
      gridContent: String(this.contentWidth) + 'px',
      gridSelectorWidth: String(this.selectorWidth) + 'px',
      gridSpacer: String(this.spacerWidth) + 'px',
      viewWidth: 0,
      navFontSize: 0,
      contentWidth: 0,
      titleFontSize: 20,
      selectorOpacity: 0,
      selectorWidth: 240,
      subTitleFontSize: 15,
      gridSpacerWidth: 10,
    }
  },

  methods: {
    getWindowWidth: function() {
      this.viewWidth = window.innerWidth;
      this.navFontSize = String(Math.sqrt(this.viewWidth) * 0.6);
      this.contentWidth = (this.viewWidth - this.selectorWidth);
      this.titleFontSize = (this.navFontSize * 2);
      this.subTitleFontSize = (this.navFontSize * 1.6);
    },
    showBoatSelector: function() {
      this.selectorOpacity = 1;
    },
    hideBoatSelector: function() {
      this.selectorOpacity = 0;
    }
  },

  created() {
  this.$nextTick(function() {
    window.addEventListener('resize', this.getWindowWidth);
    this.getWindowWidth()
    });
  },
}
</script>

<style>
.app {
  font-family: 'Avenir', 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --nav-active: #01E1EB;	/* Main Primary color */
  --color-primary-1: #4AE3EA;
  --color-primary-2: #1CE2EC;
  --nav-hover: #00B8C1;
  --color-primary-4: #008086;
  
  --boat-active: #1251EF;	/* Main Secondary color (1) */
  --color-secondary-1-1: #5B85EE;
  --color-secondary-1-2: #3268EF;
  --boat-hover: #053ECB;
  --color-secondary-1-4: #052E95;
  
  --class-active: #FFAB00;	/* Main Secondary color (2) */
  --color-secondary-2-1: #FFC54F;
  --color-secondary-2-2: #FFB51D;
  --color-secondary-2-3: #FFAB00;
  --class-hover: #DD9500;
  
  --color-complement-0: #FF7600;	/* Main Complement color */
  --color-complement-1: #FFA04F;
  --color-complement-2: #FF851D;
  --color-complement-3: #FF7600;
  --color-complement-4: #DD6600;
}
.content {
  display: grid;
  grid-template-areas: 
    "header nav spacerRight"
    "selector content spacerRight"
    "selector footer spacerRight";
  grid-template-columns: 1fr 2fr 20px;
  grid-template-rows: 90px 1fr 60px;
  background-color: rgb(30, 36, 43);
  color: rgb(255, 255, 255);
  font-size: 20px;
  height: 100vh;
  margin: 0 auto;
  min-height: 620px;
  padding: 0;
  text-align: center;
  width: 100%;
}
.rr-logo {
  grid-area: header;
  height: 80px;
  margin: 5px 0 0 5px;
  padding: 5px;
  width: auto;
}
.nav-bar {
  grid-area: nav;
}
.page-content {
  grid-area: content;
  margin: 0 auto;
  margin-top: 10px;
}
.selector {
  grid-area: selector;
  margin-top: 20px;
}
.footer {
  grid-area: footer;
}
.boatSelector {
  display: block;
}
</style>