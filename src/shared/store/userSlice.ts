
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type userState = {
  access_token:string
  refresh_token:string
  user_id:string
  user_email: string
};

const initialState: userState = {
  access_token:"",
  refresh_token:"",
  user_id:"",
  user_email: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    setUser:(state,action:PayloadAction<userState>)=>{
      if (action.payload) {
        Object.assign(state, action.payload);
      }
    },
    logOutUser:(state)=>{
      state.access_token = "";
      state.refresh_token = "";
      state.user_id = "";
      state.user_email = "";
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUser,logOutUser } = userSlice.actions;

export default userSlice.reducer;
