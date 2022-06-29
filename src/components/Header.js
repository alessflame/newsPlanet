import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../common/lists/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NewsPlanet</Text>

      <Image
        style={styles.logo}
        source={require("../assets/images/handsicon.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 60,
    backgroundColor: colors.azure,
    height: 100,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    // borderColor: "red",
    // borderWidth: 1,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    fontSize:30,
    paddingTop: 10,
    height: 50,
    width: 150,
    height: 50,
    fontSize: 25,
    fontWeight:"bold",
    color:"white",
    
  },
});
