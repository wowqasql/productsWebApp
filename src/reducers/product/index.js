import { SET_PRODUCT } from "./action-creator"


const initialState = [
  
]


export const productReducer = (state = initialState, action) => {
  switch(action.type){
    case  SET_PRODUCT:
      return [...state, action.payload] ///????????????????????????????????
    default:
      return state
  }
}


