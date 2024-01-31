import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';

export const Post = () => {
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
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ut consequatur! Obcaecati officiis similique magnam corrupti reprehenderit exercitationem blanditiis? Ratione reiciendis quae quos libero deleniti at sunt dolorum adipisci sed.
      Nihil quasi et aspernatur fuga delectus? Repellendus similique ea illo molestiae et officia quae mollitia commodi consectetur doloremque in ex exercitationem tenetur distinctio ipsum sunt odit nostrum debitis, velit magnam.
      Necessitatibus tempore magni neque quos quibusdam aperiam architecto sapiente, obcaecati quasi numquam animi. Repellat asperiores ullam deserunt suscipit pariatur magni, praesentium quasi id blanditiis adipisci architecto, possimus soluta voluptates provident.
      At libero aperiam obcaecati aut quasi laboriosam minus autem eveniet vel assumenda nam numquam necessitatibus natus, commodi quos mollitia amet perspiciatis sunt sequi accusamus. Eos natus fugiat laboriosam reiciendis rerum?
      Asperiores doloremque maiores possimus temporibus suscipit deleniti ullam! Eius nobis, vero veritatis non eos nostrum, veniam laborum unde ab odio cupiditate aut doloribus nisi iure ad! Quod quibusdam nemo corrupti. </Text>
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
  });