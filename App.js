import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  VirtualizedList,
  ScrollView,
} from "react-native";
import Header from "./src/components/Header";
import CategoryItem from "./src/components/CategoryItem";
import CategoriesSection from "./src/components/CategoriesSection";
import SearchBar from "./src/components/SearchBar";
import HomeScreen from "./src/screens/HomeScreen";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack= createNativeStackNavigator();


  return (
    <Provider store={store}>
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
        <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "",
    flex: 1,
    backgroundColor: "#fff",
  },
});
