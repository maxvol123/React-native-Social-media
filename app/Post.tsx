import { Text, View, StyleSheet, SafeAreaView, Image, Button, Alert } from 'react-native';

export const Post = (props: { text: string }) => {
    return (
      <SafeAreaView style={styles.container}>
      <View >
        <View style={styles.post}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View>
      <Text style={styles.post__text}>{props.text} </Text>
    <View style={styles.post__button}>
      <Button
        title="Likee"
        color="black"
        onPress={() => Alert.alert('Like')}
      />
      <Button
        title="Comment"
        color="black"
        onPress={() => Alert.prompt('Enter your comment')}
      />
      <Button
        title="Share"
        color="black"
        onPress={() => Alert.alert('Share')}
      />
    </View>
</View>
        </View>
        </View>
  </SafeAreaView>
  
    );
  };
  const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    post: {
        marginTop: 10,
        borderBlockColor: "black",
        borderRadius: 10,
        borderWidth: 0.5,
        padding: 5,
        flexDirection: "row",
    },
    tinyLogo: {
      width: 100,
      height: 100,
      marginRight: 10
    },
    post__text:{
      maxWidth: 270,
      flexWrap: "wrap"
    },
    post__button:{
      flexDirection: "row",
      marginTop: "auto"
    }
  });