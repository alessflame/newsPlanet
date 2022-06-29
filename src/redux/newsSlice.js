import { createSlice } from "@reduxjs/toolkit";

const newsSlice=createSlice({

     name:"news",
     initialState: {
          data:[],
          message:"",
          isLoading:false,
          isErrror:false,
     },

     reducers:{
          addArticles:(state,action)=>{
              state.data=action.payload.data;
              state.message=action.payload.message;
              state.isLoading=false;
              state.isErrror=false;

          }
     }
})


export const {addArticles} = newsSlice.actions;

const {reducer} = newsSlice;
export default reducer;