<template>
  <q-page class="row items-center justify-evenly">
    <!-- Main component excuses-->
    <composition-component></composition-component>
  </q-page>
</template>

<script lang="ts">
// Imports and define components
import CompositionComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { CompositionComponent },
  mounted(){},
  setup() {}
});
</script>
