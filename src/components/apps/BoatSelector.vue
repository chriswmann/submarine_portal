<template>
  <div class="boat-selector-container">
    <div class="close"
    @click="hideBoatSelector">
      <img src="../../assets/close.svg" alt="Close" height="15" width="15">
    </div>
    <div v-for="(classData, classInd) of data.fleetData"
    :key="classInd"
    class="class-selector-grid"
    :style="{ 'width': classSelectorWidth}">
      <div :class="'selector class-selector ' + classInd + 'Class'"
      :style="{ 'width': classSelectorWidth}">
        <label>
          <input type="checkbox"
          v-model="data.classSelectStatus[classInd]"
          @change="toggleClass(classInd)">
          <span>{{ classInd }}</span>
        </label>
      </div>
      <div :class="'selector boat-selector-grid ' + classInd + 'Boats'"
      :style="{ 'width': classSelectorWidth}">
        <div v-for="(boat, boatInd) of classData"
        :key="boatInd">
          <div
          :class="'boat-selector ' + classInd"
          :style="{ 'width': boatSelectorWidth, 'grid-area': boatInd}">
          <label>
            <input type="checkbox"
            @change="updateClassStatus(classInd, boatInd)"
            v-model="data.fleetData[classInd][boatInd].active">
            <span :style="{'font-size': selectorFontSize + 'px'}">
              {{ boat.name }}
            </span>
          </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoatSelector',

  computed: {
    data() {
      return {
        fleetData: this.$store.state.fleetData,
        classSelectStatus: this.$store.state.classSelectStatus
      };
    },

    selectorFontSize: function() {
      if (this.navFontSize < 16) {
        return 16
      } else if (this.navFontSize > 17) {
        return 17
      } else {
        return this.navFontSize
      }
    },

    boatSelectorWidth: function() {
      return ((this.selectorWidth - 20) / 2) + 'px'
    },

    classSelectorWidth: function() {
      return (this.selectorWidth - 10) + 'px'
    },
  },

  methods: {
    toggleClass: function(classInd) {
      for (const boatInd in this.data.fleetData[classInd]) {
        this.data.fleetData[classInd][boatInd].active = this.data.classSelectStatus[classInd];
      }
    },
    updateClassStatus: function(classInd, boatInd) {
      let newStatus = this.data.fleetData[classInd][boatInd].active;
      let subjectClass = this.data.fleetData[classInd];
      let statuses = [];
      for (let boat of Object.keys(subjectClass)) {
          statuses.push(subjectClass[boat].active);
      }
      if (newStatus === false) {
        this.data.classSelectStatus[classInd] = newStatus;
      } else if (statuses.every(Boolean)) {
        this.data.classSelectStatus[classInd] = newStatus; 
      }
    }
  },

  props: ['hideBoatSelector', 'navFontSize', 'selectorWidth'],

}

</script>

<style scoped>
.boat-selector-container {
  margin: 10px 0 0 5px;
  display: grid;
  grid-template-areas: 
    "close"
    "TrafalgarClass"
    "VanguardClass"
    "AstuteClass";
  height: 90%;
  width: 100%;
}
span {
  font-size: 20px;
  height: 30px;
  line-height: 30px;
}
.selector {
  border-radius: 10px;
  color: #222222;
  width: 80%;
}
.selector label span {
  text-align: center;
  line-height: 30px;
  padding: 5px;
  display: block;
}
.selector label input {
  position: absolute;
  top: -20px;
}
.class-selector {
  background-color: rgb(100, 106, 113);
  border-radius: 10px;
  font-size: 20px;
  margin: 0 5px;
  width: 100%;
}
.boat-selector-grid {
  display: grid;
  grid-template-areas: 
    "boat1 boat2"
    "boat3 boat4"
    "boat5 boat6"
    "boat7";
  grid-template-columns: 50% 50%;
  grid-column-gap: 5px;
  grid-template-rows: 50px;
  margin: 5px 0;
  width: 100%;
}
.close {
  font-size: 40px;
  margin: -10px 5px;
  text-align: right;
}
.close:hover {
  cursor: pointer;
}
.class-selector-grid {
  height: 100%;
}
.class-selector:hover, .class-selector label:hover {
  background-color: var(--class-hover);
  color: #cccccc;
  cursor: pointer;
}
.boat-selector {
  background-color: rgb(100, 106, 113);
  border-radius: 10px;
  height: 40px;
  margin: 5px;
}
.boat-selector label span {
  font-size: 15px;
}
.class-selector input:checked + span {
  background-color: var(--class-active);
  border-radius: 10px;
  color: #222222;
  font-weight: 500;
}
.class-selector input:checked:hover + span {
  background-color: var(--class-hover);
  color: #ffffff;
}
.boat-selector:hover, .boat-selector label:hover {
  background-color: var(--boat-hover);
  color: #aaaaaa;
  cursor: pointer;
}
.boat-selector input:checked + span {
  background-color: var(--boat-active);
  border-radius: 10px;
  color: #ffffff;
  font-weight: 500;
}
.boat-selector input:checked:hover + span {
  background-color: var(--boat-hover);
  color: #222222;
}
.class-selector.Trafalgar {
  grid-area: trafalgarClass;
}
.boat-selector.Trafalgar {
  grid-area: trafalgarBoats;
}
.class-selector.Vanguard {
  grid-area: vanguardClass;
}
.boat-selector.Vanguard {
  grid-area: vanguardBoats;
}
.class-selector.Astute {
  grid-area: astuteClass;
}
.boat-selector.Astute {
  grid-area: astuteBoats;
}
</style>