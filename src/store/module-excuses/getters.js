// get last message excuses
export function  getLastMessage(state){
    return state.lastMessage
}

// get random object  excuses in array 
export function getExcuses(state){

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