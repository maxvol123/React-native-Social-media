import { Button, Text, View, StyleSheet, TouchableOpacity} from "react-native";
 
const Home = () => {
    return(
        <View>
    <TouchableOpacity onPress={() => alert('Button Pressed!')}>
      <Text style={styles.btn}>Login</Text>
    </TouchableOpacity>
     </View>
    )
} 
const styles = StyleSheet.create({
    btn: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: "right"
    },
  });
export default Home