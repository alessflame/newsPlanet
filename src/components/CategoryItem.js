import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/categorySlice';
import { colors } from '../common/lists/colors';

export default function CategoryItem({title, selected}) {
  const dispatch= useDispatch();

  const pressItem=()=>{

    // console.log(title);
    dispatch(addCategory(title));


  }



  return (
    <TouchableOpacity style={[styles.container, selected===true? 
    {backgroundColor:colors.lightBlue, }
   :false ]} onPress={pressItem} >
      <Text style={[styles.text, selected===true? {color:"white", fontWeight:"bold"}:null]}>{title}</Text>
    </TouchableOpacity>
  )
}


const styles= StyleSheet.create({
     container:{
          paddingVertical:5,
          paddingHorizontal:8,
          marginVertical:10,
          marginHorizontal:10,
          width:150,
          height:30,
          backgroundColor:"white",
          borderRadius:30,
          shadowRadius:20,
          elevation:10,
          shadowColor: '#171717',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 0.4,
          shadowRadius: 2,
          
     }, 
     text:{
      textAlign:"center",
      
     }
})