import axios from "axios"

export const SET_AUTH = 'SET_AUTH'



export const authActionCreator = (payload) => ({type: SET_AUTH, payload})

export const login = (username, password) => async (dispatch) => {
  try{
    const response = await axios.get('./admin.json')
    const mockUser = response.data.find(user => user.username === username && user.password === password)
    if(mockUser){
      dispatch(authActionCreator(true))
      //USER ACTION
    }
    authActionCreator(false)
    //ERROR ACTION
  }catch(e){
    console.log(e)
  }

}