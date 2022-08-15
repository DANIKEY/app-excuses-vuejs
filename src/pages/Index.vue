<template>
  <q-page class="row items-center justify-evenly">      
      <!-- Main component excuses-->
      <excuses-component  v-if="getExcuses" :message="getExcuses.message"></excuses-component>
  </q-page>

</template>

<script lang="ts">
// Imports and define components
import ExcusesComponent from 'components/ExcusesComponent.vue';
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { ExcusesComponent },
  data(){
    return {}
  },
  computed : {
   // get one object excuses from store
   getExcuses(){
     //return this.$store.state.moduleStoreExcuses
     return this.$store.getters['moduleStoreExcuses/getExcuses']
    }
  },
  mounted(){
     // event request api excuses
     this.$store.dispatch('moduleStoreExcuses/getExcusesData')
  },
  methods: {},
  setup() {}
});
</script>
