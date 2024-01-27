import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export const NavBar = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text}>X</Text>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>My Profile</Text>

    </View>
</SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    minHeight: 45
  },
  text: {
    fontSize: 25,
    flex:1,
  },
});

export default NavBar;
