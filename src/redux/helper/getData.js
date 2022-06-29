import axios from "axios";
import { addArticles } from "../newsSlice";
import {API_KEY} from "@env"
import { currentDay } from "../../common/date";



export const getNewsItaly= async()=>{
    const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=it&apiKey=${API_KEY}`);
    
    return news.data.articles;
}


export const getNewsFromCategory= async(category)=>{


     const news= await axios.get(`https://newsapi.org/v2/everything?q=${category}&from=${currentDay()}&language=it&apiKey=${API_KEY}`);

     

     return news.data.articles;
}