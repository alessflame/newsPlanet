import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { colors } from '../common/lists/colors'

export default function Message() {
  const {news} = useSelector(state=>state)

  return (
    <View style={{marginVertical:15}}>
      <Text style={{ textAlign:"center",fontWeight:"bold", fontSize:25, color:colors.darkBlue}}>{news.message}</Text>
    </View>
  )
}