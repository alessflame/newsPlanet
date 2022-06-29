import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from "./categorySlice";
import newsReducer from "./newsSlice";


export const store= configureStore({
     reducer:{
      category:categoryReducer,
      news:newsReducer,
      
     }
})