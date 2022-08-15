<template>
  <div>
     <!--register excuses component -->
      <register-excuses-component @event-message="setMessage"></register-excuses-component>
    <p>Excuses application</p>
    <!-- display excuses random -->
     <div>
          {{messageComponent}}
      </div>
      <!--component button-->
     <button-component  @event-message="setMessage"></button-component>
  </div>
</template>

<script lang="ts">
// imports and define components 
import { defineComponent } from 'vue';
import ButtonComponent from './ComponentButton.vue' 
import RegisterExcusesComponent from 'src/components/registerExcusesComponent.vue';

export default defineComponent({
  // props data message
  props: ['message'],
  components : { ButtonComponent,RegisterExcusesComponent},
  
  //method accessing props data 
  data: function() {
    var messageComponent  = {
     messageComponent: this.message,
  }
  return messageComponent;

  },
  methods: {
    // method get data emit from button component
    setMessage(payload) {
      this.messageComponent = payload.message
    }
  }
})

</script>
