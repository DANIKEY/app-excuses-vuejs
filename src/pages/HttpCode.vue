<template>
  <q-page class="row items-center justify-evenly">
      <!--{{httpCode}} - {{messageHttpCode}} -->
      <!-- display message for http code -->
      <div v-for="data in messageHttpCode">
         {{data.message}}
      </div>
  </q-page>
</template>

<script lang="ts">
//Imports 
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHttpCode',
  components: {},
  data(){
    return {
      httpCode: this.$route.params.http_code, // attribute params url http_code
    }
  },
  computed : {
    // filter excuses store data httpcode 
     messageHttpCode(){
        return this.$store.state.moduleStoreExcuses.excuses.filter(fetch => fetch.http_code == this.httpCode)
     }
  },
  mounted(){
      // load Data excuses in strore
      this.$store.dispatch('moduleStoreExcuses/getExcusesData')
  },
  methods:{}
});
</script>