<template>
  <div>
   <!-- call dialog modal add new excuses -->
   <button @click="addNewExcuses()">Ajouter une nouvelle excuse</button>
   <!-- Dialog add new excuses -->
  <q-dialog v-model="dialogLaunch" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Ajouter une nouvelle excuse</div>
        </q-card-section>
      <form  @submit="registerExcuses">
        <q-card-section class="q-pt-none">
          <q-input type="number" label="http_code" dense v-model="http_code" autofocus  required/>
          <q-input dense label="tag" v-model="tag" required/>
          <q-input dense label="message" v-model="message" require/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Annuler" v-close-popup />
          <q-btn flat label="Valider" type="submit" />
        </q-card-actions>
      </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
// Imports and define components
import Excuses from "../apiExcusesRequests/ApiExcuses";
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'registerExcusesComponent',
  data(){
    return {
      http_code:'',  // v-model http_code input
      tag:'',        // v-model tag input
      message : '',  // v-model message input
      dialogLaunch : false   // boolean attribute display dialog add new excuses
    }
  },

  methods: {
    // display dialog add new excuses
    addNewExcuses(){
      this.dialogLaunch = true
    },

    // method register new excuses api 
    registerExcuses(){

        let data = {
          'http_code' : this.http_code,
          'tag': this.tag,
          'message' : this.message
        }

        Excuses.createExcuses(data).then(resp => {
           this.dialogLaunch = false
           alert("Nouvelle excuse ajouté")
           this.$emit('event-message', { message: this.message })
           this.http_code = ''
           this.tag = ''
           this.message = ''
        }).catch(e => { 
          this.dialogLaunch = false
          alert("Erreur lors de l'ajout de la nouvelle excuse ... ")
          alert(e)
        })

    }
  },
});
</script>
