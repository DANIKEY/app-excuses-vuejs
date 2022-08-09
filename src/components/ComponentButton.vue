<template>
  <div>
       <!-- event button display new excuses-->
      <button @click="displayExcuses">Boutton</button>
   </div>
</template>
<script>

import { defineComponent } from 'vue';

export default defineComponent({
  methods: {

    // function display new excuses random
    displayExcuses(){
       this.$store.dispatch('getExcusesData')
    }
  }
})
</script>
