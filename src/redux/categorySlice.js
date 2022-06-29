import { createSlice } from "@reduxjs/toolkit"

const categorySlice = createSlice({
     name:"category",
     initialState:{
          data:"",
          isLoad:false,
          isError:false,
     },
     reducers:{
          addCategory:(state, action)=>{
            state.data=action.payload;
          }
     }
});


export const {addCategory} = categorySlice.actions;
const {reducer} = categorySlice;
export default reducer;