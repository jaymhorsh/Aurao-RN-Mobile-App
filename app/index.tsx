import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40, fontWeight:600, color:'green'}}>Aurao App <Text></Text></Text>
      <StatusBar style="auto" />
      <Link href={'/profile'} style={{color:'green'}}>Go to profile</Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
