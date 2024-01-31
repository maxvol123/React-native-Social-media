import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './app/index';
import { NavBar } from './app/Navbar';
import { Post } from './app/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <Text><NavBar/></Text>
      <Home></Home>
      <Post/>
      <StatusBar style="auto"/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 50,
  },
});
