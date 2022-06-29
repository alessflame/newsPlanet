import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addCategory} from "../redux/categorySlice";
import { colors } from '../common/lists/colors';
import { addArticles } from '../redux/newsSlice';
import { getNewsFromCategory } from '../redux/helper/getData';

export default function SearchBar() {

  const {category}= useSelector(state=>state);
  const dispatch= useDispatch();
  

  const showValue=async()=>{
    // console.log(category.data)

    const news= await getNewsFromCategory(category.data);

    dispatch(addArticles({data:news, message:`Notizie per ${category.data}`}));

  }

  const setValue=(text)=>{
    dispatch(addCategory(text));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seleziona una categoria</Text>
      <TextInput placeholder='categoria' value={category.data} style={styles.input} onChangeText={(text)=>setValue(text.trim())} />
      <TouchableOpacity style={styles.button}  >
       <Button title='Cerca' onPress={showValue} color={colors.lightBlue}/>
      </TouchableOpacity>
    </View>
  )
}



const styles= StyleSheet.create({
     container:{
         alignItems:"center",
         marginBottom:30


     },
     input:{
          width:"80%",
          maxWidth:400,
          fontSize:20,
          paddingHorizontal:8,
          paddingVertical:4,
          borderColor:colors.lightBlue,
          borderWidth:1,
          borderRadius:30,
          marginBottom:5,

     },
     button:{
      width:"40%",
      maxWidth:200,
      borderRadius:30,
      backgroundColor:colors.darkBlue,
     },
     text:{
          fontSize:20,
          textAlign:"left",
          marginVertical:8
     }
})