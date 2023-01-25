import { SET_TYPE } from "./action-creator"


const initialState = [{
  
}]


console.log(initialState)

export const typeReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_TYPE :
      console.log(action)
      return [...state, action.payload]
    default:
      return state
  }
}