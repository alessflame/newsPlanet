import React, { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import Header from "../components/Header";
import CategoriesSection from "../components/CategoriesSection";
import SearchBar from "../components/SearchBar";
import HeaderHome from "../components/HeaderHome";

import { getNewsItaly } from "../redux/helper/getData";
import { useDispatch, useSelector } from "react-redux";
import { addArticles } from "../redux/newsSlice";
import NewsItem from "../components/NewsItem";
import NotElement from "../components/Message";
import { currentDay } from "../common/date";

// https://newsapi.org/v2/top-headlines?country=it&apiKey=2144d1e6f7d640e8a0f4d011f62b1bd6

// https://newsapi.org/v2/everything?q=Apple&from=2022-06-29&apiKey=2144d1e6f7d640e8a0f4d011f62b1bd6

export default function HomeScreen() {
  const { news } = useSelector((state) => state);
  // console.log(news.data);

 

  const dispatch = useDispatch();

  const getData = async () => {
    const news = await getNewsItaly();

    dispatch(addArticles({ data: news, message: "Notizie in italia" }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
 
        
         ListHeaderComponent={<HeaderHome />}
        ListFooterComponent={
          news.data.length === 0 ? <Text style={{textAlign:"center", fontWeight:"bold"}}>Nessuna Notizia</Text> : null
        }
        refreshing={false}
        onRefresh={()=>getData()}
        data={news.data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <NewsItem
            content={item.content}
            title={item.title}
            urlToImage={item.urlToImage}
            url={item.url}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
