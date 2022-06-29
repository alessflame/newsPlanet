import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import Header from "../components/Header";
import CategoriesSection from "../components/CategoriesSection";
import SearchBar from "../components/SearchBar";
import Message from "./Message";

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <CategoriesSection />
      <Message/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
