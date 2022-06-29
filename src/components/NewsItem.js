import { View, Text, Image, StyleSheet, Button, Linking, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../common/lists/colors";

export default function NewsItem({ content, title, urlToImage, url }) {
  const handleClick = () => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.img} source={{ uri: urlToImage }} />
      <Text style={styles.content}>{content}</Text>

<TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.textButton}>Esplora</Text>
  </TouchableOpacity> 
  
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "96%",
    margin: "2%",
    borderRadius: 15,
    borderColor: colors.azure,

    backgroundColor: colors.lightBlue,
    marginVertical: 20,
  },
  title: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: colors.azure,
    padding: 15,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "flex-start",
    width: "100%",
    marginBottom: 20,
  },

  content: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 10,
  },

  img: { width: 250, height: 200, borderRadius: 15 },

  button:{
    backgroundColor:colors.azure,
    width:"40%",
    maxWidth:250,
    alignSelf:"flex-start",
    marginHorizontal:20,
    paddingHorizontal:10,
    paddingVertical:5,
    marginVertical:8,
    height:40,
    borderRadius:10,
  },

  textButton:{
    textAlign: "center",
    textAlignVertical:"center",
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  }
});
