import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fleetData: {
        Trafalgar: {
          boat1: {name: "Talent",
                  active: false},
          boat2: {name: "Triumph",
                  active: false},
        },
        Vanguard: {
          boat1: {name: "Vanguard",
                  active: false},
          boat2: {name: "Valiant",
                  active: false},
          boat3: {name: "Victorious",
                  active: false},
          boat4: {name: "Vengeance",
                  active: false},
        },
        Astute: {
          boat1: {name: "Astute",
                  active: false},
          boat2: {name: "Ambush",
                  active: false},
          boat3: {name: "Artful",
                  active: false},
          boat4: {name: "Audacious",
                  active: false},
          boat5: {name: "Anson",
                  active: false},
          boat6: {name: "Agememnon",
                  active: false},
          boat7: {name: "Agincourt",
                  active: false},
        }
    },
    classSelectStatus: {
      Trafalgar: false,
      Vanguard: false,
      Astute: false,
    },
    navItemsArray: [
        {id: 'home', name: 'Home', relPath: '/'},
        {id: 'status', name: 'Status', relPath: './status'},
        {id: 'programme', name: 'Programme', relPath: './programme'},
        {id: 'contacts', name: 'Contacts', relPath: 'contacts'},
        {id: 'help', name: 'Help', relPath: 'help'}
    ],
  }
})