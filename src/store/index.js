import Vuex from 'vuex'
import Excuses from "../apiExcusesRequests/ApiExcuses";

/**
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

 export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    
    modules: {},
    
    state: {
      excuses: [],
      lastMessage : []
    },

    mutations: {
      setExcuses(state,data)
      {
        state.excuses = data
      }
    },

    getters : {
      getLastMessage(state){
        return state.lastMessage
      },
      getExcuses(state){

        let item = state.excuses[Math.floor(Math.random()*state.excuses.length)];
  
        if(JSON.stringify(state.lastMessage) === JSON.stringify(item))
        {
          let item = state.excuses[Math.floor(Math.random()*state.excuses.length)];
          state.lastMessage.slice(0,state.lastMessage.length)
          state.lastMessage.push(item)
          return item
        }
        else{
          state.lastMessage.slice(0,state.lastMessage.length)
          state.lastMessage.push(item)
          return item
        }
      }

      },    
    
      actions: {
        getExcusesData({commit}){
          Excuses.getExcuses()
          .then(resp => { 
            commit("setExcuses",resp)
           })
          .catch(e => {})
        }
      },

  })

  return Store
}
