<template>
  <q-page class="row items-center justify-evenly">
      <!-- gif image -->
      <span><img src="~assets/livraison.gif" alt="">"i’m lost"</span>
  </q-page>
</template>

<script lang="ts">
//Imports 
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageLost',
  components: {},

  data(){
    return {
      timer_connexion : '', // timer attribute 
    }
  },
  mounted(){
    // initialize the timer for five seconds
    this.timer_connexion = setInterval(this.getRedirection, 5000)
  },
  methods:{

    // redirect home page and stop timer
    getRedirection(){
      clearInterval(this.timer_connexion)
      this.$router.push('/')
    }
  }
});
</script>
