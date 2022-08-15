<template>
  <div>
       <!-- event button display new excuses-->
      <button @click="displayExcuses">Générer</button>
   </div>
</template>
<script>

import { defineComponent } from 'vue';

export default defineComponent({
  computed : {
   // get one object excuses from store
   getExcuses(){
     //return this.$store.state.moduleStoreExcuses
     return this.$store.getters['moduleStoreExcuses/getExcuses']
    }
  },
  methods: {
    // method display new excuses random
    displayExcuses(){
      // this.$store.dispatch('moduleStoreExcuses/getExcusesData')
      if(this.getExcuses)
      {
       this.$emit('event-message', { message: this.getExcuses.message })
      }
      
    }
  }
})
</script>
