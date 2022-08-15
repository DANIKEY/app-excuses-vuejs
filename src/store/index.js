// Imports
import Vuex from 'vuex'
import moduleExcuses from "./module-excuses";

export default function (){
// Instantiate store
const Store = new Vuex.Store({
  modules: {
    moduleStoreExcuses: moduleExcuses // add module excuses to store 
  }
})
return Store
}
