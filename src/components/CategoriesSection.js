import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { categories } from "../common/lists/categories";
import CategoryItem from "./CategoryItem";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import SearchBar from "./SearchBar";
import {colors} from "../common/lists/colors";

export default function CategoriesSection() {
  const { category } = useSelector((state) => state);

  const controlCategoryValue = (value) => {
    if (value.toLowerCase() === category.data.toLowerCase()) {
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alcune categorie suggerite</Text>

      <View style={styles.list}>
        {categories.map((item)=> <CategoryItem  key={item.id} title={item.title} selected={controlCategoryValue(item.title)}/>)}

     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "90%",
    marginHorizontal: "5%",
   
  },
  list: {
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: colors.azure,
    width: "100%", 
    borderRadius: 15,
  },
  text: {
    fontSize: 15,
    paddingVertical: 5,
  },
});
