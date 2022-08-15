// imports 
import Excuses from "../../apiExcusesRequests/ApiExcuses";

// methods request get excuses 
export function getExcusesData({commit}){
   Excuses.getExcuses()
   .then(resp => { 
     commit("setExcuses",resp)
   })
   .catch(e => {})
}