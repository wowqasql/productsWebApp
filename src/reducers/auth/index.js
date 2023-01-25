import { SET_AUTH } from "./action-creator"



const initialState = {
  isAuth: false,
}


export const isAuthReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_AUTH :
      console.log(initialState.isAuth)
      return {...state, isAuth: action.payload}
    default:
      return state
  }
}