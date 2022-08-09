<template>
  <div>
    <button @click="addNewExcuses()">Ajouter une nouvelle excuse</button>
   <p>Excuses application</p>
     <!-- display excuses random -->
     <div v-if="getExcuses">
          {{getExcuses.message}}
      </div>
      <!--component button-->
     <button-component></button-component>
  </div>
  
  <!-- Dialog add new excuses -->
  
  <q-dialog v-model="dialogLaunch" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Ajouter une nouvelle excuse</div>
        </q-card-section>
      <form  @submit="registerExcuses">
        <q-card-section class="q-pt-none">
          <q-input type="number" dense v-model="http_code" autofocus  required/>
          <q-input dense v-model="tag" required/>
          <q-input dense v-model="message" require/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Annuler" v-close-popup />
          <q-btn flat label="Valider" type="submit" />
        </q-card-actions>
      </form>
      </q-card>
    </q-dialog>
</template>

<script lang="ts">
// imports and define components 
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import Excuses from "../apiExcusesRequests/ApiExcuses";
import ButtonComponent from './ComponentButton.vue'
export default defineComponent({
  components : { ButtonComponent}, // define Button Component
  data(){
    return {
      http_code:'',  // v-model http_code input
      tag:'',        // v-model tag input
      message : '',  // v-model message input
      dialogLaunch : false   // boolean attribute display dialog add new excuses
    }
  },
  
  computed:{
    // get excuses from store
    getExcuses(){
      return this.$store.getters.getExcuses
    }
  },
 
  mounted(){
    // event request api and get data excuses
    this.$store.dispatch('getExcusesData')
  },
  methods:{
    // display dialog add new excuses
    addNewExcuses(){
      this.dialogLaunch = true
    },

    // function register new excuses api 
    registerExcuses(){

        let data = {
          'http_code' : this.http_code,
          'tag': this.tag,
          'message' : this.message
        }

        Excuses.createExcuses(data).then(resp => {
           this.dialogLaunch = false
           alert("Nouvelle excuse ajouté")
        }).catch(e => { 
          this.dialogLaunch = false
          alert("Erreur lors de l'ajout de la nouvelle excuse ...")
        })

    }

  }
})

</script>
